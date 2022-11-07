import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../../errors/AppError';
import { UserRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UserRepository';

export async function ensureUserAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.user;
  console.log(id);

  const userRepository = new UserRepository();

  try {
    const verifyUserIsAdmin = await userRepository.listById(id);

    if (!verifyUserIsAdmin.isAdmin) throw new AppError('User is not admin');

    next();
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}
