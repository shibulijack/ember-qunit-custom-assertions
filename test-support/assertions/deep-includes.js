export default function(target, expected, message) {
  message = message || `${JSON.stringify(target, null, 2)} should contain "${expected}"`;
  let actual = target;
  let result = false;

  if (
    typeof target === "string" ||
    (typeof target === "object" && Array.isArray(target))
  ) {
    result = expected.every(k => target.includes(k));
  } else if (typeof target === "object") {
    result = expected.every(k => target.hasOwnProperty(k));
  }

  this.pushResult({ result, actual, expected, message });
}
