import express, { Request, Response, NextFunction } from 'express'
import { userRouter } from './users/users.js'

const port = 8000
const app = express()

app.use((req, res, next) => {
	console.log('Time:', Date.now())
	next()
})

app.get('/hello', (req, res) => {
	throw new Error('BROKEN')
})

app.use('/users', userRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err.message)
	res.status(401).send('Something broke!')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
