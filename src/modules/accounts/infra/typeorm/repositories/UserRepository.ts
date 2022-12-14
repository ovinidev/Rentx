import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { IUserRepository, ICreateUserDTO } from './IUserRepository';

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    username,
    driver_license,
    email,
    password,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      driver_license,
      email,
      password,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

  async delete(username: string) {
    await this.repository.delete({ username });
  }

  async list(): Promise<User[]> {
    return await this.repository.find();
  }

  async listByUsername(username: string): Promise<User> {
    return await this.repository.findOne({ username });
  }

  async listByEmail(email: string): Promise<User> {
    return await this.repository.findOne({ email });
  }

  async listById(id: string): Promise<User> {
    return await this.repository.findOne(id);
  }
}
