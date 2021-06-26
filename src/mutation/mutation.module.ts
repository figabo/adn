import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MutationModel } from '../models/mutation.model';
import { MutationController } from './mutation.controller';
import { MutationService } from './mutation.service';

@Module({
  imports: [SequelizeModule.forFeature([MutationModel])],
  providers: [MutationService],
  controllers: [MutationController],
})
export class MutationModule {}