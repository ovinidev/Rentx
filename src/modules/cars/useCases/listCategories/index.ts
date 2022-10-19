import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepositories';
import {
  ListCategoriesByNameController,
  ListCategoriesController,
} from './ListCategoriesController';
import {
  ListCategoriesByNameUseCase,
  ListCategoriesUseCase,
} from './ListCategoriesUseCase';

export default () => {
  const listCategoriesRepository = new CategoriesRepository();

  const listCategoriesUseCase = new ListCategoriesUseCase(
    listCategoriesRepository,
  );

  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase,
  );

  // const listCategoriesByNameUseCase = new ListCategoriesByNameUseCase(
  //   listCategoriesRepository,
  // );

  // const listCategoriesByNameController = new ListCategoriesByNameController(
  //   listCategoriesByNameUseCase,
  // );

  return listCategoriesController;
};
