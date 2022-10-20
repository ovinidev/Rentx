import { Specification } from '../../entities/Specification';
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepositories';

export class ListSpecificationUseCase {
  constructor(private listSpecificationUseCase: SpecificationRepository) {}

  async execute(): Promise<Specification[]> {
    return await this.listSpecificationUseCase.list();
  }
}
