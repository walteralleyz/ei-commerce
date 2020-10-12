import { Request, Response, Router } from "express";
import { template } from './template';
import { ProductsController } from "../controller/products";
import { create, validator } from '../helpers/productsValidator';
import { JWTDecode } from "../helpers/encrypt";

const instance = () => new ProductsController();

export const router = [
    ...template(JWTDecode, create, validator, instance)
];