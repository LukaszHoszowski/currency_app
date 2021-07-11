# Javascript basics

- JS is an implementation of ECMA Script standard.
- JS is single threaded (see web workers or nodejs multithreading)
- JS is pure synchronous languagr
- Asynchronous things comes from host (browser, nodejs and other)
- JS is small language
- JS is interpreted language with just in time compilation, can be fast, but not fastest

---

## Variables

```js
var var_name = "value";
let var_name = "value";
const var_name = "value":
```

var:

- hoisted
- functional scope
- can be reainitialized
- can be redeclared

let:

- not hoisted
- block scope
- can be reainitialized
- cannot be redeclared

const:

- not hoisted
- block scope
- cannot reainitialized
- cannot be redeclared

## Hoisting

Moving declaration of var variable, function declaration, class declaration to top of current scope.

```js
console.log(variable);
var variable = 1;

//executing by js:
var variable;
console.log(variable);
variable = 1;
```

## Scope

Visibility of variables and functions

Functional:

```js
function name() {
  // visibile in body of function
}
```

Block:

```js
{
  // visible in pair of curly braces
}

if (1) {
  // block scope
}

for (let i = 0; i < 10; i++) {
  //block and functional scope
}
```

## Conditions

1. If
2. Ternary operator
3. Switch

```js
const condition = true;
const condition2 = true;

if (condition) {
  // executed if true
} else {
  //executed if false
}

if (condition) {
  //executed if true for condition
} else if (condition2) {
  //executed if true for condition2 true and condition is false
} else {
  ///executed if false for condition and condition2
}

condition ? console.log("true") : console.log("false");
```

## Loops

1. for (of, in)
2. while
3. do while
4. forEach
5. map, filter so on

```js
// for(initialization, condition, incrementation){
//computation
//}

for (let i = 0; i < 10; i++) {
  // do smth
}
```

## Functions

1. function declaration
2. anonymous function
3. function expressions
4. arrow functions

function:

```js
//declaration
function name(parameter) {
  //computation
  return "return one thing of any js type";
}
//invoking
name("argument");
```

function expression

```js
//declaration
const add = function(parameter) {
  return "return smth";
};
//invoking
add("argument");
```

Arrow function:

```js
//with one parameter
const add = parameter => {
  return "smth";
};

//without parameters
const add = () => {
  return "smth";
};

//2+ parameters
const add = (parameter1, parameter2) => {
  return "smth";
};

// implicit return when we have one liner
const add = () => "smth";
```
