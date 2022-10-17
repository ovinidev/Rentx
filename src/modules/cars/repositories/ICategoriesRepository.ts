import { Category } from '../models/Categories';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  listByName: (name: string) => Category;
  list: () => Category[];
  create: ({ name, description }: ICreateCategoryDTO) => void;
}
