import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/User';
import { ICreateUserDTO, IUserRepository } from '../IUserRepository';

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
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      driver_license,
      email,
      password,
    });

    await this.repository.save(user);
  }

  async delete(username: string) {
    this.repository.delete({ username });
  }

  // list(): Promise<User[]> {}
  async listByName(username: string): Promise<User> {
    return await this.repository.findOne({ username });
  }
}
