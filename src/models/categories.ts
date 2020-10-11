import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique
} from 'typeorm';

import { IEntity } from '../controller/template';

@Entity()
@Unique([ 'category' ])
export class Categories implements IEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string;
}