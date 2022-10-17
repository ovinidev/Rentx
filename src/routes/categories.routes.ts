import { Request, Response, Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import {
  listCategoriesByNameController,
  listCategoriesController,
} from '../modules/cars/useCases/listCategories';

export const categoriesRoutes = Router();

categoriesRoutes.get('/', (req: Request, res: Response) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.get('/:name', (req: Request, res: Response) => {
  return listCategoriesByNameController.handle(req, res);
});

categoriesRoutes.post('/', (req: Request, res: Response) => {
  return createCategoryController.handle(req, res);
});
