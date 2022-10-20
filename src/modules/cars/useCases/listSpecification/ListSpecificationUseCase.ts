import { inject, injectable } from 'tsyringe';
import { Specification } from '../../entities/Specification';
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepositories';

@injectable()
export class ListSpecificationUseCase {
  constructor(
    @inject('CategoriesSpecification')
    private listSpecificationUseCase: SpecificationRepository,
  ) {}

  async execute(): Promise<Specification[]> {
    return await this.listSpecificationUseCase.list();
  }
}
