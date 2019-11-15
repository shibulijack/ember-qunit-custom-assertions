import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupCustomAssertions from 'ember-qunit-custom-assertions/test-support';

module('Assertion | includes', function(hooks) {
  setupTest(hooks);
  setupCustomAssertions(hooks);

  test('can check arrays', function(assert) {
    let sampleArr = [1, 2, 3];
    assert.includes(sampleArr, 2, 'Array includes element');
  });

  test('can check string', function(assert) {
    let sampleStr = "Developed by Freshworks";
    assert.includes(sampleStr, 'Fresh', 'String includes sub string');
  });

  test('can check objects', function(assert) {
    let sampleObj = {
      "foo": "bar"
    };
    assert.includes(sampleObj, 'foo', 'Object includes key');
  });
});