import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    username: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.listByEmail(email);

    if (!user) {
      throw new AppError('Email ou senha incorretos', 400);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email ou senha incorretos', 400);
    }

    const token = sign({}, 'fe57e2c20af5d4fa504c98a757be5631', {
      subject: user.id,
      expiresIn: '1d',
    });

    const response = {
      user: {
        name: user.name,
        username: user.username,
        email: user.email,
      },
      token,
    };

    return response;
  }
}
