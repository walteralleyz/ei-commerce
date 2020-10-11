import { Request, Response } from 'express';

import { IEntity, Template } from './template';
import { Sales } from '../models/sales';

import { ClientsController } from './clients';
import { ProductsController } from './products';
import { EmployeesController } from './employees';

export class SalesController extends Template {
    constructor() {
        super();

        this.loadRepository(Sales);
    }

    async fillObj(body: any): Promise<IEntity> {
        const sales = new Sales();
        const { clientID, productID, employeesID, qnt } = body;

        sales.employees = await new EmployeesController().findById(employeesID);
        sales.clients = await new ClientsController().findById(clientID);
        sales.products = await new ProductsController().findById(productID);
        sales.qnt = qnt;
        
        sales.createdat = new Date().getTime();
        sales.updatedat = new Date().getTime();

        return sales;
    }

    read(request: Request, response: Response) {
        const { id } = request.params;

        this.repository.findOne(id, { relations: ['clients', 'products', 'employees' ]})
        .then(data => response.status(200).json(data))
        .catch(err => response.status(403).json({ error: 'Não encontrado' }));
    }
}