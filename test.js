/*!
 * has-values <https://github.com/jonschlinkert/has-values>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
const assert = require('assert');
const has = require('./');

describe('has', function() {
  it('should support null', function() {
    assert(has(null));
  });

  it('should support undefined', function() {
    assert(!has(undefined));
  });

  it('should support booleans', function() {
    assert(has(true));
    assert(has(false));
  });

  it('should support dates', function() {
    assert(has(new Date()));
  });

  it('should support Maps', function() {
    assert(!has(new Map()));
    assert(has(new Map([['foo', 'bar']])));
  });

  it('should support regex', function() {
    assert(!has(new RegExp()));
    assert(has(new RegExp('foo')));
  });

  it('should support Sets', function() {
    assert(!has(new Set()));
    assert(has(new Set(['foo', 'bar'])));
  });

  it('should support strings', function() {
    assert(!has(''));
    assert(has('string'));
  });

  it('should support numbers', function() {
    assert(has(0));
    assert(has(1));
  });

  it('should support objects', function() {
    assert(!has({}));
    assert(!has({ foo: '' }));
    assert(!has({ a: undefined }));
    assert(has({ a: 0 }));
    assert(has({ a: null }));
    assert(has({ a: function() {} }));
    assert(has({ a: function(a, b) {} }));
    assert(has({ a: 'b' }));
  });

  it('should support arrays', function() {
    assert(!has([]));
    assert(has(['a', 'b']));
  });

  it('should support functions', function() {
    assert(has(function(foo) {}));
    assert(has(function() {}));
  });
});
