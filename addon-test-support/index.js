/* global requirejs */
import { camelize } from '@ember/string';
import { A } from '@ember/array';

let assertionCache;

function assertions(modulePrefix) {
  if (!assertionCache) {
    const entries = A(Object.keys(requirejs.entries));
    const pattern = new RegExp(`^${modulePrefix}/tests/assertions/[\\w-]+$`);

    assertionCache = entries.reduce(function(entries, entry) {
      if (entry.match(pattern)) {
        let splitEntry = entry.split('/');
        let fn = requirejs(entry)['default'];

        entry = splitEntry[splitEntry.length - 1];
        entry = camelize(entry);
        entries[entry] = fn;
      }

      return entries;
    }, {});
  }

  return assertionCache;
}

export default function(modulePrefix) {
  let _assertions = assertions(modulePrefix);

  Object.keys(_assertions).forEach(function(assertion) {
    window.QUnit.assert[assertion] = function() {
      let fn = _assertions[assertion];
      let args = Array.prototype.slice.call(arguments);

      return fn.apply(this, args);
    };
  });
}
