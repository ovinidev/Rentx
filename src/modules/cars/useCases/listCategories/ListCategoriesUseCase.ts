import { Category } from '../../entities/Category';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepositories';

export class ListCategoriesUseCase {
  constructor(private categoriesRepositories: CategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const allCategories = await this.categoriesRepositories.list();

    return allCategories;
  }
}
