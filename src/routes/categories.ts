import { Request, Response, Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepositories';

export const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

function verifyCategoryExist(req: Request, res: Response, next) {
  const { name } = req.body;
  const categoryAlreadyExists = categoriesRepository.listByName(name);

  if (categoryAlreadyExists)
    return res.status(401).json({ message: 'Category already exists' });

  next();
}

categoriesRoutes.get('/', (req: Request, res: Response) => {
  const allCategories = categoriesRepository.list();

  return res.status(200).json(allCategories);
});

categoriesRoutes.get('/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  const response = categoriesRepository.listByName(name);

  return res.status(200).json(response);
});

categoriesRoutes.post(
  '/',
  verifyCategoryExist,
  (req: Request, res: Response) => {
    const { name, description } = req.body;

    categoriesRepository.create({ name, description });

    return res.status(200).json(categoriesRepository);
  },
);
