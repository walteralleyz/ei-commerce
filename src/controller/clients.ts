import { Request, Response } from 'express';

import { IEntity, Template } from './template';
import { Clients } from '../models/clients';

export class ClientsController extends Template {
    constructor() {
        super();

        this.loadRepository(Clients);
    }

    fillObj(body: any): IEntity {
        const clients = new Clients();
        const { name, email, phone, password } = body;

        clients.name = name;
        clients.email = email;
        clients.phone = phone;
        clients.password = password;
        clients.createdat = new Date().getTime();
        clients.updatedat = new Date().getTime();

        return clients;
    }

    read(request: Request, response: Response) {
        const { id } = request.params;

        this.repository.findOne(id, { relations: ['sales']})
        .then(data => response.status(200).json(data))
        .catch(err => response.status(403).json({ error: 'Não encontrado' }));
    }
}