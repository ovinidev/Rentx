import { inject, injectable } from 'tsyringe';
import { deleteFiles } from '../../../../utils/file';
import { IUserRepository } from '../../infra/typeorm/repositories/IUserRepository';

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.userRepository.listById(user_id);

    if (user.avatar) {
      await deleteFiles(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatar_file;

    await this.userRepository.create(user);
  }
}
