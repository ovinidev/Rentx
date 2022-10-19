import { Specification } from '../entities/Specification';

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  create: ({ name, description }: ICreateSpecificationDTO) => void;
  list: () => Specification[];
  listByName: (name: string) => Specification;
}
