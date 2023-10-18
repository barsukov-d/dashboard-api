import { App } from './app'
import { LoggerService } from './logger/logger.service'
import { UserController } from './users/users.controller'
import { ExeptionFilter } from './errors/exeption.filter'
import { Container, ContainerModule, interfaces } from 'inversify'
import { ILogger } from './logger/logger.interface'
import { TYPES } from './types'
import { IExeptionFilter } from './errors/exeption.filter.interface'

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService)
	bind<UserController>(TYPES.UserController).to(UserController)
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter)
	bind<App>(TYPES.Application).to(App)
})

function bootstrap() {
	const appContainer = new Container()
	appContainer.load(appBindings)
	const app = appContainer.get<App>(TYPES.Application)
	app.init()

	return { app, appContainer }
}

export const { app, appContainer } = bootstrap()
