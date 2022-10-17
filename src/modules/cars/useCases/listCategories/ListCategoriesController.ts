import { Request, Response } from 'express';
import {
  ListCategoriesByNameUseCase,
  ListCategoriesUseCase,
} from './ListCategoriesUseCase';

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response): Response {
    const allCategories = this.listCategoriesUseCase.execute();

    return res.status(200).json(allCategories);
  }
}

export class ListCategoriesByNameController {
  constructor(private listCategoriesByName: ListCategoriesByNameUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name } = req.params;

    const categorySearched = this.listCategoriesByName.execute(name);

    return res.status(200).json(categorySearched);
  }
}
