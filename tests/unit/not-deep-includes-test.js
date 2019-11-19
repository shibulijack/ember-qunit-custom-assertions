import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupCustomAssertions from 'ember-qunit-custom-assertions/test-support';

module('Assertion | not-deep-includes', function(hooks) {
  setupTest(hooks);
  setupCustomAssertions(hooks);

  test('can check arrays', function(assert) {
    let sampleArr = [1, 2, 3];
    let keys = [4, 5];
    assert.notDeepIncludes(sampleArr, keys);
  });

  test('can check string', function(assert) {
    let sampleStr = "Developed by Freshworks";
    let keys = ['Shibu', 'Lijack'];
    assert.notDeepIncludes(sampleStr, keys);
  });

  test('can check objects', function(assert) {
    let sampleObj = {x: 1, y: 2, z: 3};
    let keys = ['a', 'b'];
    assert.notDeepIncludes(sampleObj, keys);
  });
});