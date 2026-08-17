import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

@Entity('categories')
export class CategoriesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryName: string;

  @Column()
  description: string;

  @OneToMany(() => CarsEntity, cars => cars.categories)
  @JoinColumn()
  cars: CarsEntity()
}
