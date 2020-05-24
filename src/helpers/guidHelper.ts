const uuidv4 = require("uuid/v4");

export default function newGuid(): string {
  return uuidv4();
}
