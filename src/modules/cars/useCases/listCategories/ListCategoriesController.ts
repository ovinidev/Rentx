import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const allCategories = await this.listCategoriesUseCase.execute();

    return res.status(200).json(allCategories);
  }
}
