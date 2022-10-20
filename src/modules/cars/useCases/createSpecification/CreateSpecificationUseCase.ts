import { ISpecificationRepository } from '../../repositories/ISpecificationRepositories';

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  private specificationRepository: ISpecificationRepository;

  constructor(specificationRepository: ISpecificationRepository) {
    this.specificationRepository = specificationRepository;
  }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.listByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }

    await this.specificationRepository.create({ name, description });
  }
}
