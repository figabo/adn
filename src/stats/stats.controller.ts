import { Controller, Get, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('stats')
@UseInterceptors(CacheInterceptor)
export class StatsController {
	constructor(
		private readonly statsService: StatsService
	) {}

	@Get()
	get() {
		return this.statsService.get();
	}
}
