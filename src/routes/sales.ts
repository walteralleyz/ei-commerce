import { Request, Response, Router } from "express";
import { SalesController } from "../controller/sales";

const instance = () => new SalesController();

export const router = [
    Router().post('/', (rq: Request, rp: Response) => instance().create(rq, rp)),
    Router().get('/:id', (rq: Request, rp: Response) => instance().read(rq, rp)),
    Router().get('/', (rq: Request, rp: Response) => instance().readAll(rp))
];