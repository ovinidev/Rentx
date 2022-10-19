import { v4 } from 'uuid';
import { ISpecification } from '../../../interfaces/ISpecification';

export class Specification implements ISpecification {
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
