import { Logger, ILogObj } from 'tslog'

export class LoggerService {
	private logger: Logger<ILogObj>

	constructor() {
		this.logger = new Logger({
			type: 'pretty',
		})
	}

	log(args: string | unknown[]) {
		this.logger.info('🚀', ...args)
	}

	error(args: string | unknown[]) {
		this.logger.error('🚀', ...args)
	}

	warn(args: string | unknown[]) {
		this.logger.warn('🚀', ...args)
	}
}
