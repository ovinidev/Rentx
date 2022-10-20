import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export class CreateSpecificationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const createSpecificationController = container.resolve(
      CreateSpecificationUseCase,
    );

    await createSpecificationController.execute({ name, description });

    return res.status(200).json({ message: 'Criado com sucesso!' });
  }
}
