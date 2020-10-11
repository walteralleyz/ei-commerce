import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    OneToMany, BeforeInsert
} from 'typeorm';
import { createHmac } from 'crypto';
import { config } from 'dotenv';

import { Sales } from './sales';
import { IEntity } from '../controller/template';

config();
const hmac = createHmac('sha256', process.env.KEY_SECRET || 'teste');

@Entity()
@Unique([ 'email' ])
export class Employees implements IEntity {
    @BeforeInsert()
    encryptPassword() {
        hmac.update(this.password);
        this.password = hmac.digest('hex');
    }

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

    @Column({ type: 'float' })
    salary: number;

    @Column({ type: 'bigint' })
    createdat: number;

    @Column({ type: 'bigint' })
    updatedat: number;

    @OneToMany(() => Sales, sales => sales.employees)
    sales: Sales[]
}