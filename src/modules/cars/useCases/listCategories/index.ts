import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepositories';
import {
  ListCategoriesByNameController,
  ListCategoriesController,
} from './ListCategoriesController';
import {
  ListCategoriesByNameUseCase,
  ListCategoriesUseCase,
} from './ListCategoriesUseCase';

const listCategoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(
  listCategoriesRepository,
);

export const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export const listCategoriesByNameUseCase = new ListCategoriesByNameUseCase(
  listCategoriesRepository,
);

export const listCategoriesByNameController =
  new ListCategoriesByNameController(listCategoriesByNameUseCase);
