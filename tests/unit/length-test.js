import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupCustomAssertions from 'ember-qunit-custom-assertions/test-support';

module('Assertion | length', function(hooks) {
  setupTest(hooks);
  setupCustomAssertions(hooks);

  test('can check prototypes length result with the expected value', function(assert) {
    assert.length('foo bar', 7, 'String length matches');
    assert.length([1, 2, 5, 7], 4, 'Array length matches');
    assert.length(Object.keys({ key1: 'val1', key2: 'val2' }), 2, 'Object keys length matches');
  });
});