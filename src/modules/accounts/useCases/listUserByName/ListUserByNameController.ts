import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListUserByNameUseCase } from './ListUserByNameUseCase';

export class ListUserByNameController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { username } = req.params;

    const listUserByNameController = container.resolve(ListUserByNameUseCase);

    const user = await listUserByNameController.execute(username);

    return res.status(200).json(user);
  }
}
