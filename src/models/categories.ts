import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique
} from 'typeorm';

@Entity()
@Unique([ 'category' ])
export class Categories {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string;
}