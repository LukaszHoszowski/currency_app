# Object

- core thing in Javascript

```js
const newObj = {
  name: "Pawel",
  age: 34,
  getName: () => {
    return newObj.name;
  }
};

newObj.name; // "Pawel"
newObj.getName(); // "Pawel"
```

## Object copying

- shallow copy (default)

```js
Object.assign({}, obj);
```

- deep copy

```js
// tricky way

const newObj = JSON.parse(JSON.stringify(obj));
```

## Object descriptors

```js
const myObject = {
  a: 2
};

Object.getOwnPropertyDescriptor(myObject, "a");
```

Descriptors:

1. configurable: true
   - can change configuration of object
   - set false can be one time
   - false lock delete statement (delet obj.a)
2. enumerable: true
   - visible in iterators
3. value: 2
   - value
4. writable: true
   - can be changed

```js
var myObject = {};

// add or remove property if configurable is true
Object.defineProperty(myObject, "a", {
  value: 2,
  writable: true,
  configurable: true,
  enumerable: true
});

myObject.a;
```

1. Shallow No Modifiability:

- writable: false, configurable: false

2. Extension blocking:

- Object.preventExtensions(myObject);

3. Packing:

- Object.seal() (preventExtensions and configurable: false)

4. Freezing:

- Object.freeze() (Object.seal() and configurable: false)

5. Deep freezing:
   - recursive Object.freeze()
