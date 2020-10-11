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
}