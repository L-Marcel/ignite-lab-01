import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'classroom',
        brokers: ['localhost:29092'],
      },
    },
  });

  await app.startAllMicroservices().then(() => {
    console.log('[Classroom] microservices running...');
  });

  await app.listen(3334).then(() => {
    console.log('[Classroom] is running...');
  });
}
bootstrap();
