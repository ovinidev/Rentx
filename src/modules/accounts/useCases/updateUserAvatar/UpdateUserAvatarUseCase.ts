import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute() {
    console.log('oi');
  }
}
