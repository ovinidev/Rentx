import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from './ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    return await this.repository.find();
  }

  async listByName(name: string): Promise<Category> {
    return await this.repository.findOne({ name });
  }
}
