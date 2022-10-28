import { User } from '../../entities/User';
import {
  ICreateUserDTO,
  IUserRepository,
} from '../../infra/typeorm/repositories/IUserRepository';

export class UserRepositoryInMemory implements IUserRepository {
  users: User[] = [];

  async create({
    name,
    username,
    driver_license,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      username,
      driver_license,
      email,
      password,
    });

    this.users.push(user);
  }

  async delete(username: string) {
    await console.log(username);
  }

  async list(): Promise<User[]> {
    return this.users;
  }

  async listByUsername(username: string): Promise<User> {
    return this.users.find((user) => {
      return user.username === username;
    });
  }

  async listByEmail(email: string): Promise<User> {
    return this.users.find((user) => {
      return user.email === email;
    });
  }

  async listById(id: string): Promise<User> {
    return this.users.find((user) => {
      return user.id === id;
    });
  }
}
