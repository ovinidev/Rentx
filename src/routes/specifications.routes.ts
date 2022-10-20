import { Request, Response, Router } from 'express';
import createSpecificationController from '../modules/cars/useCases/createSpecification';
import listSpecificationController from '../modules/cars/useCases/listSpecification';

export const specificationRoutes = Router();

specificationRoutes.get('/', (req: Request, res: Response) => {
  return listSpecificationController().handle(req, res);
});

specificationRoutes.post('/', (req: Request, res: Response) => {
  return createSpecificationController().handle(req, res);
});
