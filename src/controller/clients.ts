import { Request, Response } from 'express';

import { IEntity, Template } from './template';
import { Clients } from '../models/clients';
import { encrypt, JWTEncoded } from '../helpers/encrypt';

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
        clients.position = 'client';
        clients.createdat = new Date().getTime();
        clients.updatedat = new Date().getTime();

        return clients;
    }

    read(request: Request, response: Response) {
        const { id } = request.params;

        this.defaultResponse(
            this.repository.findOne(id, { relations: ['sales']}),
            response,
            'Não encontrado!'
        );
    }

    login(request: Request, response: Response) {
        const { email, password } = request.body;

        this.repository.findOne({ email })
        .then(data => {
            if(data.password === encrypt(password)) {
                const token = JWTEncoded({ email: data.email });

                response.cookie('token', token, { expires: new Date('12-30-2050') })
                return response.status(200).json({ success: 'ok' });
            }

            response.status(403).json({ error: 'Usuário não encontrado!' });
        })
        .catch(err => response.status(500).json({ error: 'Erro Interno' }));
    }
}