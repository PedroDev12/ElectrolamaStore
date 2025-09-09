import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  cardNumber: string;

  @IsNotEmpty()
  @IsString()
  expirationMonth: string;

  @IsNotEmpty()
  @IsString()
  expirationYear: string;

  @IsNotEmpty()
  @IsString()
  cvv: string;

  @IsNotEmpty()
  @IsString()
  province: string;

  @IsNumber()
  amount: number;
}
