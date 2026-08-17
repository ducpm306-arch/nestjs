import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('cars')
export class CategoriesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  price: string;

  @Column()
  category_id: number;

  @ManyToOne(() => CategoriesEntity)
  @JoinColumn()
  category: CategoriesEntity

}
