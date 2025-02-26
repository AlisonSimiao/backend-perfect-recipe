import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
      .then(() => {
        console.log('conectado ao banco de dados');
      })
      .catch((err) => {
        console.error('erro ao se conectar ao banco', err);
        process.exit(-1);
      });
  }
}
