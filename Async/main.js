// ------------------------- task 1
function getPromise(message, delay) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(message);
      }, delay);
    });
  }
  
  getPromise("test promise", 2000).then(function(data) {
    console.log(data);
  });

  // ------------------------ task 2

  function calcArrProduct(arr) {
    return new Promise( function(resolve, reject) {
      let res = 1;
      for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {
          res *= arr[i];
        }
        else {
          reject ("Error! Incorrect array!");
        }
      }
      resolve(res)
    });
  }
  
  calcArrProduct([3,4,5]).then(result => console.log(result)); 
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));


//--------------------------- task 3


function checkNumber() {
  return new Promise(function (resolve, reject) {
    let number = prompt("Введіть число:");

    if (isNaN(number)) {
      reject(new Error("Введено не число!"));
    } else {
      resolve(Number(number));
    }
  });
}

checkNumber()
  .catch(function (error) {
    console.error(error.message);
    return checkNumber();
  })
  .then(function (result) {
    console.log("Ви ввели число:", result);
  });