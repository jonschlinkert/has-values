/*!
 * has-values <https://github.com/jonschlinkert/has-values>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var hasValues = require('./');

function isEmpty(o, isZero) {
  return !hasValues(o, isZero);
}

describe('hasValues', function() {
  it('should work for nulls', function() {
    assert(!hasValues(null));
    assert(!hasValues(undefined));
  });

  it('should work for booleans', function() {
    assert(hasValues(true));
    assert(hasValues(false));
  });

  it('shold work for strings', function() {
    assert(!hasValues(''));
    assert(hasValues('string'));
  });

  it('should work for numbers', function() {
    assert(hasValues(0));
    assert(hasValues(1));
  });

  it('should treat zero as null when `noZero` is set', function() {
    assert(!hasValues(0, true));
  });

  it('should work for objects', function() {
    assert(!hasValues({}));
    assert(hasValues({a: 'b'}));
  });

  it('should work for arrays', function() {
    assert(!hasValues([]));
    assert(hasValues(['a', 'b']));
  });

  it('should work for functions', function() {
    assert(hasValues(function(foo) {}));
    assert(!hasValues(function() {}));
  });
});

describe('isEmpty', function() {
  it('should work for nulls', function() {
    assert(isEmpty(null));
    assert(isEmpty(undefined));
  });

  it('should work for booleans', function() {
    assert(!isEmpty(false));
    assert(!isEmpty(true));
  });

  it('shold work for strings', function() {
    assert(isEmpty(''));
    assert(!isEmpty('string'));
  });

  it('should work for numbers', function() {
    assert(!isEmpty(0));
    assert(!isEmpty(1));
  });

  it('should treat zero as null when `noZero` is set', function() {
    assert(isEmpty(0, true));
  });

  it('should work for objects', function() {
    assert(isEmpty({}));
    assert(!isEmpty({a: 'b'}));
  });

  it('should work for arrays', function() {
    assert(isEmpty([]));
    assert(!isEmpty(['a', 'b']));
  });

  it('should work for functions', function() {
    assert(!isEmpty(function(foo) {}));
    assert(isEmpty(function() {}));
  });
});
