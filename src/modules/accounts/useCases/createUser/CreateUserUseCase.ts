import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import {
  ICreateUserDTO,
  IUserRepository,
} from '../../infra/typeorm/repositories/IUserRepository';

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
    const verifyUserExistByUsername = await this.userRepository.listByUsername(
      username,
    );

    if (verifyUserExistByUsername) {
      throw new AppError('Usuário já existe');
    }

    const verifyUserExistByEmail = await this.userRepository.listByEmail(email);

    if (verifyUserExistByEmail) {
      throw new AppError('Email já registrado');
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      username,
      driver_license,
      email,
      password: passwordHash,
    });
  }
}
