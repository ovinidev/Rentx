import { Router } from 'express';
import { CreateSpecificationController } from '../../../../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from '../../../../modules/cars/useCases/listSpecification/ListSpecificationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const specificationRoutes = Router();

specificationRoutes.use(ensureAuthenticated);

const listSpecificationController = new ListSpecificationsController();
specificationRoutes.get('/', listSpecificationController.handle);

const createSpecificationController = new CreateSpecificationController();
specificationRoutes.post('/', createSpecificationController.handle);
