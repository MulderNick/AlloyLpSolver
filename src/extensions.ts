/* eslint-disable no-extend-native */
interface Array<T> {
  without(elem: T): Array<T>;
}

Object.defineProperty(Array.prototype, "without", {
  enumerable: false,
  writable: false,
  value: function<T>(this: T[], elem: T): T[] {
    let newArray = [...this];
    const index: number = newArray.indexOf(elem);
    newArray.splice(index, 1);
    return newArray;
  },
});
