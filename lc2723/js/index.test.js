const fun = require('./index')

test('ok', () => {
	// 1
	promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
	promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
	fun(promise1, promise2).then((v) => {
		expect(v).toEqual(7)
	})
})
