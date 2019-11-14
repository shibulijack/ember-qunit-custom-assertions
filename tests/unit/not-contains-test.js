import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupCustomAssertions from 'ember-cli-custom-assertions/test-support';

module('Assertion | notContains', function(hooks) {
  setupTest(hooks);
  setupCustomAssertions(hooks);

  test('can check arrays', function(assert) {
    let sampleArr = [1, 2, 3];
    assert.notContains(sampleArr, 4, 'Array does not contain element');
  });

  test('can check string', function(assert) {
    let sampleStr = "Developed by Freshworks";
    assert.notContains(sampleStr, 'Shibu', 'String does not have any matches');
  });

  test('can check objects', function(assert) {
    let sampleObj = {
      "foo": "bar"
    };
    assert.notContains(sampleObj, 'test', 'Object does not contain the specified key');
  });
});