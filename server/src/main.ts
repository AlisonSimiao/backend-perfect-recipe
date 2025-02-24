import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { ValidationPipe } from './validation/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('API para generenciamento dos dados perfect recipe')
    .setDescription('')
    .setVersion('0.6')
    .addServer(`http://localhost:${process.env.PORT}`)
    .addBearerAuth({
      type: 'http',
      scheme: 'Bearer',
      in: 'header',
    })
    .build();

  const options: SwaggerCustomOptions = {
    customSiteTitle: `Perfect recipe Rest API`,
    swaggerOptions: {
      docExpansion: 'none',
    },
  };

  const mainDocument = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, mainDocument, options);

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
