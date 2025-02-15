// Question 1: Type Narrowing with Union Types:
// Write a function `printValue` that takes a value of type
// `string | number | boolean`. If the value is a string, it should print
// the string in uppercase.
// If it's a number, it should print the number multiplied by 2.
// If it's a boolean, it should print the negation of the boolean.
// Make sure your function uses type guards to correctly narrow the type.

function printValue(value: string | number | boolean): void {
  switch (typeof value) {
    case "string":
      console.log(value.toUpperCase());
      break;
    case "number":
      console.log(value * 2);
      break;
    case "boolean":
      console.log(!value);
      break;
    default:
      throw new TypeError("Invalid Type");
  }
}

printValue("Hello, world!"); // "HELLO, WORLD!"
printValue(25); // 50
printValue(false); // true;
