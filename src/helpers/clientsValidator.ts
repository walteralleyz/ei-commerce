import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const create = [
    body('name').not().isEmpty().isLength({ min: 5 }).not().isNumeric(),
    body('email').isEmail(),
    body('phone').not().isEmpty().isNumeric().matches(/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/),
    body('password').isString().isLength({ min: 6 })
];

export const validator = (rq: Request, rp: Response, next: any) => {
    const errors = validationResult(rq);

    if(!errors.isEmpty())
        return rp.status(400).json({ error: errors.array() });

    next();
};