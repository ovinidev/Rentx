import { getRepository, Repository } from 'typeorm';
import { Car } from './entities/Car';
import {
  ICarsRepository,
  ICreateCarsDTO,
  IFindCarsDTO,
} from './ICarsRepository';

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarsDTO) {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    return await this.repository.save(car);
  }

  async findByLicensePlate(license_plate: string) {
    return this.repository.findOne({ license_plate });
  }

  async findAllCars({ brand, category_id, name }: IFindCarsDTO) {
    if (brand) {
      return await this.repository.findOne({ brand });
    }

    if (category_id) {
      return await this.repository.findOne({ category_id });
    }

    if (name) {
      return await this.repository.findOne({ name });
    }

    const availableCars = await this.repository.find();

    return availableCars.filter((car) => {
      return car.available === true;
    });
  }
}
