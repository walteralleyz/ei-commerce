import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    OneToMany
} from 'typeorm';

import { Sales } from './sales';

@Entity()
@Unique([ 'email', 'phone' ])
export class Consumer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    password: string;

    @Column({ type: 'timestamp' })
    createdat: number;

    @Column({ type: 'timestamp' })
    updatedat: number;

    @OneToMany(() => Sales, sales => sales.consumer)
    sales: Sales[]
}