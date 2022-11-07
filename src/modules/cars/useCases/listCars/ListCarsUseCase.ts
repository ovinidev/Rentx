import { inject, injectable } from 'tsyringe';
import { Car } from '../../infra/typeorm/entities/Car';
import { ICarsRepository } from '../../infra/typeorm/ICarsRepository';

interface IRequest {
  brand?: string;
  category_id?: string;
  name?: string;
}

@injectable()
export class ListCarsUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  async execute({ brand, category_id, name }: IRequest): Promise<Car[] | Car> {
    const cars = await this.carsRepository.findAllCars({
      brand,
      category_id,
      name,
    });

    return cars;
  }
}
