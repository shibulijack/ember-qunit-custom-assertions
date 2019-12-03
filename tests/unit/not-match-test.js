import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Assertion | match', function(hooks) {
  setupTest(hooks);

  test('regex should not match string', function(assert) {
    let regexMatcher = /text/;
    assert.notMatch("sample string", regexMatcher);
  });

  test('regex should not match the pattern', function (assert) {
    let regexMatcher = /[a-zA-Z]+-\d+-[a-zA-Z]/;
    assert.notMatch("12345-string", regexMatcher);
  });
});
