import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.listByName(name);

    if (categoryAlreadyExists) throw new Error('Category already exists');

    this.categoriesRepository.create({ name, description });
  }
}
