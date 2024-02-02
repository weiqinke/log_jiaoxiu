import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { LogAndMessageModule } from './server/logandmessage.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(LogAndMessageModule, {
    transport: Transport.GRPC,
    options: {
      url: '127.0.0.1:3001',
      package: 'log_module_jiaoxiu',
      protoPath: join(__dirname, 'protobufs/log_module_jiaoxiu.proto'),
    },
  });
  await app.listen();
}
bootstrap();
