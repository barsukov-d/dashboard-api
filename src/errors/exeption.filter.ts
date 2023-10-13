import { Response, Request, NextFunction } from 'express'
import { LoggerService } from '../logger/logger.service'
import { IExeptionFilter } from './exeption.filter.interface'
import { HTTPError } from './http-error.class'

export class ExeptionFilter implements IExeptionFilter {
	logger: LoggerService
	constructor(logger: LoggerService) {
		this.logger = logger
	}
	catch(err: Error | HTTPError, req: Request, res: Response, next: NextFunction) {
		if (err instanceof HTTPError) {
			this.logger.error([err.message, err.context, err.statusCode])
			res.status(err.statusCode).send({ err: err.message })
			return
		}

		this.logger.error([err.message])
		res.status(500).send('Something broke!')
	}
}
