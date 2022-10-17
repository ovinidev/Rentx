import { Category } from '../models/Categories';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create: ({ name, description }: ICreateCategoryDTO) => void;
  list: () => Category[];
  listByName: (name: string) => Category;
}
