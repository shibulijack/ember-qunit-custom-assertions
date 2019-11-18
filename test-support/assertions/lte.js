export default function(context, actual, expected, message) {
  message = message || `${actual} should be lesser than or equal to ${expected}"`;
  let result = actual <= expected;

  this.pushResult({ result, actual, message });
}
