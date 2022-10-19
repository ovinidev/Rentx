import { Request, Response } from 'express';
import {
  ListCategoriesByNameUseCase,
  ListCategoriesUseCase,
} from './ListCategoriesUseCase';

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const allCategories = await this.listCategoriesUseCase.execute();

    return res.status(200).json(allCategories);
  }
}

export class ListCategoriesByNameController {
  constructor(private listCategoriesByName: ListCategoriesByNameUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.params;

    const categorySearched = await this.listCategoriesByName.execute(name);

    return res.status(200).json(categorySearched);
  }
}
