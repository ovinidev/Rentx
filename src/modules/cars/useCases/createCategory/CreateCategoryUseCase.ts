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

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.listByName(
      name,
    );

    if (categoryAlreadyExists) throw new Error('Category already exists');

    await this.categoriesRepository.create({ name, description });
  }
}
