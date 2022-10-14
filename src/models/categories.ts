import { v4 } from 'uuid';
import { ICategories } from '../interfaces/categories';

export class Category implements ICategories {
  name: string;
  description: string;
  id?: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
