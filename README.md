# pacu

It is a tool to solve the problem of resolving serise promise functions with parameter continuously. And there is not a solution but only resolving parallelly.

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

To accomplish running promise function one after one is difficult, because the object format of _**promise function**_ and _**promise function with parameter**_ are different in js ( issue of anonymous function with parameters ). So that handling this issue needed to push _**promise function(not a promise)**_ to an array list, which will be resolved:

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