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

config();

const hmac = createHmac('sha256', process.env.KEY_SECRET || 'teste');

@Entity()
@Unique([ 'email', 'phone' ]) 
export class Clients {
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
    phone: string;

    @Column()
    password: string;

    @Column({ type: 'bigint' })
    createdat: number;

    @Column({ type: 'bigint' })
    updatedat: number;

    @OneToMany(() => Sales, sales => sales.clients)
    sales: Sales[]
}