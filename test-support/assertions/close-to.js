export default function(context, actual, target, delta, message) {
  message = message || `${actual} should be have a delta of ${delta}"`;
  let result = false;
  if (
    actual && typeof actual === 'number' &&
    target && typeof target === 'number' &&
    delta && typeof delta === 'number'
  ) {
    result = target == Math.abs(actual - delta);
  } else {
    message = `${actual}, ${target} and ${delta} should be numbers`
  }

  this.pushResult({ result, actual, target, delta, message });
}
