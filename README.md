# pacu

It is a tool to solve the problem of, continuously running promise functions with parameter one by one. 

[![NPM](https://nodei.co/npm/pacu.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/pacu)


## Install

```
$ npm install --save pacu
```

## Usage

Initializing pacu 
```js
var pacu = require("pacu")
```


## Important

To accomplish running series promise, the object format of _**promise function**_ and _**promise function with parameter**_ are different in js, so it required special handling when adding a promise to an array list:

```js

    promisesList.push(function(){
      return new Promise(function(resolvet, rejectt) {
        genPromist(i).then(function(result){
          resolvet(result)
        })
      })
    })

```

```js
## Usage
//processing promiseList by series
pacu.series(promisesList).then(function(result) {
    console.log("Result series: ", result)
},function(err){
    console.log("Error series: ", result)
})

```


## License


[MIT](http://vjpr.mit-license.org)