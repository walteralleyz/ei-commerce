import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique
} from 'typeorm';

import { IEntity } from '../controller/template';

@Entity()
@Unique([ 'category' ])
export class Cat implements IEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string;
}