import { Request, Response, Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepositories';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

export const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get('/', (req: Request, res: Response) => {
  const allCategories = categoriesRepository.list();

  return res.status(200).json(allCategories);
});

categoriesRoutes.get('/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  const response = categoriesRepository.listByName(name);

  return res.status(200).json(response);
});

categoriesRoutes.post('/', (req: Request, res: Response) => {
  return createCategoryController.handle(req, res);
});
