import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { container } from 'tsyringe';

export class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const createCategoryController = container.resolve(CreateCategoryUseCase);

    try {
      await createCategoryController.execute({ name, description });

      return res.status(200).json({ message: 'Criado com sucesso!' });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
