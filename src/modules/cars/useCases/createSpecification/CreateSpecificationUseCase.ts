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

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationRepository.listByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }

    this.specificationRepository.create({ name, description });
  }
}
