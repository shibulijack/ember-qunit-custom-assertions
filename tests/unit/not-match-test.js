import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupCustomAssertions from 'ember-qunit-custom-assertions/test-support';

module('Assertion | match', function(hooks) {
  setupTest(hooks);
  setupCustomAssertions(hooks);

  test('regex should not match string', function(assert) {
    let regexMatcher = /text/;
    assert.notMatch("sample string", regexMatcher);
  });

  test('regex should not match the pattern', function (assert) {
    let regexMatcher = /[a-zA-Z]+-\d+-[a-zA-Z]/;
    assert.notMatch("12345-string", regexMatcher);
  });
});
