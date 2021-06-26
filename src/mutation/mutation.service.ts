import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { MutationModel } from '../models/mutation.model';

@Injectable()
export class MutationService {
	constructor(
		@InjectModel(MutationModel)
    	private mutationModel: typeof MutationModel,
	) {}

	hasMutation(dna: Array<string>, maxSequence: number = 4): boolean {
		let isMutation = false;

		for (let i = 0; i < dna.length; i++) {
			const row = dna[i].split('');

			for (let j = 0; j < row.length; j++) {
				const sequence = Array(maxSequence + 1).join(row[j]);


				if ( maxSequence < (row.length - j) ) {
					const horizontalSequence = row.slice(j, j + maxSequence).join('');
					
					if (sequence === horizontalSequence) {
						isMutation = true;
						break;
					}
				}
				
				if ( maxSequence < (dna.length - i) ) {
					const verticalSequence = Array();

					for (let k = i; k < (i + maxSequence); k++) {
						verticalSequence.push(dna[k].split('')[j]);
					}

					if (sequence === verticalSequence.join('')) {
						isMutation = true;
						break;
					}
				}
			}

			if (isMutation) {
				break;
			}
		}

		return isMutation;
	}

	save(dna: Array<string>, hasMutation: boolean) {
		this.mutationModel.create({
			dna,
			hasMutation
		});
	}
}
