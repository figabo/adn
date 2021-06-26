import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { StatsService } from './stats.service';
import { MutationModel } from '../models/mutation.model';

export class mockMutationModel {
  public async findAndCountAll(): Promise<void> {}
}

describe('StatsService', () => {
  let service: StatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatsService, {
        provide: getModelToken(MutationModel),
        useValue: mockMutationModel
      }],
    }).compile();

    service = module.get<StatsService>(StatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
