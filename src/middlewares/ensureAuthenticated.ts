import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '../modules/accounts/repositories/implementations/UserRepository';

interface ITokenVerified {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).json({ message: 'Token missing' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: id } = verify(
      token,
      'fe57e2c20af5d4fa504c98a757be5631',
    ) as ITokenVerified;

    const userRepository = new UserRepository();

    const userAlreadyExist = await userRepository.listById(id);

    if (!userAlreadyExist) {
      return res.status(400).json({ message: 'Nenhum usuário encontrado' });
    }

    req.user = {
      id: id,
    };

    next();
  } catch (err: any) {
    return res
      .status(err.statusCode)
      .json({ message: err.message, code: err.statusCode });
  }
}
