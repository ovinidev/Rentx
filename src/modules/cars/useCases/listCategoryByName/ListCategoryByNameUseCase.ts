import { inject, injectable } from 'tsyringe';
import { CategoriesRepository } from '../../infra/typeorm/CategoriesRepositories';
import { Category } from '../../infra/typeorm/entities/Category';

@injectable()
export class ListCategoriesByNameUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepositories: CategoriesRepository,
  ) {}

  async execute(name: string): Promise<Category> {
    const response = await this.categoriesRepositories.listByName(name);

    return response;
  }
}
