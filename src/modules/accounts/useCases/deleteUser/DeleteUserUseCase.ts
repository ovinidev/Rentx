import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(username: string) {
    const verifyUserExist = await this.userRepository.listByUsername(username);

    if (!verifyUserExist) {
      throw new Error('Usuário não existe');
    }

    this.userRepository.delete(username);
  }
}
