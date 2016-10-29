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
    promisesList.push(function(){
        return genPromist(i)
    })
})

//processing promiseList by series
pk.series(promisesList).then(function(result) {
    console.log("Result series: ", result)
},function(err){
    console.log("Error series: ", result)
})