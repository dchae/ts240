# TS240 > Lesson 1 > Practice Problems

## 10. Practice Problems: Primitive Types

1. yes
2. no
3. ~~no~~ yes
4. yes
5. yes

## 12. Practice Problems: Arrays and Tuples

1. Yes
2. Yes
3. No
4. Yes
5. `const myArray: (string | boolean)[] = [...]`

## 14. Practice Problems: Parameter types and return types

1. initial: number, values: number[], return type: string
2. Output:
   "Alice, 30, from USA"
   "Bob, unknown age, from Canada"
   "Charlie, 25, from UK"

## 16. Practice Problems: Working with built-in JS methods

1.

```ts
const numbersInStringFormat = ["10", "20", "30", "40"];

function convertToNumbers(arr: string[]): number[] {
  // return arr.map((s) => parseInt(s, 10));
  // return arr.map(Number);
  // return arr.map((s) => +s);
  return arr.map((s) => ~~s);
}

console.log(convertToNumbers(numbersInStringFormat)); // [10, 20, 30, 40]
```

## 18. Practice Problems: Void

1. Yes, because the function returns a value of type "number", when its declared type is 'void'.

## 20. Practice Problems: Literal Types

1.

```ts
type opcode = "add" | "subtract" | "multiply" | "divide";

function calculate(operation: opcode, a: number, b: number) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw new Error("Invalid operation");
  }
}

console.log(calculate("add", 3, 5)); // 8
console.log(calculate("subtract", 13, 5)); // 8
console.log(calculate("multiply", 2, 4)); // 8
console.log(calculate("divide", 24, 3)); // 8
```

## 22. Practice Problems: Explicit Typing vs Type Inference

1. If either `result` or `numericResult` were typed (to 'string' or 'number' respectively), the TS compiler would throw an error. Currently, the parameters `a` and `b` have implicit types "any". It would be better to specify their types (which would also specify an implicit return value type).

## 24. Practice Problems: Type Errors vs. Syntax Errors

1. type error
2. no error
3. syntax error
