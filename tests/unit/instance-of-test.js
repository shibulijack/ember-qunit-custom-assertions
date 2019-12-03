import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Assertion | instanceOf', function(hooks) {
  setupTest(hooks);

  test('can check arrays', function(assert) {
    assert.instanceOf(Array, []);
  });

  test('can check objects', function(assert) {
    assert.instanceOf(Object, {});
  });

  test('can check dates', function(assert) {
    assert.instanceOf(Date, new Date());
  });
});