import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory';
import { CreateCarUseCase } from './CreateCarUseCase';

export class CreateCarController {
  async handle(req: Request, res: Response) {
    const {
      name,
      description,
      daily_rate,
      license_plate,
      brand,
      category_id,
      fine_amount,
    } = req.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    try {
      await createCarUseCase.execute({
        name,
        description,
        daily_rate,
        license_plate,
        brand,
        category_id,
        fine_amount,
      });
      return res.status(200).json({ message: 'Criado com sucesso' });
    } catch (err: any) {
      return res.status(err.statusCode).send({ message: err.message });
    }
  }
}
