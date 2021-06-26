import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { MutationService } from './mutation.service';
import { MutationModel } from '../models/mutation.model';

export class mockMutationModel {
  public async findAndCountAll(): Promise<void> {}
}

describe('MutationService', () => {
  let service: MutationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MutationService, {
        provide: getModelToken(MutationModel),
        useValue: mockMutationModel
      }],
    }).compile();

    service = module.get<MutationService>(MutationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
