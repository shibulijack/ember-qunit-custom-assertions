export default function (context, actual, expected, delta, message) {
  message = message || `${actual} should be have a delta of ${delta}"`;
  let result = false;
  if (
    actual && typeof actual === 'number' &&
    expected && typeof expected === 'number' &&
    delta && typeof delta === 'number'
  ) {
    result = expected === Math.abs(actual - delta);
  } else {
    message = `${actual}, ${expected} and ${delta} should be numbers`
  }

  this.pushResult({ result, actual, expected, delta, message });
}
