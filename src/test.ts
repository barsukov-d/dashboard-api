// function Component(id: number) {
// 	console.log('init component')
// 	return function (target: Function) {
// 		console.log('run component')
// 		target.prototype.id = id
// 	}
// }

// function Logger() {
// 	console.log('init logger')
// 	return function (target: Function) {
// 		console.log('run logger')
// 	}
// }

// function Method(target: Object, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
// 	console.log(propertyKey)
// 	propertyDescriptor.value = function (...args: any[]) {
// 		return args[0] * 10
// 	}
// }

// function Prop(target: Object, propertyKey: string) {
// 	let value: number

// 	const getter = function () {
// 		console.log('getter')

// 		return value
// 	}

// 	const setter = function (newValue: number) {
// 		console.log('setter')
// 		value = newValue
// 	}

// 	Object.defineProperty(target, propertyKey, {
// 		get: getter,
// 		set: setter,
// 	})
// }

// function Param(target: Object, propertyKey: string, parameterIndex: number) {
// 	console.log(parameterIndex, propertyKey, 'param')
// }

// @Component(1)
// @Logger()
// export class User {
// 	@Prop id: number

// 	@Method
// 	updateId(@Param id: number) {
// 		this.id = id
// 		return this.id
// 	}
// }

// console.log(new User().id)
// console.log(new User().updateId(2))
import 'reflect-metadata'

function Test(target: Function) {
	Reflect.defineMetadata('a', 1, target)
	const meta = Reflect.getMetadata('a', target)
	console.log(meta, 'meta')
}

function Prop(target: Object, name: string) {}

@Test
export class C {
	@Prop prop: number
}
