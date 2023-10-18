import { ILogObj, Logger } from 'tslog'

export interface ILogger {
	logger: Logger<ILogObj>

	log: (args: string | unknown[]) => void
	error: (args: string | unknown[]) => void
	warn: (args: string | unknown[]) => void
}
