ember-qunit-custom-assertions
==============================================================================

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

1. Install [ember-cli-custom-assertions](https://github.com/DockYard/ember-cli-custom-assertions).
2. Add `setupCustomAssertions(hooks)` to your test module.
3. Use custom assertions just like any other assert statements.


Assertions
------------------------------------------------------------------------------

### assert.contains
Works on strings, arrays and objects. 

**params**

- `actual` _[string/array/object]_

- `expected` _[string/number]_

- `message` _@optional_

**example**

```javascript
assert.contains([1,2,3], 2, 'Array contains the specified element');
assert.contains('foo bar', 'bar', 'String contains sub string');
assert.contains({ foo: "bar" }, 'foo', 'Object contains key');
```

### assert.notContains
Works on strings, arrays and objects. 

**params**

- `actual` _[string/array/object]_

- `expected` _[string/number]_

- `message` _@optional_

**example**

```javascript
assert.notContains([1,2,3], 2, 'Array does not contain the specified element');
assert.notContains('foo bar', 'dog', 'String does not contain sub string');
assert.notContains({ foo: "bar" }, 'cat', 'Object does not contain the specified key');
```

### assert.empty
Checks if a string, array or object is empty. 

**params**

`actual` _[string/array/object]_

`message` _@optional_

**example**

```javascript
- assert.empty([], 'Empty array');
- assert.empty({}, 'Empty array');
- assert.empty('', 'Empty array');
```

### assert.notEmpty
Checks if a string, array or object is not empty. 

**params**

- `actual` _[string/array/object]_

- `message` _@optional_

**example**

```javascript
assert.notEmpty([]);  // passes
assert.notEmpty([1, 2]);  // fails
assert.notEmpty({ foo: "bar" }, 'Not an empty object');
assert.notEmpty('foo', 'Not an empty string');
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
