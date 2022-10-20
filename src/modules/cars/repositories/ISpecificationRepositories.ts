import { Specification } from '../entities/Specification';

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  create: ({ name, description }: ICreateSpecificationDTO) => Promise<void>;
  list: () => Promise<Specification[]>;
  listByName: (name: string) => Promise<Specification>;
}
