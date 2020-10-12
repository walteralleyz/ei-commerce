import { ConnectionOptions } from 'typeorm';
import { config } from 'dotenv';

import { Cat } from '../models/categories';
import { Clients } from '../models/clients';
import { Products } from '../models/products';
import { Sales } from '../models/sales';

config();

export const options: ConnectionOptions = {
    url: process.env.DATABASE_URL,
    synchronize: false,
    type: 'postgres',
    ssl: {
        rejectUnauthorized: false
    },
    migrations: ['migration/*.js'],
    cli: {
        migrationsDir: 'migration'
    },
    entities: [
        Cat,
        Clients,
        Products,
        Sales
    ]
};