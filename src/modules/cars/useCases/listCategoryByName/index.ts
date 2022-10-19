import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepositories';
import { ListCategoryByNameController } from './ListCategoryByNameController';
import { ListCategoriesByNameUseCase } from './ListCategoryByNameUseCase';

export default () => {
  const categoriesRepositories = new CategoriesRepository();

  const listCategoriesByNameUseCase = new ListCategoriesByNameUseCase(
    categoriesRepositories,
  );

  const listCategoriesByNameController = new ListCategoryByNameController(
    listCategoriesByNameUseCase,
  );

  return listCategoriesByNameController;
};
