import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Dog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column('int')
  age: number;
}
