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

  createProducts(productDto: ProductDto): Product {
    const product: Product = {
      id: Math.random(),
      ...productDto,
    };
    this.product.push(product);
    return productDto;
  }

  detailProducts(id: number): Product {
    return this.product.find((item) => item.id === Number(id));
  }

  updateProducts(productDto: ProductDto, id: number): Product | null {
    const index = this.product.findIndex((item) => item.id === Number(id));
    if (index === -1) {
      return null;
    }
    this.product[index] = {
      ...this.product[index],
      ...productDto,
    };
    return this.product[index];
  }

  deleteProducts(id: number): boolean {
    const index = this.product.findIndex((item) => item.id === Number(id));
    if (index !== -1) {
      this.product.splice(index, 1);
      return true;
    }
    return false;
  }
}
