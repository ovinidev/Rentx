import { container } from 'tsyringe';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepositories';
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepositories';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepositories';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepository>(
  'CategoriesSpecification',
  SpecificationRepository,
);
