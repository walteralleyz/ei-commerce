import { Request, Response, Router } from "express";
import { template } from './template';
import { ProductsController } from "../controller/products";
import { create, validator } from '../helpers/productsValidator';

const instance = () => new ProductsController();

export const router = [
    ...template(create, validator, instance)
];