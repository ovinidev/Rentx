import { Car } from './entities/Car';

export interface ICreateCarsDTO {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

export interface ICarsRepository {
  create({
    name,
    description,
    daily_rate,
    license_plate,
    brand,
    category_id,
    fine_amount,
  }: ICreateCarsDTO): Promise<Car>;

  findByLicensePlate(license_plate: string): Promise<Car>;
}
