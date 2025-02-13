# TS240 > Lesson 5 > Practice Problems

## 4. Practice Problems: Extending Interfaces

1.

```ts
class Animal {
  constructor(public name: string) {}

  makeSound() {
    return "Generic animal sound";
  }
}

class Dog extends Animal {
  fetch() {
    return `${this.name} fetches a stick.`;
  }
}

const myDog = new Dog("Rex");
console.log(myDog.fetch());
```

OR:

```ts
interface Animal {
  name: string;
  makeSound(): string;
}

interface Dog extends Animal {
  fetch(): string;
}

const myDog: Dog = {
  name: "Rex",
  makeSound() {
    return "Generic animal sound";
  },
  fetch() {
    return `${this.name} fetches a stick.`;
  },
};

console.log(myDog.fetch());
```

## 6. Practice Problems: Type Intersections

1.

```ts
type Product = {
  name: string;
  price: number;
};

type Shipping = {
  weight: number;
  shippingCost: number;
};

type ShippableProduct = Product & Shipping;
```

2.

```ts
interface Product {
  name: string;
  price: number;
}

interface Shipping {
  weight: number;
  shippingCost: number;
}

interface ShippableProduct extends Product, Shipping {}
```

## 8. Practice Problems: Differences between Interfaces and Types

1. This code will result in a type error, since `type` aliases cannot be redeclared.

2. This code will not result in a type error. TypeScript uses structural typing, so two values with the same "shape" will have the same type.

## 10. Practice Problems: Index Signatures

1. No, since keys in an object literal are coerced to strings.

2.

```ts
interface numberMap extends Map<number, string> {}

const obj: numberMap = new Map([
  [1, "Jane"],
  [2, "30"],
  [3, "female"],
]);

console.log([...obj.keys()].every((key) => typeof key === "number"));
```

## 12. Practice Problems: Arrays and Index Signatures

1.

```ts
type CustomArray = {
  [index: number]: string | number;
};

function processCustomArray(arr: CustomArray) {
  if (!Array.isArray(arr)) return [];

  return arr.filter((v) => typeof v === "string").map((s) => s.toUpperCase());
}

const customArray: CustomArray = ["apple", 42, "banana"];

const upperCaseStringArray = processCustomArray(customArray);
console.log(upperCaseStringArray); // ["APPLE", "BANANA"]
```

## 14. Practice Problems: The object Type

1.

```ts
function getProperty(obj: { [k: string]: unknown }, key: string) {
  return obj[key];
}

const obj = {
  name: "John",
  age: 30,
};

const x = getProperty(obj, "name");
const y = getProperty(obj, "age");
```

2.

```ts
interface Person {
  [k: string]: unknown;
}

function getProperty(obj: Person, key: "name"): string;
function getProperty(obj: Person, key: "age"): number;
function getProperty(obj: Person, key: string): unknown {
  return obj[key];
}

const obj = {
  name: "John",
  age: 30,
};

const x = getProperty(obj, "name");
const y = getProperty(obj, "age");
```

OR

```ts
function getProperty<K extends string, P extends { name: string; age: number }>(
  obj: { [k: string]: any },
  key: K,
): K extends keyof P ? P[K] : unknown {
  return obj[key];
}

const obj = {
  name: "John",
  age: 30,
};

const x = getProperty(obj, "name");
const y = getProperty(obj, "age");
```

## 16. Practice Problems: The keyof Operator

1. There will be a type error, since `keyof Student` here is equivalent to the union `"name" | "age"`, which does not include `"grade"`.
