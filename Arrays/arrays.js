//------------------------ task 1
const a = 5;
const b = 4;
const c = 3;
const check = a < b && b < c;
console.log(check);

// -------------------------task 2
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1); 
console.log(typeof res1); 

let res2 = (x < y) + "";
console.log(res2); 
console.log(typeof res2); 

let res3 = !!(x < y);
console.log(res3); 
console.log(typeof res3); 

let res4 = x / "y";
console.log(res4); 
console.log(typeof res4); 

// -------------------------task 3 

const isAdult = prompt("You are of legal age? ");
if (isAdult >= 18 ) {
    alert("You have reached 18 years of age");
} else {
    alert("You are too young");
}

// ------------------------task 4
const m = parseFloat(prompt("Enter the first party: "));
const p = parseFloat(prompt("Enter the second party: "));
const v = parseFloat(prompt("Enter the third party: "));
if (isNaN(m) || isNaN(p) || isNaN(v) || m <= 0 || p <= 0 || v <= 0) {
    alert("Incorrect data");
  } else {
  const isSquare = m * p * v;
  console.log(`Square: ${isSquare.toFixed(3)}`);
}
if ((p**2 + m**2) < v**2) {
    console.log("A triangle is right-angled");
} else {
    console.log("A triangle is not right-angled");
}
 //------------------ task 5
 // if else
 const nowHour = new Date().getHours();
 if(nowHour >= 23 || nowHour <5) {
    alert("Доброї ночі!")
 } else if (nowHour >= 5 && nowHour < 11 ) {
    alert("Доброго ранку!")
 } else if (nowHour >= 11 && nowHour < 17) {
    alert("Доброго дня!")
 } else if( nowHour >= 17 && nowHour < 23) {
    alert("Доброго вечора!")
 }

 // swith
 const todayHour = new Date().getHours();
 switch(true) {
    case todayHour >= 23 || todayHour < 5:
        alert("Доброї ночі!")
        break;
    case todayHour >=5 && todayHour < 11:  
        alert("Доброго ранку!")
         break;
    case todayHour >= 11 && todayHour < 17:
        alert("Доброго дня!")
        break;
    default: 
        alert("Доброго вечора!")
        break;
 }

 //------------task 6
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let outLine = {};
let maxOut = 0;
let newArray;
arr.forEach((num) => {
    outLine[num] = (outLine[num] || 0) + 1;
  if (outLine[num] > maxOut) {
    maxOut = outLine[num];
    newArray = num;
  }
});
let data = [newArray];
arr = arr.filter((num) => num !== newArray);
console.log(arr);  // [4, 2, 1, 6, 3, 2]
console.log(data); // [5]