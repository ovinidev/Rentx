import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { DeleteUserController } from '../modules/accounts/useCases/deleteUser/DeleteUserController';
import { ListUserByNameController } from '../modules/accounts/useCases/listUserByName/ListUserByNameController';
import { ListUsersController } from '../modules/accounts/useCases/listUsers/ListUsersController';

export const usersRoutes = Router();

usersRoutes.use(ensureAuthenticated);

const createUserController = new CreateUserController();
usersRoutes.post('/', createUserController.handle);

const deleteUserController = new DeleteUserController();
usersRoutes.delete('/:username', deleteUserController.handle);

const listUserByNameController = new ListUserByNameController();
usersRoutes.get('/:username', listUserByNameController.handle);

const listUsersController = new ListUsersController();
usersRoutes.get('/', listUsersController.handle);
