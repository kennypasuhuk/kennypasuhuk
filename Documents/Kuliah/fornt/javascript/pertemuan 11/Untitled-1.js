// import helloWorld, { fullName as namaLengkap, angka, john } from "./utils.js";
// import sayGreetings from "./sayGreetings.js";

// console.log(namaLengkap);
// console.log(angka);
// console.log(john);
// helloWorld();
// sayGreetings();

//ASYNCHRONOUS JS

//synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

//asynchronous -> multi thread -> non blocking

// Ada 2 macam async:
// 1. Parallel
// setTimeout(() => {
//   console.log("proses 1");
// }, 3000);
// console.log("Proses 2");
// setTimeout(() => {
//   console.log("Proses 3");
// }, 4000);
// console.log("Proses 4");

// 2. Concurrent
// 2.a Callback
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

// 2.b Promise

// Buat promise
let condition = false;
const newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

// Pakai promise
// 1. then - catch (ES6)
// newPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error));

//2. async - await (ES7)
// async-await digunakan pada fungsi
const consumePromise = async () => {
  try {
    let result = await newPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
consumePromise();



let fullName = "John Doe";

let numbers = [1, 2, 3, 4, 5];

let john = {
  fullName: "John Doe",
  age: 33,
  address: "Manado",
};

let hello = () => {
  console.log("Hello Module");
};

export { fullName, numbers as angka, john };
export default hello;


const sayGreetings = () => {
  console.log("Hello World");
};

export default sayGreetings;

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Module & AsyncJS</title>
    <script type="module" src="index.js"></script>
  </head>
  <body></body>
</html>