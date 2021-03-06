import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Assertion | notIncludes', function(hooks) {
  setupTest(hooks);

  test('can check arrays', function(assert) {
    let sampleArr = [1, 2, 3];
    assert.notIncludes(sampleArr, 4, 'Array does not contain element');
  });

  test('can check complex arrays', function(assert) {
    let sampleArr = [{x: 1}, {y: 2}, {z: 3}];
    assert.notIncludes(sampleArr, {a: 15}, 'Array includes object');
  });

  test('can check string', function(assert) {
    let sampleStr = "Developed by Freshworks";
    assert.notIncludes(sampleStr, 'Shibu', 'String does not have any matches');
  });

  test('can check objects', function(assert) {
    let sampleObj = {
      "foo": "bar"
    };
    assert.notIncludes(sampleObj, 'test', 'Object does not contain the specified key');
  });

  test('can check complex objects', function(assert) {
    let sampleObj = {x: 1, y: 2};
    let expectedObj = {z: 3};
    assert.notIncludes(sampleObj, expectedObj, 'Expected object is not found in target object');
  });
});