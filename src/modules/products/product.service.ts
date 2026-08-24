import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {

    private products: Product[] = [
        {id: 1, categoryId: 2, price: 80000, productName: "KeyBoard"},
        {id: 2, categoryId: 3, price: 90000, productName: "Quak"},
    ]

    getProducts(): Product[] {
        return this.products;
    }
    
    createProduct(): string {
        return 'ADD PRODUCT';
    }
   
    detailProduct(): string {
        return 'Detail Product';
    }
    
    updateProduct(): string {
        return 'UPDATE PRODUCT';
    }
    
    deleteProduct(): string {
        return 'DELETE PRODUCT';
    }
}