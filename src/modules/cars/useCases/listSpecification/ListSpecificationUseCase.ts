import { inject, injectable } from 'tsyringe';
import { Specification } from '../../infra/typeorm/entities/Specification';
import { SpecificationRepository } from '../../infra/typeorm/SpecificationRepositories';

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
