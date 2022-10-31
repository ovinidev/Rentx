import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { Car } from '../../infra/typeorm/entities/Car';
import {
  ICarsRepository,
  ICreateCarsDTO,
} from '../../infra/typeorm/ICarsRepository';

@injectable()
export class CreateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  async execute(data: ICreateCarsDTO): Promise<Car> {
    const carsAlreadyExists = await this.carsRepository.findByLicensePlate(
      data.license_plate,
    );

    if (carsAlreadyExists) throw new AppError('Car already exist');

    return this.carsRepository.create(data);
  }
}
