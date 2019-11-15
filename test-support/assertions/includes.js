export default function(context, target, expected, message) {
  message = message || `${target} should contain "${expected}"`;
  let actual = target;
  let result = false;

  if (
    typeof target === "string" ||
    (typeof target === "object" && Array.isArray(target))
  ) {
    // Expected arg can be either `string`, `number` or `object`
    if (typeof expected === "string" || typeof expected === "number") {
      result = target.includes(expected);
    } else {
      result = target.some(obj =>
        Object.keys(obj).every(
          k => expected.hasOwnProperty(k) && expected[k] === obj[k]
        )
      );
    }
  } else if (typeof target === "object") {
    // Expected arg can be either `string` or `object`
    if (typeof expected === "string") {
      result = target.hasOwnProperty(expected);
    } else {
      result = Object.keys(expected).every(
        key => target.hasOwnProperty(key) && target[key] === expected[key]
      );
    }
  }

  this.pushResult({ result, actual, expected, message });
}
