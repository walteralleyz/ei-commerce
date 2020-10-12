import { Request, Response, Router } from "express";

export const template = (validators: any, validation: any, instance: any) => [
    Router().post('/', validators, validation, (rq: Request, rp: Response) => instance().create(rq, rp)),
    Router().get('/:id', (rq: Request, rp: Response) => instance().read(rq, rp)),
    Router().get('/', (rq: Request, rp: Response) => instance().readAll(rp)),
    Router().delete('/:id', (rq: Request, rp: Response) => instance().delete(rq, rp))
];