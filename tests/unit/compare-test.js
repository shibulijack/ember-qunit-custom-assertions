import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupCustomAssertions from 'ember-qunit-custom-assertions/test-support';

module('Assertion | compare', function(hooks) {
  setupTest(hooks);
  setupCustomAssertions(hooks);

  module('lt', function() {
    test('can check numbers', function(assert) {
      assert.lt(1, 2);
    });

    test('can check strictly', function(assert) {
      assert.lte(3, 3);
    });
  });

  module('gt', function() {
    test('can check numbers', function(assert) {
      assert.gt(2, 1);
    });

    test('can check strictly', function(assert) {
      assert.gte(2, 2);
    });
  });
});