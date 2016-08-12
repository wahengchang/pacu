var pk = require("./index.js")
var _ = require("underscore")

var genPromist = function(para) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(para * para)
        }, 3000)
    })
}

var promisesList = []

_.each([1, 2, 3, 4], function(i) {
    promisesList.push(genPromist(i))
})

//processing promiseList by series
pk.series(promisesList).then(function(result) {
    console.log("Result series: ", result)
},function(err){
    console.log("Error series: ", result)
})

//processing promiseList by parallel
pk.parallel(promisesList).then(function(result) {
    console.log("Result parallel: ", result)
})



