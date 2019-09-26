import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { PaymentTransaction } from './payment-transaction.model';
import { TransactionStatus } from './transaction-status.enum';

describe('Payments Controller', () => {
  let controller: PaymentsController;
  let paymentsService: PaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsController],
      providers: [PaymentsService],
    }).compile();

    controller = module.get<PaymentsController>(PaymentsController);
    paymentsService = module.get<PaymentsService>(PaymentsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('processPayment', () => {
    it('should return proper response when payment service returns payment transaction', async () => {
      // Arrange
      const expectedPaymentTransaction: Partial<PaymentTransaction> = {
        transactionId: '1a',
        receiptId: '2b',
        transactionStatus: TransactionStatus.Confirmed,
      };

      jest
        .spyOn(paymentsService, 'processPaymentTransactionForOrder')
        .mockImplementation(() => expectedPaymentTransaction);

      // Act
      const result = await controller.processPayment({
        orderId: 'b25871cd-7af3-4334-bb75-0a6198da6b51',
      });

      // Assert
      expect(result).toBeDefined();
      expect(result.transactionId).toBe(expectedPaymentTransaction.transactionId);
      expect(result.transactionStatus).toBe(expectedPaymentTransaction.transactionStatus);
    });
  });
});
