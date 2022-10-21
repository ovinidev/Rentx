import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListUsersUseCase } from './ListUsersUseCase';

export class ListUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersUseCase);

    try {
      const users = await listUsersUseCase.execute();

      return res.status(200).json(users);
    } catch (err: any) {
      return res
        .status(err.statusCode)
        .send({ message: err.message, code: err.statusCode });
    }
  }
}
