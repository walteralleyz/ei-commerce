import { Request, Response, Router } from "express";
import { template } from './template';
import { ClientsController } from "../controller/clients";
import { create, validator } from '../helpers/clientsValidator';

const instance = () => new ClientsController;

export const router = [
    ...template(create, validator, instance)
];