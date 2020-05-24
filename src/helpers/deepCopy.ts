const clone = require("clone");

export default function deepCopy<T>(value: T): T {
  return clone(value);
}
