import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
  private product: Product[] = [
    { id: 1, categoryId: 1, price: 80000, productName: 'Keyboard' },
    { id: 2, categoryId: 2, price: 90000, productName: 'Quak' },
    { id: 3, categoryId: 3, price: 100000, productName: 'QuakQuak' },
  ];

  getProducts(): Product[] {
    return this.product;
  }

  createProducts(productDto: ProductDto): ProductDto {
    return productDto;
  }

  detailProducts(id: number): Product {
    return this.product.find((item) => item.id === Number(id));
  }

  updateProducts(): string {
    return 'UPDATE PRODUCT';
  }

  deleteProducts(): string {
    return 'DELETE PRODUCT';
  }
}
