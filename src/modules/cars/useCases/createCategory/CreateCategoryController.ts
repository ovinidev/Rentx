import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.createCategoryUseCase.execute({ name, description });

    return res.status(200).json({ message: 'Criado com sucesso!' });
  }
}
