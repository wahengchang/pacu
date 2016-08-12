# pacu

An easy promise tool to finish lists of promises by series or parallet.


[![NPM](https://nodei.co/npm/pacu.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/pacu)


## Install

```
$ npm install --save pacu
```

## Usage

Initializing gcloud 
```js
var pacu = require("pacu")
```

```js
## Usage
//processing promiseList by series
pacu.series(promisesList).then(function(result) {
    console.log("Result series: ", result)
},function(err){
    console.log("Error series: ", result)
})

//processing promiseList by parallel
pacu.parallel(promisesList).then(function(result) {
    console.log("Result parallel: ", result)
})

```


## License


[MIT](http://vjpr.mit-license.org)