import { inject, injectable } from 'tsyringe';
import { User } from '../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(): Promise<User[]> {
    return await this.userRepository.list();
  }
}
