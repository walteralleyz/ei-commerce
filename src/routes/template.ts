import { Request, Response, Router } from "express";

export const template = (auth: any, validators: any, validation: any, instance: any) => [
    Router().get('/:id', auth, (rq: Request, rp: Response) => instance().read(rq, rp)),
    Router().delete('/:id', auth, (rq: Request, rp: Response) => instance().delete(rq, rp))
];