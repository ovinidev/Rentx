import { getRepository, Repository } from 'typeorm';
import { Specification } from './entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from './ISpecificationRepositories';

export class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);
  }

  async list(): Promise<Specification[]> {
    return await this.repository.find();
  }

  async listByName(name: string): Promise<Specification> {
    return this.repository.findOne({ name });
  }
}
