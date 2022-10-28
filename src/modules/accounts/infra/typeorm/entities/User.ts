import { v4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { IUsers } from '../../../../../interfaces/IUsers';

@Entity('users')
export class User implements IUsers {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  driver_license: string;

  @Column()
  isAdmin: boolean;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = v4();
  }
}
