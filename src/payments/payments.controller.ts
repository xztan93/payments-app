import { Controller, Post, Body, ValidationPipe, UsePipes, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentInstructionDto } from './payment-instruction.dto';
import { PaymentTransactionDto } from './payment-transaction.dto';
import { AuthGuard } from '../guards/auth.guard';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) { }

  @Post()
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  processPayment(@Body() body: PaymentInstructionDto): PaymentTransactionDto {
    const transaction = this.paymentService.processPaymentTransactionForOrder(body.orderId);

    return {
      transactionId: transaction.transactionId,
      transactionStatus: transaction.transactionStatus,
    };
  }
}
