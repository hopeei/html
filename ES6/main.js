// ------------------------------ task 1
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

let { first: f, third: x, } = names;
let fifth = "Name №5";

console.log(f);
console.log(x);
console.log(fifth);

// ------------------------------ task 2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;

console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);


// ------------------------------ task 3

function mul(...parametrs) {
    let result = 1;
    let number = false;

    for (let parametr of parametrs) {
        if (typeof parametr === "number") {
            result *= parametr;
            number = true;
        }
    }
    return number ? result : 0;
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

// ------------------------------ task 4
function mapBuilder(keysArray, valuesArray) {
    const resMap = new Map();

    for (let i = 0; i < keysArray.length; i++) {
        resMap.set(keysArray[i], valuesArray[i]);
    }
    return resMap;
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size);
console.log(map.get(2));

// ------------------------------ task 5

var arr = [];

for (let i = 0; i <= 2; i++) {
   arr[i] = function () {
      console.log(i);
   };
}

arr[0](); 
arr[arr.length - 1](); 