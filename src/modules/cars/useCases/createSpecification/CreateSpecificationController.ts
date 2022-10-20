import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export class CreateSpecificationController {
  constructor(
    private createSpecificationController: CreateSpecificationUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    await this.createSpecificationController.execute({ name, description });

    return res.status(200).json({ message: 'Criado com sucesso!' });
  }
}
