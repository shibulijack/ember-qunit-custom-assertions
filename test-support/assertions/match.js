export default function (value, expected, message) {
  message = message || `${value} should be a string and ${expected} should be a regular expression"`;
  let actual = value;
  let result = false;
  if (value && typeof value === "string") {
    result = value.match(expected);
  }

  this.pushResult({ result, actual, message });
}
