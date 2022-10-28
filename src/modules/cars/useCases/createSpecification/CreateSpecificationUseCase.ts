import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { ISpecificationRepository } from '../../infra/typeorm/ISpecificationRepositories';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.listByName(name);

    if (specificationAlreadyExists) {
      throw new AppError('Specification already exists');
    }

    await this.specificationRepository.create({ name, description });
  }
}
