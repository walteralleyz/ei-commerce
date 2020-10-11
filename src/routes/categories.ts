import { Request, Response, Router } from 'express';
import { CategoriesController } from '../controller/categories';

const instance = () => new CategoriesController();

export const router = [
    Router().post('/', (rq: Request, rp: Response) => instance().create(rq, rp))
];