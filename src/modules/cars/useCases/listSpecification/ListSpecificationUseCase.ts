import { inject, injectable } from 'tsyringe';
import { Specification } from '../../entities/Specification';
import { SpecificationRepository } from '../../repositories/typeorm/SpecificationRepositories';

@injectable()
export class ListSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private listSpecificationUseCase: SpecificationRepository,
  ) {}

  async execute(): Promise<Specification[]> {
    return await this.listSpecificationUseCase.list();
  }
}
