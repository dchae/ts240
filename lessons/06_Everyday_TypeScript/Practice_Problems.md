# TS240 > Lesson 6 > Practice Problems

## 3. Practice Problems: Extracting Shared Properties to a Common Type

1.

```ts
interface Colored {
  color: string;
}

interface Rectangle extends Colored {
  type: "rectangle";
  length: number;
  width: number;
}

interface Circle extends Colored {
  type: "circle";
  radius: number;
  color: string;
}

type Shape = Rectangle | Circle;

function displayShapeInfo(shape: Shape): string {
  if (shape.type === "circle")
    return `Circle has color of ${shape.color}, radius of ${shape.radius}`;
  if (shape.type === "rectangle")
    return `Rectangle has color of ${shape.color}, length of ${shape.length}, width of ${shape.width}.`;
  else return "Invalid shape";
}
```

## 5. Practice Problems: Object Spreading

1. No type error will be thrown, since the resulting object will have the value:

```ts
const combined = {
  name: "John",
  age: 30,
  street: "123 Main St",
  city: "Tokyo",
  country: "Japan",
  phone: "555-1234",
};
```

which matches the shape of the `Combined` type.

## 7. Practice Problems: Defining Options types

1. The output will be `0`.
2.

```ts
type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

function formatName({ firstName, lastName, title }: NameOptions): string {
  firstName ??= "John";
  lastName ??= "Doe";
  return [title, firstName, lastName].filter(Boolean).join(" ");
}

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
```

3.

```ts
type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

function formatName({
  firstName = "John",
  lastName = "Doe",
  title,
}: NameOptions): string {
  return [title, firstName, lastName].filter(Boolean).join(" ");
}

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
```

## 10. Practice Problems: Working with Exceptions

1.

```ts
function sqrt(x: number): number {
  if (x < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(x);
}

function safeSqrt(x: number): number {
  try {
    return sqrt(x);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    } else {
      throw e;
    }
    return -1;
  }
}

console.log(safeSqrt(4));
console.log(safeSqrt(-1));
```

## 12. Practice Problems: Working with Promises: Async / await

1.

```ts
function getData(url: string): Promise<void> {
  return fetch(url)
    .then((response: Response): Promise<object> => response.json())
    .then((data: object): void => console.log(data));
}

// async/await version
async function getData(url: string): Promise<void> {
  const response: Response = await fetch(url);
  const data: object = await response.json();
  console.log(data);
}
```

## 14. Practice Problems: Rejected Promises

1.

```ts
async function getData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "An unknown error occurred";
    console.error(msg);
  }
}
```

## 16. Practice Problems: Pick and Omit

1. There will be a type error on line 7, since the constraining type for the pick utility is constrained to the keys of the object. `"name1"` is not a key of the type `User`. For `Omit`, the constraining type can be anything, so there is no error on line 8.

## 18. Practice Problems: ReturnType and Parameters

1. Yes, there will be errors on both lines 5 and 6, since we are passing in the function itself to the `Parameters` and `ReturnType` utility types, instead of the function type.

Fixed version:

```ts
function addNumbers(a: number, b: number): number {
  return a + b;
}

type AddNumbersFunction = typeof addNumbers;
type AddNumbersParams = Parameters<AddNumbersFunction>;
type AddNumbersReturnType = ReturnType<AddNumbersFunction>;
```

## 20. Practice Problems: Partial

1.

```ts
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    // Let's just simply assume product id is same as the index of the product in the products array
    id: 0,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

type UpdateableProductFields = Partial<Omit<Product, "id">>;

function updateProduct(
  productId: number,
  updatedValues: UpdateableProductFields,
): void {
  const product = products[productId];
  if (product) {
    products[productId] = { ...product, ...updatedValues };
  } else {
    console.log("Product not found");
  }
}

console.log(products);

updateProduct(0, {
  name: "Updated Product Name",
  price: 99.99,
});

console.log(products);
```

## 22. Practice Problems: Object Values at Runtime

1. This code will not throw an error, since type assertions to any essentially tell the TS compiler to ignore any typing rules.
   The output of the code will be:

```sh
light
["email", "push", "sms"]
```
