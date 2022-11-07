import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory';
import { ListCarsUseCase } from './ListCarsUseCase';

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Name car',
      description: 'description',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      brand: 'Brand',
      category_id: 'category',
      fine_amount: 60,
    });

    const cars = await listCarsUseCase.execute({});
    console.log(cars);

    expect(cars).toEqual([car]);
  });

  it('should be able to list cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Name car',
      description: 'description',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      brand: 'Brand2',
      category_id: 'category',
      fine_amount: 60,
    });

    const carByName = await listCarsUseCase.execute({ name: car.name });

    expect(carByName).toEqual([car]);
  });
});
