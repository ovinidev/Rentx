import { Request, Response, Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepositories';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

export const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.get('/', (req: Request, res: Response) => {
  const allSpecifications = specificationRepository.list();

  return res.status(200).json(allSpecifications);
});

specificationRoutes.post('/', (req: Request, res: Response) => {
  return createSpecificationController.handle(req, res);
});
