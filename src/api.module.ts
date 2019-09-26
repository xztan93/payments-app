import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { HttpExceptionsFilter } from './exception-filters/http-exceptions.filter';

@Module({
  imports: [PaymentsModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionsFilter,
    },
  ],
  exports: [PaymentsModule],
})
export class ApiModule {}
