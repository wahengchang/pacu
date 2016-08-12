

var API = function() {}
API.series = function(promisesList, result) {
    return new Promise(function(resolve, reject) {

        if (!result) {
            result = []
        }

        if (promisesList.length <= 0) {
            resolve(result)
        } else {
            promisesList[0].then(function(result_t) {
                promisesList.shift()
                result.push(result_t)
                return API.series(promisesList, result)
            }).then(function(result2) {
                resolve(result2)
            }, function(err) {
                reject(err)
            })
        }

    })
}


API.parallel = function(promisesList) {
		return Promise.all(promisesList)
}

module.exports = API