export default function(actual, expected, message) {
  message = message || `${actual}.length should be equal to ${expected}"`;
  let result = actual.length == expected;

  this.pushResult({ result, actual, message });
}
