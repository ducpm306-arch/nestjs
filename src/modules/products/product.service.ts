import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService () {

    

    getProducts() {
        return 'GET LIST PRODUCTS';
    }
    
    createProduct(): string {
        return 'POST LIST PRODUCT';
    }
   
    detailProduct(): string {
        return 'DETAIL PRODUCT';
    }
    
    updateProduct(): string {
        return 'UPDATE PRODUCT';
    }
    
    deleteProduct(): string {
        return 'DELETE PRODUCT';
    }
}