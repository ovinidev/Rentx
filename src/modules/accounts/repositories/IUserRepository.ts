import { User } from '../entities/User';

export interface ICreateUserDTO {
  name: string;
  username: string;
  email: string;
  password: string;
  driver_license: string;
}

export class IUserRepository {
  create: ({
    name,
    username,
    driver_license,
    email,
    password,
  }: ICreateUserDTO) => Promise<void>;

  delete: (username: string) => Promise<void>;

  list: () => Promise<User[]>;

  listByUsername: (username: string) => Promise<User>;

  listByEmail: (email: string) => Promise<User>;
}
