import { container } from 'tsyringe';
import { CategoriesRepository } from '../../../src/modules/cars/infra/typeorm/CategoriesRepositories';
import { UserRepository } from '../../../src/modules/accounts/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from '../../../src/modules/accounts/infra/typeorm/repositories/IUserRepository';
import { ICategoriesRepository } from '../../../src/modules/cars/infra/typeorm/ICategoriesRepository';
import { ISpecificationRepository } from '../../../src/modules/cars/infra/typeorm/ISpecificationRepositories';
import { SpecificationRepository } from '../../../src/modules/cars/infra/typeorm/SpecificationRepositories';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
