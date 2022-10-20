import { Router } from 'express';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { DeleteUserController } from '../modules/accounts/useCases/deleteUser/DeleteUserController';
import { ListUserByNameController } from '../modules/accounts/useCases/listUserByName/ListUserByNameController';

export const usersRoutes = Router();

const createUserController = new CreateUserController();
usersRoutes.post('/', createUserController.handle);

const deleteUserController = new DeleteUserController();
usersRoutes.delete('/:username', deleteUserController.handle);

const listUserByNameController = new ListUserByNameController();
usersRoutes.get('/:username', listUserByNameController.handle);
