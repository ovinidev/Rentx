import { Category } from '../../models/Categories';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepositories';

export class ListCategoriesUseCase {
  constructor(private categoriesRepositories: CategoriesRepository) {}

  execute(): Category[] {
    const allCategories = this.categoriesRepositories.list();

    return allCategories;
  }
}

export class ListCategoriesByNameUseCase {
  constructor(private categoriesRepositories: CategoriesRepository) {}

  execute(name: string): Category {
    const response = this.categoriesRepositories.listByName(name);

    return response;
  }
}
