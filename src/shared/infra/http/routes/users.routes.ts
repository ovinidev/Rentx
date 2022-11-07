import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/CreateUserController';
import { DeleteUserController } from '../../../../modules/accounts/useCases/deleteUser/DeleteUserController';
import { ListUserByNameController } from '../../../../modules/accounts/useCases/listUserByName/ListUserByNameController';
import { ListUsersController } from '../../../../modules/accounts/useCases/listUsers/ListUsersController';
import uploadConfig from '../../../../config/upload';
import { UpdateUserAvatarController } from '../../../../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureUserAdmin } from '../middlewares/ensureUserAdmin';

export const usersRoutes = Router();

const createUserController = new CreateUserController();
usersRoutes.post('/', createUserController.handle);

const deleteUserController = new DeleteUserController();
usersRoutes.delete(
  '/:username',
  ensureAuthenticated,
  ensureUserAdmin,
  deleteUserController.handle,
);

const listUserByNameController = new ListUserByNameController();
usersRoutes.get(
  '/:username',
  ensureAuthenticated,
  listUserByNameController.handle,
);

const listUsersController = new ListUsersController();
usersRoutes.get('/', ensureAuthenticated, listUsersController.handle);

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const updateUserAvatarController = new UpdateUserAvatarController();
usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);
