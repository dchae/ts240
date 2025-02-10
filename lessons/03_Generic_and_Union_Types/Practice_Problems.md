# TS240 > Lesson 3 > Practice Problems

## 4. Practice Problems: Union Types

1.

```ts
function concatenateStrings(a: string, b: string): string {
  return a + b;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

function combine(a: string | number, b: string | number): string | number {
  if (typeof a === typeof b)
    return typeof a === "string"
      ? concatenateStrings(a, b as string)
      : addNumbers(a, b as number);
  throw new TypeError("arguments must be same type");
}

const result = combine("Hello", "World");
const numericResult = combine(1, 2);

console.log(result);
console.log(numericResult);
```

## 6. Practice Problems: Function Overloads

```ts
function combine(string1: string, string2: string): string;
function combine(num1: number, num2: number): number;
function combine(
  input1: string | number,
  input2: string | number,
): string | number {
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1.concat(input2);
  } else if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    throw new Error(
      "Invalid input types: both inputs must be strings or both inputs must be numbers.",
    );
  }
}

const concatenated: string = combine("Hello, ", "World!");

const added: number = combine(5, 10);
```

## 9. Practice Problems: Generic Functions

1.

```ts
function pair<T>(a: T, b: T): T[] {
  return [a, b];
}

const pairOfNumbers = pair(1, 2); // returns [1, 2]
const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]
```

## 11. Practice Problems: Generic Objects

1. No, the types for first and second are incorrect for `yourPair`.
2. No, the element at index `2` in `yourPairs.values` will throw a type error since
   it is not a string.

## 13. Practice Problems: Generic Arrays

1. Yes.
2. Yes.
3. No, should be `boolean[]` or `Array<boolean>`.
4. The syntax for the generic array type is correct, but there will be a type error,
   since `"mango"` is not assignable to the `FruitNames` type.
