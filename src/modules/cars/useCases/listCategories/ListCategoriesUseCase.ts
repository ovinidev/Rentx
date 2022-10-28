import { inject, injectable } from 'tsyringe';
import { CategoriesRepository } from '../../infra/typeorm/CategoriesRepositories';
import { Category } from '../../infra/typeorm/entities/Category';

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepositories: CategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const allCategories = await this.categoriesRepositories.list();

    return allCategories;
  }
}
