import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from '../modules/cars/useCases/listSpecification/ListSpecificationController';

export const specificationRoutes = Router();

specificationRoutes.use(ensureAuthenticated);

const listSpecificationController = new ListSpecificationsController();
specificationRoutes.get('/', listSpecificationController.handle);

const createSpecificationController = new CreateSpecificationController();
specificationRoutes.post('/', createSpecificationController.handle);
