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

  updateProducts(productDto: ProductDto, id: number): Product {
    const index = this.getProducts.findIndex((item) => item.id === Number(id));
    this.product(index).categoryId = productDto.categoryId;
    this.product(index).productName = productDto.productName;
    this.product(index).price = productDto.price;
    return this.product[index];
  }

  deleteProducts(): string {
    return 'DELETE PRODUCT';
  }
}
