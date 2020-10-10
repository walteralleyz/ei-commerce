import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne, Column
} from 'typeorm';

import { Consumer } from './costumer';
import { Products } from './products';
import { Employees } from './employees';

@Entity()
export class Sales {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    qnt: number;

    @ManyToOne(() => Consumer, consumer => consumer.sales)
    consumer: Consumer

    @ManyToOne(() => Products, products => products.sales)
    products: Products

    @ManyToOne(() => Employees, employees => employees.sales)
    employees: Employees

    @Column({ type: 'timestamp' })
    createdat: number;

    @Column({ type: 'timestamp' })
    updatedat: number;
}