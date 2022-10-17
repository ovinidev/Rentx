import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepositories';
import { ListSpecificationsController } from './ListSpecificationController';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

const specificationRepository = SpecificationRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationUseCase(
  specificationRepository,
);

export const listSpecificationController = new ListSpecificationsController(
  listSpecificationUseCase,
);
