import { Request, Response, Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepositories';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

export const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.get('/', (req: Request, res: Response) => {
  const allSpecifications = specificationRepository.list();

  return res.status(200).json(allSpecifications);
});

specificationRoutes.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository,
  );

  createSpecificationService.execute({ name, description });

  res.status(200).json({ message: 'Criado com sucesso!' });
});
