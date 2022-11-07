import { Router } from 'express';
import { CreateCarController } from '../../../../modules/cars/useCases/createCar/CreateCarController';
import { ListCarsController } from '../../../../modules/cars/useCases/listCars/ListCarsController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureUserAdmin } from '../middlewares/ensureUserAdmin';

export const carsRoutes = Router();

const createCarController = new CreateCarController();
carsRoutes.post(
  '/',
  ensureUserAdmin,
  ensureAuthenticated,
  createCarController.handle,
);

const listCars = new ListCarsController();
carsRoutes.get('/', ensureAuthenticated, listCars.handle);
