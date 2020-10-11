import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne, Column
} from 'typeorm';

import { Clients } from './clients';
import { Products } from './products';
import { Employees } from './employees';

@Entity()
export class Sales {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    qnt: number;

    @ManyToOne(() => Clients, clients => clients.sales)
    clients: Clients

    @ManyToOne(() => Products, products => products.sales)
    products: Products

    @ManyToOne(() => Employees, employees => employees.sales)
    employees: Employees

    @Column({ type: 'bigint' })
    createdat: number;

    @Column({ type: 'bigint' })
    updatedat: number;
}