import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { username } = req.params;

    const deleteUserController = container.resolve(DeleteUserUseCase);

    try {
      await deleteUserController.execute(username);

      res.status(201).json({ message: 'Usuário deletado com sucesso!' });
    } catch (err: any) {
      return res
        .status(err.statusCode)
        .send({ message: err.message, code: err.statusCode });
    }
  }
}
