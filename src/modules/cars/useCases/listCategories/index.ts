import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepositories';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export default () => {
  const listCategoriesRepository = new CategoriesRepository();

  const listCategoriesUseCase = new ListCategoriesUseCase(
    listCategoriesRepository,
  );

  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase,
  );

  return listCategoriesController;
};
