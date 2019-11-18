export default function(context, actual, expected, message) {
  message = message || `${actual} should be greater than ${expected}"`;
  let result = actual > expected;

  this.pushResult({ result, actual, message });
}
