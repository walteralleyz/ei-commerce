import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany, Binary
} from 'typeorm';
import { IEntity } from '../controller/template';

import { Sales } from './sales';

@Entity()
export class Products implements IEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    label: string;

    @Column()
    category: string;

    @Column({ type: 'float' })
    price: number;

    @Column()
    qnt: number;

    @Column({ type: 'bigint' })
    createdat: number;

    @Column({ type: 'bigint' })
    updatedat: number;

    @OneToMany(() => Sales, sales => sales.products)
    sales: Sales[]
}