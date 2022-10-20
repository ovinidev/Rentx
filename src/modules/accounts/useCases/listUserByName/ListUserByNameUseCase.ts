import { inject, injectable } from 'tsyringe';
import { User } from '../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
export class ListUserByNameUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(username: string): Promise<User> {
    return await this.userRepository.listByName(username);
  }
}
