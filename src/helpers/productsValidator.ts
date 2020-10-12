import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const create = [
    body(['label', 'category']).not().isEmpty().isLength({ min: 10 }).not().isNumeric(),
    body('qnt').isNumeric(),
    body('price').isFloat()
];

export const validator = (rq: Request, rp: Response, next: any) => {
    const errors = validationResult(rq);

    if(!errors.isEmpty())
        return rp.status(400).json({ error: errors.array() });

    next();
};