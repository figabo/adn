import { CacheModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MutationModel } from '../models/mutation.model';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

@Module({
  imports: [CacheModule.register(), SequelizeModule.forFeature([MutationModel])],
  providers: [StatsService],
  controllers: [StatsController],
})
export class StatsModule {}