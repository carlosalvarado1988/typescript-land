//Authocomplete assignment
console.log("\n### Authocomplete assignment \n");
const enum Size {
  Small = 2,
  Medium,
  Large,
}

let MySize = Size.Medium; // this should asign 3, as the compiler will autocomplete
console.log(MySize);

// Functions
function calculateTax(amount: number, year: number = 2022): number {
  if (year < 2022) return amount * 1.2;
  return amount * 1.3;
}
calculateTax(23, 2023);

// Objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

//Authocomplete assignment
console.log("\n### checkNulleist \n");

function checkNulleist(foo: any, bar: () => void): null {
  //   let x = foo !== null && foo !== undefined ? foo : bar();
  let x = foo ?? bar();
  return null;
}
checkNulleist(undefined, () => console.log("hello"));

// OOP classes
class Account {
  // parameter properties, access control keywords
  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number
  ) {}

  // getter
  get balance(): number {
    return this._balance;
  }

  // setter
  set balance(value: number) {
    if (value <= 0) throw new Error("Invalid value");
    this._balance = value;
  }

  deposit(amount: number) {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
}

// Index signature property
console.log("\n### Index signature property \n");
class SeatAssigment {
  [Seat: string]: string;
}

// class object to dynamically asign key, value pairs.
let seat = new SeatAssigment();
seat.A3 = "Carlos Alvarado";
seat["A4"] = "Valentina Rico";

// Uber class to keep track of rides across instances.
class Ride {
  private static _activeRides = 0;

  static get activeRides() {
    return Ride._activeRides;
  }

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
}
let ride1 = new Ride();
ride1.start();
//
let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides); // 2

// inheritance
console.log("\n### Inheritance \n");

class Person {
  constructor(public firstName: string, public lastName: string) {}

  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    return console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest(): null {
    console.log("taking a test");
    return null;
  }
}
const person = new Person("Person FirstName", "LastName");
const student = new Student(2, "Student FirstName", "LastName");

console.log(person.fullName);
console.log(person.walk());

console.log(student.firstName); // inherited property
console.log(student.walk()); // // inherited method
console.log(student.takeTest());

//Override
console.log("\n### Override \n");
class Teacher extends Person {
  override get fullName(): string {
    return `Profesor ${super.fullName}`;
  }
}

let teacher = new Teacher("Carlos", "Alvarado");
console.log("Teacher fullName", teacher.fullName);

// Polymorfishm: We can access the public property fullName that belongs to Person obj
function logPeoplesName(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

// with Polymorfishm, the Person obj take multiple forms.
// each obj have a slight different implementation of fullName.
logPeoplesName([
  new Student(1, "Carlos", "Alvarado"),
  new Teacher("John", "Smith"),
]);

// logs:
// Carlos Alvarado
// Professor John Smith

// this allows to change obj class logic and do not affect this fuction.

// Interfaces and abstract classes
// think of the example of a Calendar
// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

// redifined
interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}
// inheritance with Interfaces
interface CloudCalendar extends Calendar {
  sync(): void;
}

// Implements: when we use the structure of an Interface into a class.
class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  public addEvent() {}
  public removeEvent() {}
}

// Generic classes
// as C++, Generics in Typescript is like Templates
// is usual to see <T>, like an argument of any type to be passed in.
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair1 = new KeyValuePair<string, string>("1", "Carlos"); // key and value are strings.
let pair2 = new KeyValuePair("1", "Carlos"); // types are inferred by ts compiler (string, string)
let pair3 = new KeyValuePair(1, "Carlos"); // types are inferred by ts compiler (number, string)
// with this we have intellicense
pair1.key.toLowerCase(); // being string
pair3.key.toExponential(); // being a number

// Generic function
// The same way we declare T for the type as an argument
// In a stand-alone function
function wrapInArray<T>(value: T): T[] {
  return [value];
}
let funcNumbersAsString = wrapInArray("1");
let funcNumbersAsNumber = wrapInArray(1);

// In a class Method
class ArrayUtils {
  static wrapInArray<T>(value: T): T[] {
    return [value];
  }
}
let numbersAsString = ArrayUtils.wrapInArray("1");
let numbersAsNumber = ArrayUtils.wrapInArray(1);

// Generic Interfaces

// Imagine having two endpoints, we expect to get different data.
// https://mysite.com/users
// https://mysite.com/products

// now we declare a generic Result Interface (like axios)
interface Result<T> {
  data: T | null;
  error: string | null;
}

// We use T to refer to the generic Type/Interface
function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

/* commented section so it compiles

// now in the example lets define 2 models for response.
interface User {
  name: string;
  email: string;
}

interface Product {
  title: string;
}

// now copling the model interfaces to the generic Result Interface
let unknownType = fetch("url-1"); // Result<unknown>
unknownType.data; // intellicense can not access to properties.
let users = fetch<User>("url-for-users"); // Result<User>
users.data?.email; // now intellicense can access the properties to the User
let products = fetch<Product>("url-for-product"); // Result<Product>
products.data?.title; // now intellicense can access the properties to the Product
*/

// Generics constrains
// in this example we want to limit the types of the generic T.
// there are many ways
function echo1<T extends string | number>(value: T): T {
  return value;
}
function echo2<T extends { name: string }>(value: T): T {
  return value;
}
function echo3<T extends Person>(value: T): T {
  return value;
}
function echo4<T extends Teacher>(value: T): T {
  return value;
}
// we could set the value to the specific but here we reuse the T declaration in the function

// Extending the generics Classes

// lets see 3 ways to extend for different purposes.
// firts lets create a Product Interface
interface Product {
  name: string;
  price: number;
  category: string;
}

// lets define a Store object as a class
// it can store anything, so use a Generic Type (T)
class Store<T> {
  // we don't use construct here because we initialize immediately, internally not from a param in the instance
  // we dont want it to be modified from outside, so its private and _
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
  // if T is Product
  // keyof T = 'name' | 'price' | 'category'
  find(property: keyof T, value: string | number): T | undefined {
    // a compilation error here: "obj[property] === value"
    // index signature property helps to dinamically add properties.
    // in this case we dont want that, we want to find especific existing properties
    // so we changed the type: "property: string" to "property: keyof T"
    return this._objects.find((obj) => obj[property] === value);
  }
}

// a keyOf implementation
let storeKeyOfTest = new Store<Product>();
storeKeyOfTest.add({ name: "a", price: 11, category: "generic" });
storeKeyOfTest.find("name", "a");
storeKeyOfTest.find("price", 1);
// storeKeyOfTest.find("non-existing-property", 1); // it will fail at compile as it does not match

// the 3 different scenarios for T extend.

// 1. PASS ON the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}
let store1 = new CompressibleStore<Product>();
store1.add; // from Store class
store1.compress; // from CompressibleStore class

// 2. RESTRICT the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  // I gave a new name (not override find from Store), because their parameters are not equivelent
  findSearchableStore(name: string): T | undefined {
    // here the "obj.name === name" throw a compilation error because T didnt have name
    // we had to explicitly extends to include "{ name: string }" as part of T.
    return this._objects.find((obj) => obj.name === name);
  }
}

// 3. FIX or TERMINATING the generic parameter
class ProductStore extends Store<Product> {
  // in this scenario, the parent Store type "Product", inherits the type to the child ProductStore
  // IntelliSense will target properties from Product type
  filterByCategory(category: string): Product[] {
    return this._objects.filter((obj) => obj.category === category);
  }
}

// Type mapping - for understanding
// looking at the interface Product
// interface Product {
//   name: string;
//   price: number;
//   category: string;
// }

// we can dinamically declare a readonly, optional, nulleist, etc type of objet without repeating.
type ReadOnlyProduct = {
  // Index signature
  // keyof
  //   [Property in keyof Product]: Product[Property];
  readonly [K in keyof Product]: Product[K];
};

// Now one example,
let readOnlyProduct: ReadOnlyProduct = {
  name: "name",
  price: 11,
  category: "category",
};
// readOnlyProduct.name = "new name"; // throws a compilation error: Cannot assign to 'name' because it is a read-only property.

// The same way it can be more flexible with generic Interface
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};
// because this is very useful, typescript created a utils lib with similar types
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// A Product without a name
let product: Omit<Product, "name">;
// this instance no longer has name property for intelliSense

// DECORATORS
// Parameterized decorator
// an example similar to what Angular does.

type ComponentOptions = {
  selector: string;
};

// Decorator factory
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    // this are properties that enhance the Function/Class/Element passed
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertDOM = () => {
      console.log("Inserting the component in the DOM");
    };
    // here we do something with the value passed
    constructor.prototype.options = options;
  };
}

// Using the decorator
@Component({ selector: "#element-id" })
class ProfileComponent {}

// Note if we were to add more than 1 decorator, they are called bottom-up direction
// like in math, the first function called is the inner function with the class. -> f(g(x))
// Example
// @Component({ selector: "#element-id" })
// @AnotherDecorator()
// class ProfileComponent {}
// the output: first called is AnotherDecorator, then Component.

// method decorator

// https://www.typescriptlang.org/docs/handbook/decorators.html
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  // store the original method
  // use type assertion to activate intellisense about function methods.
  // descriptor is the class or element passed
  // .value refers to the method --> .get refers to a getter
  const original = descriptor.value as Function;
  // descriptor.value is the method passed
  // here the function param collects the args from the original method
  descriptor.value = function (...args: any) {
    // here we enhance the method.
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}

class Transaction {
  constructor(private _accountHolder: string) {}
  @Log
  static record(message: string) {
    console.log("record saved", message);
  }

  @Capitalize
  get accountHolder() {
    return this._accountHolder;
  }
}

// new Transaction().record("Hi"); to avoid the need to instansiate, use static as part of the class
console.log("\n Method Decorator\n");
Transaction.record("Hi");

// Accessor Decorator (Getter/Setter)
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // here we use get instead of value, get is for getters.
  const original = descriptor.get as Function;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

console.log("\n Accessor Decorator\n");
const transaction1 = new Transaction("Carlos Alvarado");
console.log(transaction1.accountHolder); // CARLOS ALVARADO

console.log("\n Property Decorator\n");
// this can be used to validate parameters and catch errors at the compile time

class UserAccount {
  // we explicitly create the param in the class to add the decorator.
  // otherwise, we use constructor(public password: string)
  @MinLength(4)
  password: string;

  // we give a value to the property
  constructor(password: string) {
    this.password = password;
  }
}

// you define the @MinLength decorator.

function MinLength(length: number) {
  // property decorator is a bit different.
  return (target: any, propertyName: string) => {
    let value: string; // here we will store the value if valid

    // instead of having already the descriptor: PropertyDescriptor.

    // we are going to define a Descriptor object
    const descriptor: PropertyDescriptor = {
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(
            `${propertyName} should be at least ${length} characters`
          );
        }
        value = newValue;
      },
      get() {
        return value;
      },
    };

    // now we assign the descriptor to the propertyName
    Object.defineProperty(target, propertyName, descriptor);
  };
}

// testing.
let user = new UserAccount("1234"); // it compiles and it works
console.log(user.password); // 1234
// let user2 = new UserAccount("123"); // it throws the error at compilation time
