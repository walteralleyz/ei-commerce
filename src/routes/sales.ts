import { Request, Response, Router } from "express";
import { template } from './template';
import { SalesController } from "../controller/sales";

import { create, validator } from '../helpers/salesValidator';
import { JWTDecode } from "../helpers/encrypt";

const instance = () => new SalesController();

export const router = [
    ...template(JWTDecode, create, validator, instance),
    Router().post('/', JWTDecode, create, validator, (rq: Request, rp: Response) => instance().create(rq, rp)),
    Router().put('/:id', JWTDecode, create, validator, 
    (rq: Request, rp: Response) => instance().update(rq, rp)),
    Router().get('/', (rq: Request, rp: Response) => instance().readAll(rp))
];