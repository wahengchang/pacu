var PromiseSeries = require('promise-series')
var series = new PromiseSeries();

var API = function(_promisesList) {
    this.promisesList = _promisesList || [];
}

API.prototype.series = function() {
    var _promisesList = this.promisesList;
    return new Promise(function(resolve, reject) {
        var returnJ = []
        
        _promisesList.forEach(function(pro) {
            series.add(pro)
        })

        series.run().then(function(result) {
            resolve(result)
        },function(err){
            rejectt(err)
        });
    })
}


API.prototype.parallel = function() {
    return Promise.all(this.promisesList)
}


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