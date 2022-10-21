import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListUserByNameUseCase } from './ListUserByNameUseCase';

export class ListUserByNameController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { username } = req.params;

    const listUserByNameController = container.resolve(ListUserByNameUseCase);

    try {
      const user = await listUserByNameController.execute(username);

      return res.status(200).json(user);
    } catch (err: any) {
      return res
        .status(err.statusCode)
        .send({ message: err.message, code: err.statusCode });
    }
  }
}
