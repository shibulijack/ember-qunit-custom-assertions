import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupCustomAssertions from 'ember-qunit-custom-assertions/test-support';

module('Assertion | match', function(hooks) {
  setupTest(hooks);
  setupCustomAssertions(hooks);

  test('regex should match the string', function(assert) {
    let regexMatcher = /text/;
    assert.match("sample text string", regexMatcher);
  });

  test('regex should match only numbers between the string', function (assert) {
    let regexMatcher = /[a-zA-Z]+-\d+-[a-zA-Z]/;
    assert.match("string-12345-string", regexMatcher);
  });
});
