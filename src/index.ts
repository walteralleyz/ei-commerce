import bodyParser from 'body-parser';
import express from 'express';
import "reflect-metadata";
import { createConnection } from 'typeorm';

import { options } from './helpers/ormconfig';
import { router as productsRouter } from './routes/products';
import { router as clientsRouter } from './routes/clients';

const app = express();
const port = process.env.PORT || 5000;

createConnection(options)
.then(() => console.log('Database connected!'))
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);
app.use('/api/clients', clientsRouter);

app.listen(port, () => console.log('Server listening on', port));