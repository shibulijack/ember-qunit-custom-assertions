export default function(context, value, expected, message) {
  message = message || `${value} should contain "${expected}"`;
  let actual = value;
  let result = false;

  if (
    typeof value === "string" ||
    (typeof value === "object" && Array.isArray(value))
  ) {
    result = value.includes(expected);
  } else if (typeof value === "object") {
    // Expected arg can be either `string` or `object`
    if (typeof expected === "string") {
      result = value.hasOwnProperty(expected);
    } else {
      result = Object.keys(expected).every(
        key => value.hasOwnProperty(key) && value[key] === expected[key]
      );
    }
  }

  this.pushResult({ result, actual, expected, message });
}
