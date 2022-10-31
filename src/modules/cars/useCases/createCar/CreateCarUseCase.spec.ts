import { AppError } from '../../../../errors/AppError';
import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory';
import { CreateCarUseCase } from './CreateCarUseCase';

let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCarUseCase: CreateCarUseCase;

describe('Create car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be to able create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name car',
      description: 'description',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      brand: 'Brand',
      category_id: 'category',
      fine_amount: 60,
    });

    expect(car).toHaveProperty('id');
  });

  it('should not be able to create a car with same license plate', () => {
    expect(async () => {
      const car = {
        name: 'Name car',
        description: 'description',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        brand: 'Brand',
        category_id: 'category',
        fine_amount: 60,
      };
      await createCarUseCase.execute(car);
      await createCarUseCase.execute(car);
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be create a car whit available true', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name car',
      description: 'description',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      brand: 'Brand',
      category_id: 'category',
      fine_amount: 60,
    });
    expect(car.available).toBe(true);
  });
});
