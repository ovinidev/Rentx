import { Car } from '../../infra/typeorm/entities/Car';
import {
  ICarsRepository,
  ICreateCarsDTO,
} from '../../infra/typeorm/ICarsRepository';

export class CarsRepositoryInMemory implements ICarsRepository {
  private cars: Car[] = [];

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    brand,
    category_id,
    fine_amount,
  }: ICreateCarsDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      daily_rate,
      license_plate,
      brand,
      category_id,
      fine_amount,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string) {
    const car = this.cars.find((car) => {
      return car.license_plate === license_plate;
    });

    return car;
  }
}
