import { CategoriesRepository } from '../../repositories/typeorm/CategoriesRepositories';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

export default () => {
  const categoriesRepository = new CategoriesRepository();

  const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

  const importCategoryController = new ImportCategoryController(
    importCategoryUseCase,
  );

  return importCategoryController;
};
