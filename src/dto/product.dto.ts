import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDto {
  @IsNotEmpty({ message: 'This field is not empty' })
  categoryId?: number;

  @MinLength(5, { message: 'This field must be more than 5 charaters' })
  productName?: string;

  @IsNumber({}, { message: 'This field is number' })
  price?: number;
}
