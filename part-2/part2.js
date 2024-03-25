//example 1: promise's .then() method with the promise handler sent to it
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);
  
  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });
  
  console.log("Started request…");
  

  //example 2 - nested .then() methods with handlers = similar to 'callback hell', causes lots of indentation
  //that makes code difficult to understand
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise2.then((response) => {
    const jsonPromise = response.json();
    console.log(jsonPromise); //log second promise (the one received from .json() function)
    jsonPromise.then((data) => {
      console.log(data[0].name);
      // console.log(data[3]);
    });
  });

  //example 3: promise chaining
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise3
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].name);
    });

//example 4: checking the status code of server's response
const fetchPromise4 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise4
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[1].name);
    });
  
  
  