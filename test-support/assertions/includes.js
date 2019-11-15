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
    if(typeof expected === "string") {
      result = value.hasOwnProperty(expected);
    } else {
      let isAllKeysIncluded = true;
      Object.keys(expected).forEach((key) => {
        if(!value.hasOwnProperty(key) || value[key] != expected[key]) {
          isAllKeysIncluded = false;
        }
      });
      result = isAllKeysIncluded;
    }
  }

  this.pushResult({ result, actual, expected, message });
}
