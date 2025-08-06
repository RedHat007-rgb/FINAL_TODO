import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { todoSchema } from './db.todo';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Todo',
        schema: todoSchema,
      },
      { name: 'User', schema: todoSchema },
    ]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL') ?? '',
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [MongooseModule],
})
export class DbModule {}
