ember-qunit-custom-assertions
==============================================================================
![npm](https://img.shields.io/npm/v/ember-qunit-custom-assertions)
![npm](https://img.shields.io/npm/dw/ember-qunit-custom-assertions)
![github](https://github.com/shibulijack-fd/ember-qunit-custom-assertions/workflows/deploy/badge.svg)

[QUnit](https://api.qunitjs.com/assert/) has a very basic collection of assertions, especially when compared to something like [chai](https://www.chaijs.com/api/bdd/).

Let's take an example. If you want to check if a string/array/object is empty, you would do something like this in chai:

```javascript
expect({}).to.be.empty;
expect([]).to.be.empty;
```

Similar results can be achieved using `assert.notOk` in QUnit too, but you would have to do something like this:
```javascript
assert.notOk(Object.keys({}).length);
assert.notOk(Array.from([]).length);
```

Wouldn't it be easier if there's a cleaner way to achieve the same results? Well, look no further, `ember-qunit-custom-assertions` to the rescue.

```javascript
assert.empty({});
assert.empty([]);
```

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-qunit-custom-assertions
```


Usage
------------------------------------------------------------------------------

You must call the setupCustomAssertions function in your test helper to use the custom assertions in your tests.

```javascript
// tests/test-helper.js
import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import setupCustomAssertions from 'ember-qunit-custom-assertions/test-support';

setApplication(Application.create(config.APP));

start();
setupCustomAssertions(config.modulePrefix);

// tests/unit/foo-test.js
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('default setup', function(hooks) {
  setupTest(hooks);

  test('can use custom assertions', function(assert) {
    assert.includes('foo bar', 'bar');
  });
});
```

Assertions
------------------------------------------------------------------------------

### assert.includes
Works on strings, arrays and objects.

**params**

- `actual` _[string/array/object]_

- `expected` _[string/number]_

- `message` _@optional_

**examples**

```javascript
assert.includes([1, 2, 3], 2, 'Array contains the specified element');
assert.includes([{x: 1}, {y: 2}, {z: 3}], {x: 1}, 'Array includes object');
assert.includes('foo bar', 'bar', 'String contains sub string');
assert.includes({ foo: "bar" }, 'foo', 'Object contains key');
assert.includes({ a: 1, b: 2, c: 3 }, { a: 1 }, 'Specified object is present in target object');
```

### assert.notIncludes
Works on strings, arrays and objects.

**params**

- `actual` _[string/array/object]_

- `expected` _[string/number]_

- `message` _@optional_

**examples**

```javascript
assert.notIncludes([1, 2, 3], 2, 'Array does not contain the specified element');
assert.notIncludes([{x: 1}, {y: 2}, {z: 3}], {a: 15}, 'Array does not include object');
assert.notIncludes('foo bar', 'dog', 'String does not contain sub string');
assert.notIncludes({ foo: "bar" }, 'cat', 'Object does not contain the specified key');
assert.includes({ a: 1, b: 2, c: 3 }, { z: 4 }, 'Specified object is not present in target object');
```

### assert.deepIncludes
Checks if target has the expected elements/keys. Works on strings, arrays and objects.

**params**

- `actual` _[string/array/object]_

- `expected` _[array of string/number]_

- `message` _@optional_

**examples**

```javascript
assert.deepIncludes([1,2,3], [1,2], 'Array includes elements');
assert.deepIncludes("Developed by Freshworks", ["Fresh","by"], 'String includes words');
assert.deepIncludes({x:1, y:2}, ['x', 'y'], 'Object has keys');
```

### assert.notDeepIncludes
Works on strings, arrays and objects.

**params**

- `actual` _[string/array/object]_

- `expected` _[array of string/number]_

- `message` _@optional_

**examples**

```javascript
assert.notDeepIncludes([1,2,3], [4,5]);
assert.notDeepIncludes("Developed by Freshworks", ["Shibu","Lijack"]);
assert.notDeepIncludes({x:1, y:2}, ['a', 'b']);
```

### assert.empty
Checks if a string, array or object is empty.

**params**

- `actual` _[string/array/object]_

- `message` _@optional_

**example**

```javascript
assert.empty([], 'Empty array');
assert.empty({}, 'Empty array');
assert.empty('', 'Empty array');
```

### assert.notEmpty
Checks if a string, array or object is not empty.

**params**

- `actual` _[string/array/object]_

- `message` _@optional_

**example**

```javascript
assert.notEmpty([]);  // fails
assert.notEmpty([1, 2]);  // passes
assert.notEmpty({ foo: "bar" }, 'Not an empty object');
assert.notEmpty('foo', 'Not an empty string');
```

### assert.length
Checks if the target’s length is equal to the given number.

**params**

- `actual` _[string/array]

- `expected` _[number]_

- `message` _@optional_

**example**

```javascript
assert.length('foo', 3);
assert.length(['foo', 'bar'], 2);
```

### assert.lt
Checks if a number is lesser than expected.

**params**

- `actual` _[number]_

- `expected` _[number]_

- `message` _@optional_

**example**

```javascript
assert.lt(1, 4);
```

### assert.lte
Checks if a number is lesser than or equal to expected.

**params**

- `actual` _[number]_

- `expected` _[number]_

- `message` _@optional_

**example**

```javascript
assert.lte(1, 4);
assert.lte(1, 1); // both pass
```

### assert.gt
Checks if a number is greater than expected.

**params**

- `actual` _[number]_

- `expected` _[number]_

- `message` _@optional_

**example**

```javascript
assert.gt(15, 5);
```

### assert.gte
Checks if a number is greater than or equal to expected.

**params**

- `actual` _[number]_

- `expected` _[number]_

- `message` _@optional_

**example**

```javascript
assert.gte(15, 5);
assert.gte(15, 15);
```

### assert.instanceOf
Checks if the target is an instance of the expected type.

**params**

- `expected` _[Array/Object/Date]_

- `target` _[Array/Object/Date]_

- `message` _@optional_

**example**

```javascript
assert.instanceOf(Array, []);
assert.instanceOf(Object, {});
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
