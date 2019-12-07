export default function (actual, expected, delta, message) {
  message = message || `${actual} should to be close to ${expected} +/- ${delta}"`;
  let result = false;
  if (
    actual && typeof actual === 'number' &&
    expected && typeof expected === 'number' &&
    delta && typeof delta === 'number'
  ) {
    result = Math.abs(actual - expected) <= delta
  } else {
    message = `${actual}, ${expected} and ${delta} should be numbers`
  }

  this.pushResult({ result, actual, expected, delta, message });
}
