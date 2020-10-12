import { Request, Response, Router } from "express";

export const template = (auth: any, validators: any, validation: any, instance: any) => [
    Router().post('/', auth, validators, validation, (rq: Request, rp: Response) => instance().create(rq, rp)),
    Router().get('/:id', auth, (rq: Request, rp: Response) => instance().read(rq, rp)),
    Router().get('/', auth, (rq: Request, rp: Response) => instance().readAll(rp)),
    Router().delete('/:id', auth, (rq: Request, rp: Response) => instance().delete(rq, rp))
];