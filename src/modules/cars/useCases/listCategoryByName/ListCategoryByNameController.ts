import { Request, Response } from 'express';
import { ListCategoriesByNameUseCase } from './ListCategoryByNameUseCase';

export class ListCategoryByNameController {
  constructor(private listCategoryByNameUseCase: ListCategoriesByNameUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.params;

    const category = await this.listCategoryByNameUseCase.execute(name);

    return res.status(200).json(category);
  }
}
