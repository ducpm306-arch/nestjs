import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDto {
  @IsNotEmpty({ message: 'Id ko đc để trống' })
  categoryId?: number;

  @MinLength(5, { message: 'Tên sản phẩm phải dài hơn 5 ký tự' })
  productName?: string;

  @IsNumber({}, { message: 'Giá tiền phải là số' })
  price?: number;
}
