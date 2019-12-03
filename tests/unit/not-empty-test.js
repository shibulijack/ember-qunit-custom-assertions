import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Assertion | notEmpty', function(hooks) {
  setupTest(hooks);

  test('can check arrays', function(assert) {
    assert.notEmpty([1]);
  });

  test('can check string', function(assert) {
    assert.notEmpty('foo');
  });

  test('can check objects', function(assert) {
    let sampleObj = {
      "foo": "bar"
    };
    assert.notEmpty(sampleObj, 'Non Empty object');
  });
});