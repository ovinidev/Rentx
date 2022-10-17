import { Category } from '../models/Categories';
import { ICategoriesRepository } from './ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  listByName(name: string): Category {
    const categorySearched = this.categories.find((category) => {
      return category.name === name;
    });

    return categorySearched;
  }
}
