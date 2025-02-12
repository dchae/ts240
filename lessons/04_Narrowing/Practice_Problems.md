# TS240 > Lesson 4 > Practice Problems

## 4. Practice Problems: Narrowing with Type Guards

1. No type error, type `Video` has no `length` property, so line 7 narrows the
   type to array.
2. Now there will be a type error, since `length` no longer distinguishes between
   the two types in the `Video | Video[]` type union.

## 6. Practice Problems: Type Predicates

```ts
type Vehicle = { make: string; model: string; year: number };
type Motorcycle = Vehicle & { type: "motorcycle" };
type Car = Vehicle & { type: "car"; doors: number };
type Bus = Vehicle & { type: "bus"; doors: number };

function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
  return "type" in vehicle && vehicle.type === "car";
}

// Usage
let myCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
  type: "car",
  doors: 4,
};

if (isCar(myCar)) {
  console.log(myCar.doors);
}
```

## 8. Practice Problems: Narrowing with Short Circuiting

1. There will be type errors on lines 14 and 16, since we are accessing parameters (`kind` and `type`) which may not exist on the `vehicle` object. We can fix this by modifying the type guard to check for the presence of the property before accessing it.

```ts
type Vehicle =
  | {
      kind: "car";
      fuelType: "gas" | "electric";
      range: number;
    }
  | {
      type: "bicycle";
      isElectric: boolean;
    };

function getVehicleInfo(vehicle: Vehicle) {
  const info =
    ("kind" in vehicle &&
      vehicle.kind === "car" &&
      `Car with ${vehicle.fuelType} engine and a range of ${vehicle.range} km`) ||
    ("type" in vehicle &&
      vehicle.type === "bicycle" &&
      `Bicycle with electric assist: ${vehicle.isElectric}`);
  console.log(info);
}

getVehicleInfo({ type: "bicycle", isElectric: true });
```

More ideally, the `Vehicle` subtypes should share the same type parameter name (though this may not always be possible):

```ts
type Vehicle =
  | {
      kind: "car";
      fuelType: "gas" | "electric";
      range: number;
    }
  | {
      kind: "bicycle";
      isElectric: boolean;
    };

function getVehicleInfo(vehicle: Vehicle) {
  const info =
    (vehicle.kind === "car" &&
      `Car with ${vehicle.fuelType} engine and a range of ${vehicle.range} km`) ||
    (vehicle.kind === "bicycle" &&
      `Bicycle with electric assist: ${vehicle.isElectric}`);
  console.log(info);
}

getVehicleInfo({ kind: "bicycle", isElectric: true });
```

## 10. Practice Problems: Discriminated Unions

1.

```ts
interface Dog {
  type: "dog";
  name: string;
  age: number;
}

interface Bird {
  type: "bird";
  name: string;
  wingspan: number;
}

type Animal = Dog | Bird;

function describeAnimal(animal: Animal): string {
  switch (animal.type) {
    case "dog":
      return `${animal.name} is a ${animal.age} year${animal.age > 1 ? "s" : ""} old dog.`;
    case "bird":
      return `${animal.name} is a bird with a ${animal.wingspan}cm wingspan.`;
    default:
      const _exhaustivenessCheck: never = animal;
      throw new Error(`Unknown animal type: ${_exhaustivenessCheck}`);
  }
}
```

## 12. Practice Problems: Exhaustiveness Checking

1.

```ts
type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Animal = Elephant | Tiger | Peacock;

function describeAnimal(animal: Animal): string {
  let description: string;

  switch (animal.kind) {
    case "elephant":
      description = `An elephant weighs ${animal.weight} kg.`;
      break;
    case "tiger":
      description = `A tiger can run ${animal.speed} km/h.`;
      break;
    case "peacock":
      description = `A peacock has ${animal.featherLength} cm long feathers.`;
      break;
    default:
      const _exhaustiveCheck: never = animal;
      throw new Error(
        `Invalid Animal type: ${JSON.stringify(_exhaustiveCheck)}`,
      );
  }

  return description;
}
```

2. we get a type error on compile and an error on run:

```ts
type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Giraffe = {
  kind: "giraffe";
  height: number;
};

type Animal = Elephant | Tiger | Peacock | Giraffe;

function describeAnimal(animal: Animal): string {
  let description: string;

  switch (animal.kind) {
    case "elephant":
      description = `An elephant weighs ${animal.weight} kg.`;
      break;
    case "tiger":
      description = `A tiger can run ${animal.speed} km/h.`;
      break;
    case "peacock":
      description = `A peacock has ${animal.featherLength} cm long feathers.`;
      break;
    default:
      const _exhaustiveCheck: never = animal; // Type 'Giraffe' is not assignable to type 'never'. [2322]
      throw new Error(
        `Invalid Animal type: ${JSON.stringify(_exhaustiveCheck)}`,
      );
  }

  return description;
}

const giraffe: Giraffe = { kind: "giraffe", height: 5.5 };
describeAnimal(giraffe); // Error: Invalid Animal Type: {"kind":"giraffe","height":5.5}
```

With the LS solution, we would just get an "Unknown animal: ..." string returned, which I don't like.

## 14. Practice Problems: Uses of Any

1. No type errors, but there will be syntax errors.
2.

```ts
function processInput(input: any) {
  switch (typeof input) {
    case "string":
      console.log(input.toUpperCase());
      break;
    case "number":
      console.log(input.toFixed(2));
      break;
    case "object":
      if ("length" in input) {
        console.log(input.length);
        break;
      }
    default:
      throw new TypeError("Invalid input type");
  }
}

processInput("hello"); // Outputs: HELLO
processInput(42); // Outputs: 42.00
processInput([1, 2, 3]); // Outputs: 3
```

## 16. Practice Problems: Type Soundness

1.

```ts
function isNumber(x: any): x is number {
  return typeof x === "number";
}

// example 1
let x: any = "Launch School";
if (isNumber(x)) {
  const y: number = x;
  console.log(y);
}
```

2.

```ts
function safeGet<T>(arr: T[], i: number): T | undefined {
  if (i < arr.length) {
    return arr[i];
  } else {
    return undefined;
  }
}

const names: string[] = ["John", "Jane"];

const thirdNameUnsafe = names[2];
console.log(thirdNameUnsafe.toUpperCase());

const thirdName = safeGet(names, 2);
console.log(thirdName.toUpperCase()); // 'thirdName' is possibly undefined
```

## 18. Practice Problems: Unknown

1. First code snippet will not raise a type error, since `any` type "turns off" type checking in the compiler.
   Second code snippet will raise a type error, since we cannot access method `toLowerCase` on `unknown` type.
2. No, we cannot assign type `unknown` to any other type. Line 5 attempts to do this.
3.

```ts
function processData(data: unknown): string {
  if (typeof data === "string") return "Hello, " + data;
  if (typeof data === "number") return "Age: " + data;
  throw new TypeError("Invalid data");
}

// Usage
console.log(processData("Alice")); // Should print: "Hello, Alice"
console.log(processData(25)); // Should print: "Age: 25"
console.log(processData(true)); // Should throw an error: "Invalid data"
```
