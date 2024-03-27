//setAlarm() will use setTimeout() which is being provided with a callback function and a delay given in milliseconds
// const output = document.querySelector("#output");
// const button = document.querySelector("#set-alarm");

// function setAlarm() {
//   setTimeout(() => {
//     output.textContent = "Wake up!";
//   }, 1000);
// }

// button.addEventListener("click", setAlarm);

//implementing the alarm() function
// function alarm(person, delay) {
//     return new Promise((resolve, reject) => {
//       if (delay < 0) {
//         throw new Error("Alarm delay must not be negative");
//       }
//       setTimeout(() => {
//         resolve(`Wake up, ${person}!`);
//       }, delay);
//     });
//   }
  
// console.log(alarm("Kristijan", 2000));

// using the alarm() API:
const name1 = document.querySelector("#name1");
const delay1 = document.querySelector("#delay1");
const button1 = document.querySelector("#set-alarm1");
const output1 = document.querySelector("#output1");

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       throw new Error("Alarm delay must not be negative");
//     }
//     setTimeout(() => {
//       resolve(`Wake up, ${person}!`);
//     }, delay);
//   });
// }

// button1.addEventListener("click", () => {
//   alarm(name1.value, delay1.value)
//     .then((message) => (output1.textContent = message))
//     .catch((error) => (output1.textContent = `Couldn't set alarm: ${error}`));
// });

// using async and await with the alarm() API:
function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
        throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
        resolve(`Wake up, ${person}!`);
        }, delay);
    });
}
  
button1.addEventListener("click", async () => {
    try {
        const message = await alarm(name1.value, delay1.value);
        output1.textContent = message;
    } catch (error) {
        output1.textContent = `Couldn't set alarm: ${error}`;
    }
});
