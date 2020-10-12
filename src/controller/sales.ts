import { Request, Response } from 'express';

import { IEntity, Template } from './template';
import { Sales } from '../models/sales';

import { ClientsController } from './clients';
import { ProductsController } from './products';

export class SalesController extends Template {
    constructor() {
        super();

        this.loadRepository(Sales);
    }

    async fillObj(body: any): Promise<IEntity> {
        const sales = new Sales();
        const { clientID, productID, qnt } = body;

        sales.clients = await new ClientsController().findById(clientID);
        sales.products = await new ProductsController().sold(productID, qnt);
        sales.qnt = qnt;
        
        sales.createdat = new Date().getTime();
        sales.updatedat = new Date().getTime();

        if(!sales.products.qnt)
            return false;

        if(!sales.clients || !sales.products)
            return false;

        return sales;
    }

    read(request: Request, response: Response) {
        const { id } = request.params;

        this.repository.findOne(id, { relations: ['clients', 'products']})
        .then(data => response.status(200).json(data))
        .catch(err => response.status(403).json({ error: 'Não encontrado' }));
    }
}