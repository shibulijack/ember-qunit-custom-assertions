export default function(context, expected, target, message) {
  message = message || `${target} should be instance of ${expected}"`;
  let result = target instanceof expected;

  this.pushResult({ result, target, expected, message });
}
