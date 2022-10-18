import { Request, Response } from 'express';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

export class ListSpecificationsController {
  constructor(private listSpecificationController: ListSpecificationUseCase) {}

  handle(req: Request, res: Response): Response {
    const allSpecifications = this.listSpecificationController.execute();

    return res.status(200).json(allSpecifications);
  }
}
