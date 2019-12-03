import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Assertion | deep-includes', function(hooks) {
  setupTest(hooks);

  test('can check arrays', function(assert) {
    let sampleArr = [1, 2, 3];
    let keys = [1, 2];
    assert.deepIncludes(sampleArr, keys, 'Array includes elements');
  });

  test('can check string', function(assert) {
    let sampleStr = "Developed by Freshworks";
    let keys = ['Fresh', 'by'];
    assert.deepIncludes(sampleStr, keys, 'String includes sub string');
  });

  test('can check objects', function(assert) {
    let sampleObj = {x: 1, y: 2, z: 3};
    let keys = ['x', 'y'];
    assert.deepIncludes(sampleObj, keys);
  });
});