import { Router } from 'express';
import multer from 'multer';
import importCategoryController from '../modules/cars/useCases/importCategory';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';
import { ListCategoryByNameController } from '../modules/cars/useCases/listCategoryByName/ListCategoryByNameController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const categoriesRoutes = Router();

categoriesRoutes.use(ensureAuthenticated);

const upload = multer({
  dest: './tmp',
});

const listCategoriesController = new ListCategoriesController();
categoriesRoutes.get('/', listCategoriesController.handle);

const listCategoryByNameController = new ListCategoryByNameController();
categoriesRoutes.get('/:name', listCategoryByNameController.handle);

const createCategoryController = new CreateCategoryController();
categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
  return importCategoryController().handle(req, res);
});
