import { inject, injectable } from 'tsyringe';
import { User } from '../../infra/typeorm/entities/User';
import { IUserRepository } from '../../infra/typeorm/repositories/IUserRepository';

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
