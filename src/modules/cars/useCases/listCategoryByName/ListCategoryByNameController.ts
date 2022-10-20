import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCategoriesByNameUseCase } from './ListCategoryByNameUseCase';

export class ListCategoryByNameController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.params;

    const listCategoryByNameUseCase = container.resolve(
      ListCategoriesByNameUseCase,
    );

    const category = await listCategoryByNameUseCase.execute(name);

    return res.status(200).json(category);
  }
}
