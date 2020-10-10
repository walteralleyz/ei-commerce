import express from 'express';
import "reflect-metadata";
import { createConnection } from 'typeorm';
import { options } from './helpers/ormconfig';

const app = express();
const port = process.env.PORT || 5000;

createConnection(options)
.then(() => console.log('Database connected!'))
.catch(err => console.log(err));

app.listen(port, () => console.log('Server listening on ', port));