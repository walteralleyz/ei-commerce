import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from 'typeorm';

import { Sales } from './sales';

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    label: string;

    @Column()
    category: string;

    @Column({ type: 'bigint' })
    price: number;

    @Column()
    qnt: number;

    @Column({ type: 'timestamp' })
    createdat: number;

    @Column({ type: 'timestamp' })
    updatedat: number;

    @OneToMany(() => Sales, sales => sales.consumer)
    sales: Sales[]
}