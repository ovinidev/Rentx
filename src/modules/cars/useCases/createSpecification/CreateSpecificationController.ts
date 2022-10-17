import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export class CreateSpecificationController {
  constructor(
    private createSpecificationController: CreateSpecificationUseCase,
  ) {}

  handle(req: Request, res: Response) {
    const { name, description } = req.body;

    this.createSpecificationController.execute({ name, description });

    res.status(200).json({ message: 'Criado com sucesso!' });
  }
}
