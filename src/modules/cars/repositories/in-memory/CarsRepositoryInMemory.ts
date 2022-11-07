import { Car } from '../../infra/typeorm/entities/Car';
import {
  ICarsRepository,
  ICreateCarsDTO,
  IFindCarsDTO,
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

  async findAllCars({
    brand,
    category_id,
    name,
  }: IFindCarsDTO): Promise<Car[]> {
    const availableCars = this.cars.filter((car) => {
      if (
        car.available === true ||
        (name && car.name === name) ||
        (brand && car.brand === brand) ||
        (category_id && car.category_id === category_id)
      ) {
        return car;
      }

      return null;
    });

    return availableCars;
  }
}
