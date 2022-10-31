import { getRepository, Repository } from 'typeorm';
import { Car } from './entities/Car';
import { ICarsRepository, ICreateCarsDTO } from './ICarsRepository';

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
}
