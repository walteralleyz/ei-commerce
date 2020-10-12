import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    OneToMany, BeforeInsert
} from 'typeorm';

import { Sales } from './sales';
import { IEntity } from '../controller/template';
import { encrypt } from '../helpers/encrypt';

@Entity()
@Unique([ 'email', 'phone' ]) 
export class Clients implements IEntity {
    @BeforeInsert()
    encryptPassword() {
        this.password = encrypt(this.password);
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