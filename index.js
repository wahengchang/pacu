var PromiseSeries = require('promise-series')
var series = new PromiseSeries();

var API = function() {}

API.series = function(promisesList) {

    return new Promise(function(resolve, reject) {

        var returnJ = []
        
        promisesList.forEach(function(pro) {
            series.add(pro)
        })

        series.run().then(function(result) {
            resolve(result)
        },function(err){
            rejectt(err)
        });

    })
}


API.parallel = function(promisesList) {
    return Promise.all(promisesList)
}

module.exports = API