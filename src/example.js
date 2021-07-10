// const interval = setInterval(() => {
//   console.log('xd');
// }, 2000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

// minimum 2000 ms

// Prawidlowe uzycie funkcji
// const x = () => console.log('4')
// setTimeout(x, 100);

// console.log(1)
// setTimeout(() => console.log(2), 100)
// console.log(3);

// function handleClick() {
//     console.log('it works');
// };

// document.body.addEventListener("click", handleClick);

// const box = document.querySelector("#anim");
// box.style.left = "0px";



// setInterval(() => {
//     let diff = parseInt(box.style.left);
//     box.style.left = diff + 1 + "px";
//     if (diff > 200) {
//         setInterval(() => {
//             let diff = parseInt(box.style.top)
//             box.style.top = diff + 1 + "px";
//         }, 200);
//     }
// }, 100);

// Callback hell

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//       setTimeout(() => {
//         console.log(4);
//         setTimeout(() => {
//           console.log(5);
//           setTimeout(() => {
//             console.log(6);
//           }, 300);
//         }, 300);
//       }, 300);
//     }, 300);
//   }, 200);
// }, 100);

//Promise 

// const bill = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ok');
//     }, 2000);

//     setTimeout(() => {
//         reject("not ok")
//     }, 1001);
//     });

// bill
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((result) => {
//         console.log(result);
//     })
//     .finally(() => {
//         console.log("always");
//     });

//Generatory

// function* gen() {
//     console.log(1);
//     yield 2;
//     console.log(3);
//     yield 4;
//     console.log(4);
// };

// const g = gen();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// function* gen() {
//     let i = 0;
//     while (i < 10) {
//         yield i;
//         i++;
//     };
// };

// const g = gen()
// console.log(g.next())
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// function* gen(idx) {
//     let a = idx;
//     let b = yield a;
//     yield b + 10
// }

// const g = gen(4)
// console.log(g.next())

// const result = fetch('https://jsonplaceholder.typicode.com/todos/');
// result.then((res) => res.json()).then((r) => console.log(r));

// Async

// function* getFutureData() {
//   const result = yield fetch('https://jsonplaceholder.typicode.com/todos/2');
//   console.log(result);
// }
// const res = getFutureData();
// res
//   .next()
//   .value.then((data) => data.json())
//   .then((data) => res.next(data));

// async function getFutureData() {
//     const result = await fetch(
//         'https://jsonplaceholder.typicode.com/todos/2')
//         .then((r) => r.json());
//          console.log(result);
// };

// getFutureData();

// const getFutureData = async () => {
//     const result = await fetch(
//         'https://jsonplaceholder.typicode.com/todos/2')
//         .then((r) => r.json());
//     console.log(result);
// };

// getFutureData();

// function doAwesomeThings() {
//   Promise.resolve().then(() => console.log(1));
//   setTimeout(() => console.log(2));
//   Promise.resolve().then(() => console.log(3));
//   console.log(4);
// }
// doAwesomeThings();
// console.log(5);

// kolejnosc 4 5 1 3 2