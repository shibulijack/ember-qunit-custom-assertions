export default function(context, value, expected, message) {
  message = message || `${value} should contain "${expected}"`;
  let actual = value;
  let result = value.includes(expected);

  this.pushResult({ result, actual, expected, message });
}