import { Request, Response, Router } from "express";
import { ProductsController } from "../controller/products";


const instance = () => new ProductsController();

export const router = [
    Router().post('/', (rq: Request, rp: Response) => instance().create(rq, rp)),
    Router().get('/:id', (rq: Request, rp: Response) => instance().read(rq, rp)),
    Router().delete('/:id', (rq: Request, rp: Response) => instance().delete(rq, rp))
];