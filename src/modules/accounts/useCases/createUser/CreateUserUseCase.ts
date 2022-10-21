import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
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
    const verifyUserExistByUsername = await this.userRepository.listByUsername(
      username,
    );
    const verifyUserExistByEmail = await this.userRepository.listByEmail(email);

    if (verifyUserExistByUsername) {
      throw new AppError('Usuário já existe');
    }

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