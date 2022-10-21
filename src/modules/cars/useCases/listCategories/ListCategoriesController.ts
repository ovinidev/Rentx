import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { container } from 'tsyringe';

export class ListCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    try {
      const allCategories = await listCategoriesUseCase.execute();

      return res.status(200).json(allCategories);
    } catch (err: any) {
      return res
        .status(err.statusCode)
        .send({ message: err.message, code: err.statusCode });
    }
  }
}
