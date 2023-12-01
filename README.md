# Typescript Fundamentals

## Tsconfig.json and transpilation

- install `npm i -g typescript`
- tsc --init , to generate the robust tsconfig.json
- in order to translate and compile a ts file (Transpile) we use the tsc command.
- in the tsconfig.json we indicate which source to transpile `"rootDir": "./src",`
- the traspiled code in pure javascript is outputed in dist folder/index.js, because we indicated this in tsconfig.json `"outDir": "./dist",`
- `"sourceMap": true,` is useful for debugging

## Tuples

- an array of two elements, in code we can asign more but it loses its purpose
- const tuple: [number, string] = [1, 'Carlos']
- its used to store key, value pairs.

# Enum

- enum Size {
  Small = 2,
  Medium,
  Large,
  }

let MySize = Size.Medium; // this should asign 3, as the compiler will autocomplete
console.log(MySize);

Compilation result

- "use strict";
  var Size;
  (function (Size) {
  Size[Size["Small"] = 2] = "Small";
  Size[Size["Medium"] = 3] = "Medium";
  Size[Size["Large"] = 4] = "Large";
  })(Size || (Size = {}));
  var MySize = Size.Medium;
  console.log(MySize);
  //# sourceMappingURL=index.js.map

#### > Pro tip

- if an enum in declared as a const. the compiler generates a more efficient javascript code.
- const enum Size {
  Small = 2,
  Medium,
  Large,
  }

- "use strict";
  var MySize = 3;
  console.log(MySize);
  //# sourceMappingURL=index.js.map

# Functions

- useful properties in tsconfig
  -- `noUnusedLocals: true` and `noUnusedParameters: true` These make sure a function always is checked for its content being
  -- `noImplicitReturns: true` when a function is void, it returns undefined, unless we say turn on this.
  -- in order to handle optional params, a good practice is to use a default value to be used in case not passed down the function.

# Objects

- when declaring objects, we can use readonly for values we dont want to be modified
- we can define functions structures like: (date: Date) => void
