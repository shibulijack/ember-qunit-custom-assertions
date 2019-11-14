export default function(context, value, expected, message) {
  message = message || `${value} should contain "${expected}"`;
  let actual = value;
  let result = false;

  if (
    typeof value === "string" ||
    (typeof value === "object" && Array.isArray(value))
  ) {
    result = value.includes(expected);
  } else if (typeof value === "object") {
    result = value.hasOwnProperty(expected);
  }

  this.pushResult({ result, actual, expected, message });
}
