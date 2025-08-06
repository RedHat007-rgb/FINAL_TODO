import { Module } from '@nestjs/common';

import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DbModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
