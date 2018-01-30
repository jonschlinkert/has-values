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
  it('should support arguments', function() {
    function foo() {
      assert(!has(arguments));
    }
    function bar() {
      assert(has(arguments));
    }
    foo();
    bar('abc');
  });

  it('should support arrays', function() {
    assert(has(['foo', 'bar']));
    assert(has([{foo: 'bar'}]));
    assert(has([,,{foo: 'bar'}]));

    assert(!has([]));
    assert(!has(['']));
    assert(!has([undefined]));
    assert(!has([,,,]));
    assert(!has([{}, {}]));
  });

  it('should support booleans', function() {
    assert(has(true));
    assert(has(false));
  });

  it('should support dates', function() {
    assert(has(new Date()));
  });

  it('should support functions', function() {
    assert(has(function(foo) {}));
    assert(has(function() {}));
    assert(has(function *() {}));
  });

  it('should support Maps', function() {
    assert(!has(new Map()));
    assert(has(new Map([['foo', 'bar']])));
  });

  it('should support null', function() {
    assert(has(null));
  });

  it('should support numbers', function() {
    assert(has(0));
    assert(has(1));
  });

  it('should support objects', function() {
    assert(has({ foo: 0 }));
    assert(has({ foo: null }));
    assert(has({ foo: function() {} }));
    assert(has({ foo: 'bar' }));
    assert(has({ foo: ['bar'] }));
    assert(has({ foo: [{}, 'bar'] }));
    assert(!has({}));
    assert(!has({ foo: '' }));
    assert(!has({ foo: undefined }));
    assert(!has({ foo: [] }));
    assert(!has({ foo: [{}] }));
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

  it('should support undefined', function() {
    assert(!has());
    assert(!has(void 0));
    assert(!has(void 42));
    assert(!has(undefined));
  });
});
