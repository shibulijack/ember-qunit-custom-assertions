import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupCustomAssertions from 'ember-cli-custom-assertions/test-support';

module('Assertion | empty', function(hooks) {
  setupTest(hooks);
  setupCustomAssertions(hooks);

  test('can check arrays', function(assert) {
    assert.empty([], 'Empty array');
  });

  test('can check string', function(assert) {
    assert.empty('', 'Empty string');
  });

  test('can check objects', function(assert) {
    assert.empty({}, 'Empty object');
  });
});