import { inject, injectable } from 'tsyringe';
import {
  ICreateUserDTO,
  IUserRepository,
} from '../../repositories/IUserRepository';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({
    name,
    username,
    driver_license,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const verifyUserExist = await this.userRepository.listByName(username);

    if (verifyUserExist) {
      console.log(verifyUserExist);
      throw new Error('Usuário já existe');
    }

    await this.userRepository.create({
      name,
      username,
      driver_license,
      email,
      password,
    });
  }
}
