import { Request, Response } from 'express';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

export class ListSpecificationsController {
  constructor(private listSpecificationController: ListSpecificationUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const allSpecifications = await this.listSpecificationController.execute();

    return res.status(200).json(allSpecifications);
  }
}
