import { Injectable } from '@nestjs/common';
import { TransactionStatus } from './transaction-status.enum';
import { PaymentTransaction } from './payment-transaction.model';

@Injectable()
export class PaymentsService {
  processPaymentTransactionForOrder(orderId): Partial<PaymentTransaction> {
    return this.mockProcessPaymentTransaction();
  }

  private mockProcessPaymentTransaction() {
    const mockTransactionStatuses = [TransactionStatus.Confirmed, TransactionStatus.Declined];

    const mockTransaction: Partial<PaymentTransaction> = {
      transactionId: Math.random().toString(36).substring(2, 15),
      receiptId: Math.random().toString(36).substring(2, 15),
      transactionStatus: mockTransactionStatuses[Math.floor(Math.random() * mockTransactionStatuses.length)] as TransactionStatus,
    };

    return mockTransaction;
  }
}
