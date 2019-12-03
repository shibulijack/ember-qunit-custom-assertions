import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Assertion | close-to', function(hooks) {
  setupTest(hooks);

  test('check where the number as a delta of some amount', function(assert) {
    assert.closeTo(1.5, 1, 0.5);
  });
});
