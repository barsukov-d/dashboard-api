import { Request, Response, NextFunction } from 'express'

export interface IUser {
	login: (req: Request, res: Response, next: NextFunction) => void
	register: (req: Request, res: Response, next: NextFunction) => void
}
