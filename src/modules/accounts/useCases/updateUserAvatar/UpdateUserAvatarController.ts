import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

export class UpdateUserAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const avatar_file = req.file.filename;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    try {
      await updateUserAvatarUseCase.execute({ user_id: id, avatar_file });

      return res.status(204).send('ok');
    } catch (err: any) {
      console.log('oi');

      return res.status(400).json({ message: err.message, code: 400 });
    }
  }
}
