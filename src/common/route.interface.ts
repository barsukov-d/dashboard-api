import { Request, Response, NextFunction, Router } from 'express'

export interface IControllerRoute {
	path: string
	func: (res: Request, req: Response, next: NextFunction) => void
	method: keyof Pick<Router, 'get' | 'post' | 'put' | 'delete' | 'patch'>
}
