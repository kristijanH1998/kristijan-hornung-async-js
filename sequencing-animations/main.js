const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");


//Promise version of 'callback hell': 
// const animation1 = alice1.animate(aliceTumbling, aliceTiming);
// const promise1 = animation1.finished;
// promise1.then(() => {
//   const animation2 = alice2.animate(aliceTumbling, aliceTiming);
//   const promise2 = animation2.finished;
//   promise2.then(() => {
//     alice3.animate(aliceTumbling, aliceTiming);
//   });
// });


//Promise chaining version:
// alice1.animate(aliceTumbling, aliceTiming).finished
//   .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
//   .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
//   .then(() => console.log("Promise chain success!"));


//async and await version:
async function rotateAlices() {
  try {
    const animation1 = await alice1.animate(aliceTumbling, aliceTiming).finished;
    const animation2 = await alice2.animate(aliceTumbling, aliceTiming).finished;
    const animation3 = await alice3.animate(aliceTumbling, aliceTiming).finished;
  } catch (error) {
    console.error(`Could not rotate Alices: ${error}`);
  }
}

rotateAlices();