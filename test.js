/*!
 * has-values <https://github.com/jonschlinkert/has-values>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var should = require('should');
var hasValues = require('./');

function isEmpty(o, isZero) {
  return !hasValues(o, isZero);
}

describe('hasValues', function () {
  it('should work for nulls', function () {
    hasValues(null).should.be.false;
    hasValues(undefined).should.be.false;
  });

  it('should work for booleans', function () {
    hasValues(true).should.be.true;
    hasValues(false).should.be.true;
  });

  it('shold work for strings', function () {
    hasValues('').should.be.false;
    hasValues('string').should.be.true;
  });

  it('should work for numbers', function () {
    hasValues(0).should.be.true;
    hasValues(1).should.be.true;
  });

  it('should treat zero as null when `noZero` is set', function () {
    hasValues(0, true).should.be.false;
  });

  it('should work for objects', function () {
    hasValues({}).should.be.false;
    hasValues({a: 'b'}).should.be.true;
  });

  it('should work for arrays', function () {
    hasValues([]).should.be.false;
    hasValues(['a', 'b']).should.be.true;
  });

  it('should work for functions', function () {
    hasValues(function (foo) {}).should.be.true;
    hasValues(function () {}).should.be.false;
  });
});


describe('isEmpty', function () {
  it('should work for nulls', function () {
    isEmpty(null).should.be.true;
    isEmpty(undefined).should.be.true;
  });

  it('should work for booleans', function () {
    isEmpty(false).should.be.false;
    isEmpty(true).should.be.false;
  });

  it('shold work for strings', function () {
    isEmpty('').should.be.true;
    isEmpty('string').should.be.false;
  });

  it('should work for numbers', function () {
    isEmpty(0).should.be.false;
    isEmpty(1).should.be.false;
  });

  it('should treat zero as null when `noZero` is set', function () {
    isEmpty(0, true).should.be.true;
  });

  it('should work for objects', function () {
    isEmpty({}).should.be.true;
    isEmpty({a: 'b'}).should.be.false;
  });

  it('should work for arrays', function () {
    isEmpty([]).should.be.true;
    isEmpty(['a', 'b']).should.be.false;
  });

  it('should work for functions', function () {
    isEmpty(function (foo) {}).should.be.false;
    isEmpty(function () {}).should.be.true;
  });
});
