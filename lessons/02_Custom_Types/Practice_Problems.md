# TS240 > Lesson 2 > Practice Problems

## 2. Practice Problems: Type Aliases

1. Yes, on line 18, we assign an object with the keys `name` and `age` to `person2`.
   `person2` has type `Person`, which requires a `Name` type value for the `name`
   property and a `Age` type value for the `age` property. Since `Name` and `Age`
   are aliases for the `string` and `number` types respectively, the assignment of
   the object to `person2` will cause a type error for each property.

## 4. Practice Problems: Object Types

1. length:

```ts
function myFunc({ length }: string[]): number {
  return length;
}

const arr: string[] = ["1", "2", "3", "4", "5"];
console.log(myFunc(arr)); // 5
```

## 6. Practice Problems: Interfaces

1.

```ts
interface Author {
  firstName: string;
  lastName: string;
}

interface Book {
  title: string;
  author: Author;
  publicationDate: number;
  genres: string[];
}

const book: Book = {
  title: "The Great Gatsby",
  author: {
    firstName: "F. Scott",
    lastName: "Fitzgerald",
  },
  publicationDate: 1925,
  genres: ["Tragedy", "Realism"],
};
```

## 8. Practice Problems: Structural Typing

1. No, the type `Apple` is a valid subtype of type `Fruit`, since its shape is a
   superset of `Fruit`.
2. Yes, there will be a type error, since type `Alien` is not a valid subtype
   of type `Human`. Since `john` is typed as `Human`, the property `country` must
   be defined in any value assigned to it.
3. Yes, there will be a type error. The assignment to `shape` is fine, since
   `redSquare`'s type `Square` is a subtype of `Shape`. However, the call to
   `shape.sideLength` on line 7 will raise a type error, since `sideLength`
   is not a property that exists on `shape`'s type.
   The output will be 5, since the code is compiled to js, and this is still
   valid javascript.

## 10. Practice Problems: Optional Properties

1.

```ts
interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}

function displayUserInfo({ name, email = "N/A", age }: UserInfo): string {
  return `Name: ${name}\nEmail: ${email}\nAge: ${age ?? "unknown"}`;
}

console.log(
  displayUserInfo({ name: "Daniel", email: "dchae@launchschool.com" }),
);

console.log(displayUserInfo({ name: "Daniel", age: 28 }));
```

## 12. Practice Problems: Readonly Properties

1.

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}

function movePoint(point: Point, dx: number, dy: number): Point {
  return { x: point.x + dx, y: point.y + dy };
}

console.log(movePoint({ x: 3, y: 4 }, 2, 2));
```

## 14. Practice Problems: Type Assertions

1. No type errors, the value of `age` will be `undefined` since the value `30` has no property
   `length`.

## 16. Practice Problems: Classes

1. Yes, optional parameters cannot come before required parameters.

2.

```ts
interface Movable {
  speed: number;
  move(): void;
}

class Car implements Movable {
  make: string;
  model?: string;
  speed: number;

  constructor(make: string, model?: string) {
    this.make = make;
    this.model = model;
    this.speed = 0;
  }

  move(): void {
    this.speed = 20;
    const name = this.make + (this.model ? ` ${this.model}` : "");
    console.log(`${name} is going ${this.speed} mph!`);
  }
}

const ford = new Car("Ford", "Fusion");
ford.move(); // Ford Fusion is going 20 mph!
```
