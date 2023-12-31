import { BaseController } from '../common/base.controller'
import { HTTPError } from '../errors/http-error.class'

import { NextFunction, Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { ILogger } from '../logger/logger.interface'
import { TYPES } from '../types'
import 'reflect-metadata'
import { IUser } from './users.interface'

@injectable()
export class UserController extends BaseController implements IUser {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService)
		this.bindRoutes([
			{ path: '/login', method: 'post', func: this.login },
			{ path: '/register', method: 'post', func: this.register },
		])
	}

	public login(req: Request, res: Response, next: NextFunction) {
		next(new HTTPError(401, 'Unauthorized error message fuck', 'Unauthorized error context fuck'))
	}

	public register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, 'login')
		// this.ok(res, 'register')
	}
}
