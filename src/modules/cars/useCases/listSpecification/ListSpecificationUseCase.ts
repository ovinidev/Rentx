import { Specification } from '../../models/Specification';
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepositories';

export class ListSpecificationUseCase {
  constructor(public listSpecificationUseCase: SpecificationRepository) {}

  execute(): Specification[] {
    const allSpecifications = this.listSpecificationUseCase.list();

    return allSpecifications;
  }
}
