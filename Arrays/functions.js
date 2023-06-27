// -------------------------- task 1

function createArray(start, end) {
    let newArray = [];
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            newArray.push(i);
        }
    } else {
        for (let a = start; i >= end; i--) {
            newArray.push(i);
        }
    }
    return newArray;
}
let newArray = createArray(4, 9)
console.log(" Task 1 :" + newArray);

// ------------------------ task 2 
function printNumbers(a, b) {
    for (let i = a; i <= b; i++) {
        for (let l = 1; l <= i - a + 1; l++) {
            console.log(i);
        }
    }
}
printNumbers(4, 6);

//------------------------- task 3
function randomArray(k) {
    let arr = [];

    for (let i = 0; i < k; i++) {
        const randomNum = Math.floor(Math.random() * 500) + 1;
        arr.push(randomNum);
    }
    return arr;
}
let result = randomArray(3);
console.log("Task 3: " + result);

// ---------------------- task 4

function compact(arr) {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i]);
        }
    }
    return array;
}
const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log('Task 4 :' + arr2);

//---------------- task 5

function separateDataTypes(array) {
    const result = [];
    let currentType = null;
    let currentSubarray = [];
  
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const itemType = typeof item;
  
      if (itemType === currentType || currentType === null) {
        currentSubarray.push(item);
      } else {
        result.push(currentSubarray);
        currentSubarray = [item];
      }
  
      currentType = itemType;
    }
  
    if (currentSubarray.length > 0) {
      result.push(currentSubarray);
    }
  
    return result;
  }
  
  const array = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  const res = separateDataTypes(array);
  console.log(res);


// -------------- task 6

function calc(a, b, op) {
    let result;

    switch (op) {
        case 1:
            result = a - b;
            break;
        case 2:
            result = a * b;
            break;
        case 3:
            result = a / b;
            break;
        default:
            result = a + b;
            break;
    }

    return result;
}
console.log(calc(10, 5));


// -------------------- task 7

function findUnique(arra) {
    for (let i = 0; i < arra.length; i++) {
        for (let p = i + 1; p < arra.length; i++) {
            if (arra[i] === arra[p]) {
                return false;
            }
        }
    }
    return true;
}
let a = [1, 2, 3, 4, 5];
console.log(findUnique(a));

// ------------ task ⭐⭐⭐

//function create( text ) {
 //   return function (checkText) {
 //        if (text === checkText) {
 ////           return 'true';
 //       } else {
 //           return 'false';
 //       }
 //   }
//}


//const tom = create("pass_for_Tom");
//tom("pass_for_Tom"); 
//tom("pass_for_tom");















