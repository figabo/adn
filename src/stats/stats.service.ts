import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { MutationModel } from '../models/mutation.model';

@Injectable()
export class StatsService {
	constructor(
		@InjectModel(MutationModel)
    	private mutationModel: typeof MutationModel
	) {}

	async get(): Promise<any> {
		const mutations = await this.mutationModel.findAndCountAll({
			where: {
				hasMutation: true
			}
		});

		const noMutations = await this.mutationModel.findAndCountAll({
			where: {
				hasMutation: false
			}
		});

		let ratio = 0;

		if (noMutations.count !== mutations.count) {
			ratio = noMutations.count / (mutations.count > 0 ? mutations.count : 1 );
		}

		return {
			countMutations: mutations.count,
			countNoMutations: noMutations.count,
			ratio
		};
	}
}
