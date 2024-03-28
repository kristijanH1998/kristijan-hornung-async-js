//synchronous prime number generator:
// function generatePrimes(quota) {
//     function isPrime(n) {
//       for (let c = 2; c <= Math.sqrt(n); ++c) {
//         if (n % c === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
  
//     const primes = [];
//     const maximum = 1000000;
  
//     while (primes.length < quota) {
//       const candidate = Math.floor(Math.random() * (maximum + 1));
//       if (isPrime(candidate)) {
//         primes.push(candidate);
//       }
//     }
  
//     return primes;
//   }
  
//   document.querySelector("#generate").addEventListener("click", () => {
//     const quota = document.querySelector("#quota").value;
//     const primes = generatePrimes(quota);
//     document.querySelector("#output").textContent =
//       `Finished generating ${quota} primes!`;
//   });
  
//   document.querySelector("#reload").addEventListener("click", () => {
//     document.querySelector("#user-input").value =
//       'Try typing in here immediately after pressing "Generate primes"';
//     document.location.reload();
//   });




// optimized prime generator code using a Worker:
// Create a new worker, giving it the code in "generate.js"
const worker = new Worker("./generate.js");

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener("message", (message) => {
  document.querySelector("#output").textContent =
    `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});

  