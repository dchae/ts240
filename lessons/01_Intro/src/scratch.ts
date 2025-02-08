function concatenate(a: string | number, b: string | number): string | number {
  return a + b;
}

const result: string = concatenate("Hello", "World") as string;
const numericResult: number = concatenate(1, 2) as number;

console.log(result);
console.log(numericResult);
