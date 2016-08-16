var API = function() {}

API.series = function(promisesList, result) {
    return new Promise(function(resolve, reject) {

        var returnJ = []

        var sequence = Promise.resolve();
        
        promisesList.forEach(function(pro) {
            sequence = sequence.then(function() {
                return pro;
            }).then(function(result) {
                returnJ.push(result)
            });

        })

        sequence.then(function() {
            resolve(returnJ)
        }, function(err) {
            reject(err)
        })

    })
}


API.parallel = function(promisesList) {
    return Promise.all(promisesList)
}

module.exports = API