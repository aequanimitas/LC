var addTwoPromises = async function(promise1, promise2) {
	return Promise.all([promise1, promise2]).then((v) => { return v[0] + v[1] })
};

module.exports = addTwoPromises
