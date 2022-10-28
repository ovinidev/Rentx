import { AppError } from '../../../../errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICategoriesRepository } from '../../infra/typeorm/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.listByName(
      name,
    );

    if (categoryAlreadyExists) throw new AppError('Category already exists');

    await this.categoriesRepository.create({ name, description });
  }
}
