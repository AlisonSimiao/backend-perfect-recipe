import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';
@Injectable()
export class EmailService implements OnModuleInit {
  private mailer: Transporter;
  private readonly logger = new Logger(EmailService.name);

  onModuleInit() {
    try {
      const isDevelopment = process.env.NODE_ENV === 'development';

      // Validate required environment variables
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        throw new Error('Email user or password is not configured.');
      }

      if (
        isDevelopment &&
        (!process.env.EMAIL_HOST || !process.env.EMAIL_PORT)
      ) {
        throw new Error(
          'Email host or port is not configured for development.',
        );
      }

      if (!isDevelopment && !process.env.EMAIL_SERVICE) {
        throw new Error('Email service is not configured for production.');
      }

      // Create the mailer transport
      this.mailer = createTransport({
        ...(isDevelopment
          ? {
              host: process.env.EMAIL_HOST,
              port: +(process.env.EMAIL_PORT || 0),
            }
          : { service: process.env.EMAIL_SERVICE }),
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      this.logger.log('Mailer transport initialized successfully.');
    } catch (error) {
      this.logger.error(
        'Failed to initialize mailer transport:',
        error.message,
      );
      throw error; // Re-throw the error to prevent the application from starting
    }
  }

  private sendCode({
    code,
    expireIn,
  }: {
    code: string;
    expireIn: number;
  }): string {
    const html = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Código de Verificação</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              padding-bottom: 20px;
            }
            .header h1 {
              color: #333333;
              font-size: 24px;
              margin: 0;
            }
            .content {
              color: #555555;
              font-size: 16px;
              line-height: 1.6;
            }
            .code {
              display: inline-block;
              margin: 20px 0;
              padding: 12px 24px;
              background-color: #007bff;
              color: #ffffff;
              font-size: 24px;
              font-weight: bold;
              border-radius: 4px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #999999;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Código de Verificação</h1>
            </div>
            <div class="content">
              <p>Olá,</p>
              <p>Você solicitou um código de verificação para redefinir sua senha. Use o código abaixo no aplicativo:</p>
              <div class="code">${code}</div>
              <p>Se você não solicitou este código, ignore este e-mail ou entre em contato conosco para garantir a segurança da sua conta.</p>
              <p>Atenciosamente,<br>Equipe de Suporte</p>
            </div>
            <div class="footer">
              <p>Este código é válido por ${expireIn} minutos.</p>
            </div>
          </div>
        </body>
        </html>
    `;
    return html;
  }

  async sendEmail(
    to: string,
    tipoEmail: 'sendCode',
    body: any, // Extrai o tipo do primeiro parâmetro da função
  ): Promise<any> {
    return this.mailer.sendMail({
      from: process.env.EMAIL_USER,
      subject: body.subject || ' ',
      to,
      html: this[tipoEmail](body),
    });
  }
}
