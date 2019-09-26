import { TransactionStatus } from './transaction-status.enum';
import { IsEnum, IsString } from 'class-validator';

export class PaymentTransactionDto {
  @IsString()
  readonly transactionId: string;

  @IsEnum(TransactionStatus)
  readonly transactionStatus: TransactionStatus;
}
