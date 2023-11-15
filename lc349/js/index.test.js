const fun = require('./index')

test('ok', () => {
  let nums1 = [1,2,2,1]
	let nums2 = [2, 2]
	expect(fun(nums1, nums2)).toEqual([2])

  nums1 = [4,9,5]
  nums2 = [9,4,9,8,4]
	expect(fun(nums1, nums2)).toEqual([9, 4])

  nums1 = [4,7,9,7,6,7]
  nums2 = [5,0,0,6,1,6,2,2,4]
	expect(fun(nums1, nums2)).toEqual([6, 4])

  nums1 = [4,7,9,7,6,7]
  nums2 = []
	expect(fun(nums1, nums2)).toEqual([])

  nums2 = [4,7,9,7,6,7]
  nums1 = []
	expect(fun(nums1, nums2)).toEqual([])
})
