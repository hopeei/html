// task 2
alert("Hopei")
// task 3
let a = 5;
let b = 3;
alert(a,b);
a = b = 5;
alert(a,b)
// task 4
const myObject = {
    myString: "Hello JS!",
    myNumber: 35,
    myBoolean: true,
    myUndefined: undefined,
    myNull: null
  };
  console.log(myObject);
  // task 5
  const isAdult = confirm("You are 18+?");
  console.log(isAdult);
  // task 6
  const name = 'Danylo';
  const surname = 'Hopei';
  const group = 'T4';
  const birthyear = 2004;
  const married = false;
  console.log(`Birthyear: ${birthyear}, type: ${typeof (birthyear)}`);
  console.log(`Married: ${married}, type: ${typeof (married)}`);
  console.log(`Name: ${name}, type: ${typeof (name)}`);
  console.log(`Surname: ${surname}, type: ${typeof (surname)}`);
  console.log(`Group: ${group}, type: ${typeof (group)}`);
  const menu = null;
  const mobile = undefined;
  console.log(`Menu: ${menu}, type: ${typeof (menu)}`); 
  console.log(`Mobile: ${mobile}, type: ${typeof (mobile)}`);
  // task 7
  let login = prompt ("Please enter your login: ");
  let email = prompt("Please enter your email: ");
  let password = prompt ("Please enter your password: ");
  alert(`Your login ${login}, your email ${email}, your password ${password}`);
  // task 8
const secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;
alert(`The number of seconds in an hour: ${secondsInHour}`);
alert(`The number of seconds in a day: ${secondsInDay}`);
alert(`The number of seconds in a month: ${secondsInMonth}`);
  
