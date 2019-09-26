import { TransactionStatus } from './transaction-status.enum';

export class PaymentTransaction {
  transactionId: string;
  transactionStatus: TransactionStatus;
  receiptId: string;
}
