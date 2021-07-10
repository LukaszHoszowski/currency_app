# Closures

Access to variable from outside of current scope.

## Example with getting access to closure

```js
function sentence(city) {
  return function fullSentence(name) {
    return `My name is ${name} and I am from ${city}`;
  };
}

const sen = sentence("Krakow");

console.log(sen); // function declaration

sen("Pawel");
sen("Janusz");
```

## Example with modyfing closure

```js
function gen(arr) {
  let i = 0;
  return function next() {
    const result = arr[i];
    i++;
    return result;
  };
}

const next = gen([1, 2, 3, 4]);
console.log(next()); // 1
console.log(next()); // 2
```

## Important things:

- with closures we can achieve persistence like in generators
- closures are saved in function object

# Generators

- lazy evaluated (computation is needed on demand)
- really performant
- best for manage streams (stream - data in time)
- yield - superpower return (yield freeze generator not finish)
- easiest way to achieve persistence
- most popular library is rxjs (reactive extension for javascript)

```js
function* gen() {
  const a = 10;
  const b = yield 20;
  yield b;
}

// instance of generator
const g = gen();

// get value from generator
g.next(); // {value: 10, done: false}

// put value to generator
g.next(666); // {value: 666, done: false}

// finish generator (no more yields)
g.next(); // {value: undefined, done: true}
```

# Async/Await

- synchronous way to write asynchronous code
- just syntactic sugar for generators and promises
- recommended way to write asynchronous code in js

## Example without async/await (generator and promise mix)

```js
function* gen() {
  const data = yield fetch("some url");
  console.log(data);
}

const futureData = gen();
const pr = futureData.next().value;
pr.then(response => futureData.next(response));
```

## Above example with async/await

```js
// asterix is async now
async function gen() {
  const data = await fetch("some url"); // await have to be before promise or promise based feature
  console.log(data);
}
```
