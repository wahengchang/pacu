var should = require('should');
var pk = require("./index.js")
var PACU = require("./index.js")


var genPromist = function(para) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('para: ', para)
            resolve(para * para)
        }, 1000)
    })
}

describe('Test pacu', function() {
  this.timeout(10000);
  var promisesList = []

  before(function (done){
    var inputList = [1, 2, 3, 4]
    inputList.forEach(function(i) {
        promisesList.push(function(){
            return genPromist(i)
        })
    })
    done()
  });

  describe('v1', function() {
    it('pacu.series', function(done) {
      pk.series(promisesList).then(function(result){
          done();
      },function(err){
          done("Error series: ", result)
      })
    })

    it('pacu.parallel', function(done) {
      pk.parallel(promisesList).then(function(result){
          done();
      },function(err){
          done("Error parallel: ", result)
      })
    })
  })


  describe('v2', function() {
    it('pacu.series', function(done) {
      var pk = new PACU(promisesList)
      pk.series().then(function(result){
          done();
      },function(err){
          done("Error series: ", result)
      })
    })
    
    it('pacu.parallel', function(done) {
      var pk = new PACU(promisesList)
      pk.parallel().then(function(result){
          done();
      },function(err){
          done("Error parallel: ", result)
      })
    })
  })



  describe.only('complex', function() {
    it('pacu.series', function(done) {
      var pk = new PACU(promisesList)
      pk.series().then(function(result){

          var pk2 = new PACU(promisesList)
          pk2.series().then(function(result){
              done();
          },function(err){
              done("Error series: ", result)
          })

      },function(err){
          done("Error series: ", result)
      })
    })
    
  })
})
