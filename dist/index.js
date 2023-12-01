"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("\n### Authocomplete assignment \n");
let MySize = 3;
console.log(MySize);
function calculateTax(amount, year = 2022) {
    if (year < 2022)
        return amount * 1.2;
    return amount * 1.3;
}
calculateTax(23, 2023);
let employee;
console.log("\n### checkNulleist \n");
function checkNulleist(foo, bar) {
    let x = foo !== null && foo !== void 0 ? foo : bar();
    return null;
}
checkNulleist(undefined, () => console.log("hello"));
class Account {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            throw new Error("Invalid value");
        this._balance = value;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
}
console.log("\n### Index signature property \n");
class SeatAssigment {
}
let seat = new SeatAssigment();
seat.A3 = "Carlos Alvarado";
seat["A4"] = "Valentina Rico";
class Ride {
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
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
console.log("\n### Inheritance \n");
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        return console.log("walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("taking a test");
        return null;
    }
}
const person = new Person("Person FirstName", "LastName");
const student = new Student(2, "Student FirstName", "LastName");
console.log(person.fullName);
console.log(person.walk());
console.log(student.firstName);
console.log(student.walk());
console.log(student.takeTest());
console.log("\n### Override \n");
class Teacher extends Person {
    get fullName() {
        return `Profesor ${super.fullName}`;
    }
}
let teacher = new Teacher("Carlos", "Alvarado");
console.log("Teacher fullName", teacher.fullName);
function logPeoplesName(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
logPeoplesName([
    new Student(1, "Carlos", "Alvarado"),
    new Teacher("John", "Smith"),
]);
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() { }
    removeEvent() { }
}
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair1 = new KeyValuePair("1", "Carlos");
let pair2 = new KeyValuePair("1", "Carlos");
let pair3 = new KeyValuePair(1, "Carlos");
pair1.key.toLowerCase();
pair3.key.toExponential();
function wrapInArray(value) {
    return [value];
}
let funcNumbersAsString = wrapInArray("1");
let funcNumbersAsNumber = wrapInArray(1);
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbersAsString = ArrayUtils.wrapInArray("1");
let numbersAsNumber = ArrayUtils.wrapInArray(1);
function fetch(url) {
    return { data: null, error: null };
}
function echo1(value) {
    return value;
}
function echo2(value) {
    return value;
}
function echo3(value) {
    return value;
}
function echo4(value) {
    return value;
}
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let storeKeyOfTest = new Store();
storeKeyOfTest.add({ name: "a", price: 11, category: "generic" });
storeKeyOfTest.find("name", "a");
storeKeyOfTest.find("price", 1);
class CompressibleStore extends Store {
    compress() { }
}
let store1 = new CompressibleStore();
store1.add;
store1.compress;
class SearchableStore extends Store {
    findSearchableStore(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return this._objects.filter((obj) => obj.category === category);
    }
}
let readOnlyProduct = {
    name: "name",
    price: 11,
    category: "category",
};
let product;
function Component(options) {
    return (constructor) => {
        console.log("Component decorator called");
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertDOM = () => {
            console.log("Inserting the component in the DOM");
        };
        constructor.prototype.options = options;
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: "#element-id" })
], ProfileComponent);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
class Transaction {
    constructor(_accountHolder) {
        this._accountHolder = _accountHolder;
    }
    static record(message) {
        console.log("record saved", message);
    }
    get accountHolder() {
        return this._accountHolder;
    }
}
__decorate([
    Capitalize
], Transaction.prototype, "accountHolder", null);
__decorate([
    Log
], Transaction, "record", null);
console.log("\n Method Decorator\n");
Transaction.record("Hi");
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof result === "string" ? result.toUpperCase() : result;
    };
}
console.log("\n Accessor Decorator\n");
const transaction1 = new Transaction("Carlos Alvarado");
console.log(transaction1.accountHolder);
console.log("\n Property Decorator\n");
class UserAccount {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], UserAccount.prototype, "password", void 0);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            set(newValue) {
                if (newValue.length < length) {
                    throw new Error(`${propertyName} should be at least ${length} characters`);
                }
                value = newValue;
            },
            get() {
                return value;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
let user = new UserAccount("1234");
console.log(user.password);
//# sourceMappingURL=index.js.map