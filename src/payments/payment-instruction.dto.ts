import { IsString } from 'class-validator';

export class PaymentInstructionDto {
  @IsString()
  readonly orderId: string;
}
