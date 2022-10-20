import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

export class ListSpecificationsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listSpecificationController = container.resolve(
      ListSpecificationUseCase,
    );

    const allSpecifications = await listSpecificationController.execute();

    return res.status(200).json(allSpecifications);
  }
}
