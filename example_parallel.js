var pk = require("./index.js")

var genPromist = function(para) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('para: ', para)
            resolve(para * para)
        }, 1000)
    })
}

var promisesList = []
var inputList = [1, 2, 3, 4]

inputList.forEach(function(i) {
    promisesList.push(genPromist(i))
})


//processing promiseList by parallel
pk.parallel(promisesList).then(function(result) {
    console.log("Result parallel: ", result)
})



