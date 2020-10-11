import { Request, Response, Router } from "express";
import { EmployeesController } from "../controller/employees";


const instance = () => new EmployeesController();

export const router = [
    Router().post('/', (rq: Request, rp: Response) => instance().create(rq, rp)),
    Router().get('/:id', (rq: Request, rp: Response) => instance().read(rq, rp)),
    Router().delete('/:id', (rq: Request, rp: Response) => instance().delete(rq, rp))
];