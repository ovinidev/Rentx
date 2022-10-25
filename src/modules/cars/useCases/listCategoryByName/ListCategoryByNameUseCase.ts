import { inject, injectable } from 'tsyringe';
import { Category } from '../../entities/Category';
import { CategoriesRepository } from '../../repositories/typeorm/CategoriesRepositories';

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
