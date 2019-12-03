export default function(value, message) {
  message = message || `${value} should be empty"`;
  let actual = value;
  let result = false;

  if (typeof value === "string") {
    result = !value || value.length === 0;
  } else if (typeof value === "object" && Array.isArray(value)) {
    result = value.length === 0;
  } else if (typeof value === "object") {
    result = Object.keys(value).length === 0;
  }

  this.pushResult({ result, actual, message });
}
