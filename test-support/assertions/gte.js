export default function(context, actual, expected, message) {
  message = message || `${actual} should be greater than or equal to ${expected}"`;
  let result = actual >= expected;

  this.pushResult({ result, actual, message });
}
