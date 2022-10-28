import { AppError } from '../../../../errors/AppError';
import { ICreateUserDTO } from '../../infra/typeorm/repositories/IUserRepository';
import { UserRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let userRepositoryInMemory: UserRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory,
    );
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });
  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      email: 'vini@gmail.com',
      driver_license: '1123',
      name: 'vini',
      username: 'vini13',
      password: '123',
    };

    await createUserUseCase.execute(user);

    const response = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(response).toHaveProperty('token');
  });

  it('should not be able to authenticate an nonexistent user', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        email: 'other@gmail.com',
        driver_license: '1123',
        name: 'other',
        username: 'other123',
        password: '123',
      };

      await authenticateUserUseCase.execute({
        email: user.email,
        password: user.password,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be have password incorrect', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        email: 'vini@gmail.com',
        driver_license: '1123',
        name: 'vini',
        username: 'vini13',
        password: '123',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: '555',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
