import { Controller, Delete, Get, HttpStatus, Post, Put } from "@nestjs/common";
import { ProductService } from './product.service';
import { ResponseData } from "../../global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";

@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService) {

    }

    @Get()
    getProducts(): ResponseData<string> {
        try {
            return new ResponseData(this.productService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }       
    }

    @Post()
    createProduct(): string {
        try {
            return new ResponseData(this.productService.createProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Get('/:id')
    detailProduct(): string {
        try {
            return new ResponseData(this.productService.detailProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Put('/:id')
    updateProduct(): string {
        try {
            return new ResponseData(this.productService.updateProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Delete('/:id')
    deleteProduct(): string {
        try {
            return new ResponseData(this.productService.deleteProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}

