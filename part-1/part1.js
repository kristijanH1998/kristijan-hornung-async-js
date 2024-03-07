//Synchronous programming example
const name = "Miriam";
//const greeting = `Hello, my name is ${name}!`;
//console.log(greeting);

function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
}
const greeting = makeGreeting(name);
console.log(greeting);

//Long synchronous example
const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
    //start measuring execution time to generate primes
    console.time("generatePrimes");
    const primes = generatePrimes(quota.value);
    //stop measuring execution time to generate primes and print time to console; measured at ~5200ms == 5.2s
    console.timeEnd("generatePrimes");
    output.textContent = `Finished generating ${quota.value} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
    document.location.reload();
});

//Sending HTTP request to remote server using XMLHttpRequest object
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
    //let's test whether execution time of generatePrimes() will be any different now that HTTP request is being
    //sent in the meantime; if the time is ~5s, that means that primes are being generated in a separate thread
    //from the HTTP request thread, hinting at asynchronous behavior of the app
    console.time("generatePrimes");
    
    log.textContent = "";
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
    });

    xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
    );
    xhr.send();
    log.textContent = `${log.textContent}Started XHR request\n`;
    
    generatePrimes(quota.value);
    console.timeEnd("generatePrimes");
    //as we see, it takes again about 5s to generate the primes
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});

function doStep1(init) {
    return init + 1;
  }
  
  function doStep2(init) {
    return init + 2;
  }
  
  function doStep3(init) {
    return init + 3;
  }
  
  function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
  }
  
  doOperation();
 
  function doStep1_2(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2_2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3_2(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation2() {
    doStep1_2(0, (result1) => {
      doStep2_2(result1, (result2) => {
        doStep3_2(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  
  doOperation2();
  