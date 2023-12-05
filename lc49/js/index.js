/**
 * @param {number[]} nums
 * @return {number[]}
 */
var groupAnagrams = function(strs) {
	let m = new Map()
	for(let i = 0; i < strs.length; i++) {
		let key = strs[i].split('').sort().join('')
		if(!m.has(key)) {
			m.set(key, [strs[i]])
		} else {
			yy = m.get(key)
			yy.push(strs[i])
			m.set(key, yy)
		}
	}

	// this is slow
	return Array.from(m.values()).map((g) => g.sort()).sort((a, b) => a.length - b.length)
};

module.exports = groupAnagrams
