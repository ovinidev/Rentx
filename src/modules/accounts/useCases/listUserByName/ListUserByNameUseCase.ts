import { inject, injectable } from 'tsyringe';
import { User } from '../../infra/typeorm/entities/User';
import { IUserRepository } from '../../infra/typeorm/repositories/IUserRepository';

@injectable()
export class ListUserByNameUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(username: string): Promise<User> {
    return await this.userRepository.listByUsername(username);
  }
}
