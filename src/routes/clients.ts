import { Request, Response, Router } from "express";
import { template } from './template';
import { ClientsController } from "../controller/clients";
import { create, login, validator } from '../helpers/clientsValidator';

import { JWTDecode } from '../helpers/encrypt';

const instance = () => new ClientsController;

export const router = [
    ...template(JWTDecode, create, validator, instance),
    Router().post('/', (rq: Request, rp: Response) => instance().create(rq, rp)),
    Router().post('/login', login, validator, 
    (rq: Request, rp: Response) => instance().login(rq, rp))
];