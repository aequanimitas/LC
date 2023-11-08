// so they're saying this is much slower and error prone
// https://stackoverflow.com/questions/5185864/javascript-quicksort#comment130274534_39627599
// now Timsort is used by v8, which is stable and TIL there are "stable" versions of stuffs
const quicksort = (arr) => {
	if (arr.length <= 1) {
		return arr
	}
	let pivot = arr[0]
	let left = []
	let right = []

	for (var i = 1; i < arr.length; i++) {
		(arr[i] < pivot) ?  left.push(arr[i]) : right.push(arr[i])
	}
	return quicksort(left).concat(pivot, quicksort(right))
}

var findMedianSortedArrays = function(nums1, nums2) {
	let x = nums1.concat(nums2).sort()
	// so doing this, obj points to the same object
	// let stack = {root: null, vals: [], count: 0}
	// let obj = {min: stack, max: stack}
	let max = {root: null, vals: [], count: 0}
	let min = {root: null, vals: [], count: 0}
	let obj = {min: min, max: max}

	return findMed(obj, x)
};

// stack helper fun
var fush = function(obj, val) {
	if (obj.root === null) {
		obj.root = val
		obj.count = obj.count + 1
	} else if (obj.root < val) {
		obj.vals.push(val)
		obj.count = obj.count + 1
	} else {
		obj.vals.push(obj.root)
		obj.root = val
		obj.count = obj.count + 1
	}
	return obj
}

var fuf = function(obj) {
	let vals = obj.vals.sort()
	let count = obj.count
	let root = vals.shift()
	return {
		root: root,
		count: count - 1,
		vals: vals
	}
}

var findMed = function(obj, arr) {
	if ((arr.length == 0) || (arr == undefined)) {
		if (obj.min.count == obj.max.count) {
			return (-(obj.max.root) / 2.0) + (obj.min.root / 2.0)
		} else {
			return (-(obj.max.root) / 1.0)
		}
	}

	if ((obj.max.count == 0) || (-(obj.max.root) >= arr[0])) {
		obj.max = fush(obj.max, -arr[0])
	} else {
		obj.min = fush(obj.min, arr[0])
	}

	if (obj.max.count > obj.min.count + 1) {
		let root = obj.max.root
		obj.max = fuf(obj.max)
		obj.min = fush(obj.min, -(root))

	} else if (obj.max.count < obj.min.count) {
		let root = obj.min.root
		obj.min = fuf(obj.min)
		obj.max = fush(obj.max, -(root))
	} else {
		obj
	}

	arr.shift()
	return findMed(obj, arr)
	//return obj
};

exports.quicksort = quicksort
exports.qs2 = findMedianSortedArrays
