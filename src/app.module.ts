import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiModule } from './api.module';

@Module({
  imports: [ApiModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
