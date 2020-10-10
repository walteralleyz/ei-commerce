import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    OneToMany
} from 'typeorm';

import { Sales } from './sales';

@Entity()
@Unique([ 'email' ])
export class Employees {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    position: string;

    @Column()
    password: string;

    @Column({ type: 'int8' })
    status: number

    @Column({ type: 'bigint' })
    salary: number;

    @Column({ type: 'timestamp' })
    createdat: number;

    @Column({ type: 'timestamp' })
    updatedat: number;

    @OneToMany(() => Sales, sales => sales.consumer)
    sales: Sales[]
}