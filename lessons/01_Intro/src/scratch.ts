function getProperty(obj: object, key: string) {
  return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
}

const obj = {
  name: "John",
  age: 30,
};

const x = getProperty(obj, "name");
const y = getProperty(obj, "age");

console.log(x);
console.log(y);
