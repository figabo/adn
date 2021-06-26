import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MutationModel } from './models/mutation.model';

import { MutationModule } from './mutation/mutation.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST || '34.94.84.126',
      port: 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || 'Mlt0skBiq7NK64kC',
      database: process.env.DATABASE_NAME || 'test',
      models: [MutationModel],
    }),
    MutationModule,
    StatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
