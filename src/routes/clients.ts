import { Request, Response, Router } from "express";
import { ClientsController } from "../controller/clients";

const instance = () => new ClientsController;

export const router = [
    Router().post('/', (rq: Request, rp: Response) => instance().create(rq, rp)),
    Router().get('/:id', (rq: Request, rp: Response) => instance().read(rq, rp)),
    Router().get('/', (rq: Request, rp: Response) => instance().readAll(rp)),
    Router().delete('/:id', (rq: Request, rp: Response) => instance().delete(rq, rp))
];