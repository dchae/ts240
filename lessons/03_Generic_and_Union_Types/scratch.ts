type User<T> = {
  name: string;
  age: T;
};

const user1: User<number> = { name: "John", age: 25 };
const user2: User<string> = { name: "Jane", age: "thirty" };

user1.age = "twenty-five"; // Type 'string' is not assignable to type 'number'.
