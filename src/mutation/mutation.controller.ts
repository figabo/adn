import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { MutationService } from './mutation.service';

@Controller('mutation')
export class MutationController {
	constructor(
		private readonly mutationService: MutationService
	) {}

	@Post()
	create(@Body('dna') dna: Array<string>, @Res() response: Response) {
		const hasMutation: boolean = this.mutationService.hasMutation(dna);

		this.mutationService.save(dna, hasMutation);

		response.status(hasMutation ? HttpStatus.OK : HttpStatus.FORBIDDEN).send();
	}
}
