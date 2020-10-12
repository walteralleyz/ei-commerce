import { Request, Response, Router } from "express";
import { template } from './template';
import { SalesController } from "../controller/sales";

import { create, validator } from '../helpers/salesValidator';

const instance = () => new SalesController();

export const router = [
    ...template(create, validator, instance)
];