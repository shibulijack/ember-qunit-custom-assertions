import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Assertion | includes', function(hooks) {
  setupTest(hooks);

  test('can check arrays', function(assert) {
    let sampleArr = [1, 2, 3];
    assert.includes(sampleArr, 2, 'Array includes element');
  });

  test('can check complex arrays', function(assert) {
    let sampleArr = [{x: 1}, {y: 2}, {z: 3}];
    assert.includes(sampleArr, {x: 1}, 'Array includes object');
  });

  test('can check string', function(assert) {
    let sampleStr = "Developed by Freshworks";
    assert.includes(sampleStr, 'Fresh', 'String includes sub string');
  });

  test('can check objects', function(assert) {
    let sampleObj = {
      "foo": "bar"
    };
    assert.includes(sampleObj, 'foo');
  });

  test('can check complex objects', function(assert) {
    let sampleObj = {x: 1, y: 2};
    let expectedObj = {x: 1};
    assert.includes(sampleObj, expectedObj, 'Expected object is found in target object');
  });
});