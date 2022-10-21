import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, username, driver_license, email, password } = req.body;

    const createUserController = container.resolve(CreateUserUseCase);

    try {
      await createUserController.execute({
        name,
        username,
        driver_license,
        email,
        password,
      });

      return res.status(201).json({ message: 'Usuário criado com sucesso!' });
    } catch (err: any) {
      return res
        .status(err.statusCode)
        .send({ message: err.message, code: err.statusCode });
    }
  }
}
