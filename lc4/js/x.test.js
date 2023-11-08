const qs = require('./js')
test('ok', () => {
	expect(qs.quicksort([2])).toEqual([2])
	expect(qs.quicksort([2, 1])).toEqual([1,2])

	console.log(qs.qs2([1], [2,3,4,5,6,7,8,9,10]))
})
