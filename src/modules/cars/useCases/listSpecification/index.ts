import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepositories';
import { ListSpecificationsController } from './ListSpecificationController';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

export default () => {
  const specificationRepository = new SpecificationRepository();

  const listSpecificationUseCase = new ListSpecificationUseCase(
    specificationRepository,
  );

  const listSpecificationController = new ListSpecificationsController(
    listSpecificationUseCase,
  );

  return listSpecificationController;
};
