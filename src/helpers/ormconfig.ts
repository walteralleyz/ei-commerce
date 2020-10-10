import { ConnectionOptions } from 'typeorm';
import { config } from 'dotenv';

import { Categories } from '../models/categories';
import { Consumer } from '../models/costumer';
import { Employees } from '../models/employees';
import { Products } from '../models/products';
import { Sales } from '../models/sales';

config();

export const options: ConnectionOptions = {
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PSWD,
    database: process.env.DATABASE_DATA,
    type: 'postgres',
    ssl: {
        rejectUnauthorized: false
    },
    migrations: ['migration/*.js'],
    cli: {
        migrationsDir: 'migration'
    },
    entities: [
        Categories,
        Consumer,
        Employees,
        Products,
        Sales
    ]
};