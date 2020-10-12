import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne, Column
} from 'typeorm';

import { Clients } from './clients';
import { Products } from './products';

import { IEntity } from '../controller/template';

@Entity()
export class Sales implements IEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    qnt: number;

    @ManyToOne(() => Clients, clients => clients.sales)
    clients: Clients

    @ManyToOne(() => Products, products => products.sales)
    products: Products

    @Column({ type: 'bigint' })
    createdat: number;

    @Column({ type: 'bigint' })
    updatedat: number;
}