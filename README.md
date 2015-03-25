# has-values [![NPM version](https://badge.fury.io/js/has-values.svg)](http://badge.fury.io/js/has-values)  [![Build Status](https://travis-ci.org/jonschlinkert/has-values.svg)](https://travis-ci.org/jonschlinkert/has-values) 

> Returns true if a value exists, false if empty. Works for booleans, functions, numbers, strings, nulls, objects and arrays. Other libs do this, but I needed one that would optionally _not_ treat zero as empty. Also, this works with booleans and other values that other libs fail to test properly.

## Install with [npm](npmjs.org)

```bash
npm i has-values --save
```

## Running tests
Install dev dependencies.

```bash
npm i -d && npm test
```

## Usage

```js
var hasValue = require('has-values');

hasValue('a');
//=> true

hasValue('');
//=> false

hasValue(1);
//=> true

hasValue(0);
//=> false

hasValue(0, true); // treat zero as a value
//=> true

hasValue({a: 'a'}});
//=> true

hasValue({}});
//=> false

hasValue(['a']);
//=> true

hasValue([]);
//=> false

hasValue(function(foo) {}); // function length/arity
//=> true

hasValue(function() {});
//=> false

hasValue(true);
hasValue(false);
//=> true
```

## isEmpty

To test for empty values, do:

```js
function isEmpty(o, isZero) {
  return !hasValue(o, isZero);
}
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on March 24, 2015._