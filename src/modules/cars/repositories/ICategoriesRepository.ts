import { Category } from '../entities/Category';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create: ({ name, description }: ICreateCategoryDTO) => Promise<void>;
  list: () => Promise<Category[]>;
  listByName: (name: string) => Promise<Category>;
}
