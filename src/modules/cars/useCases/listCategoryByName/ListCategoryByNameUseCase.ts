import { Category } from '../../entities/Category';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepositories';

export class ListCategoriesByNameUseCase {
  constructor(private categoriesRepositories: CategoriesRepository) {}

  async execute(name: string): Promise<Category> {
    const response = await this.categoriesRepositories.listByName(name);

    return response;
  }
}
