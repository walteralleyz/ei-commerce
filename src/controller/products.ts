import { IEntity, Template } from "./template";
import { Products } from '../models/products';
import { CategoriesController } from './categories';
import { ClientsController } from "./clients";

export class ProductsController extends Template {
    constructor() {
        super();

        this.loadRepository(Products)
    }

    async fillObj(body: any): Promise<IEntity | boolean> {
        const { label, category, price, qnt, email } = body;
        const products = new Products();
        const categories = new CategoriesController();
        const clients = new ClientsController();

        let clientData = await clients.repository.findOne({ email });

        if(clientData?.position === 'admin') {
            products.label = label;
            products.category = category;
            products.price = price;
            products.qnt = qnt;
            products.createdat = new Date().getTime();
            products.updatedat = new Date().getTime();

            categories.fillObj(category);

            return products;
        }

        return false;
    }

    async sold(id:number, qnt: number) {
        let product = await this.repository.findOne(id);

        if(!product)
            return false;
            
        if(product.qnt + qnt < 0)
            return false;

        product.qnt = product.qnt + qnt;
        product = await this.repository.save(product);
        return product;
    }
}