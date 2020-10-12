import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const create = [
    body(['clientID', 'productID', 'qnt']).isNumeric().not().isEmpty()
];

export const validator = (rq: Request, rp: Response, next: any) => {
    const errors = validationResult(rq);

    if(!errors.isEmpty())
        return rp.status(400).json({ error: errors.array() });

    next();
};