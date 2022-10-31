import { v4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { ICategories } from '../../../../../interfaces/ICategories';

@Entity('Categories')
export class Category implements ICategories {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = v4();
  }
}
