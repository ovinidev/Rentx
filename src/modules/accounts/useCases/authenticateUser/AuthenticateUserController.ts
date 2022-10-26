import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateUserController = container.resolve(
      AuthenticateUserUseCase,
    );

    try {
      const response = await authenticateUserController.execute({
        email,
        password,
      });
      return res.status(201).json(response);
    } catch (err: any) {
      return res
        .status(err.statusCode)
        .json({ message: err.message, code: err.statusCode });
    }
  }
}
