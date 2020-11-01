import { Request, Response, Router } from "express";
import { template } from './template';
import { ProductsController } from "../controller/products";
import { create, validator } from '../helpers/productsValidator';
import { JWTDecode } from "../helpers/encrypt";

const instance = () => new ProductsController();

export const router = [
    ...template(JWTDecode, create, validator, instance),
    Router().post('/', JWTDecode, create, validator, (rq: Request, rp: Response) => instance().create(rq, rp)),
    Router().get('/', (req: Request, res: Response) => instance().readAll(res))
];