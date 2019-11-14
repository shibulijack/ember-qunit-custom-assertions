import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupCustomAssertions from 'ember-cli-custom-assertions/test-support';

module('Assertion | contains', function(hooks) {
  setupTest(hooks);
  setupCustomAssertions(hooks);

  test('can check arrays', function(assert) {
    let sampleArr = [1, 2, 3];
    assert.contains(sampleArr, 2, 'Array contains element');
  });

  test('can check string', function(assert) {
    let sampleStr = "Developed by Freshworks";
    assert.contains(sampleStr, 'Fresh', 'String contains sub string');
  });

  test('can check objects', function(assert) {
    let sampleObj = {
      "foo": "bar"
    };
    assert.contains(sampleObj, 'foo', 'Object contains key');
  });
});