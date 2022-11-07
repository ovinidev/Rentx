import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCarsUseCase } from './ListCarsUseCase';

export class ListCarsController {
  async handle(req: Request, res: Response) {
    const listCarsUseCase = container.resolve(ListCarsUseCase);
    const { brand, category_id, name } = req.body;

    try {
      const cars = await listCarsUseCase.execute({ brand, category_id, name });
      return res.status(200).json(cars);
    } catch (err: any) {
      return res
        .status(err.statusCode)
        .send({ message: err.message, code: err.statusCode });
    }
  }
}
