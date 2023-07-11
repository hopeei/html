// ----------------------- task 1
function upperCase(element) {
    let pattern = /^[A-Z]/;
    if (pattern.test(element)) {
        return "String's starts with uppercase character";
    } else {
        return "String's not starts with uppercase character";
    }
}
console.log(upperCase('Js'));
console.log(upperCase('js'));


// ----------------------- task 2
function checkEmail(email) {
    let pattern = /^\w{2,}@\w{2,}.\w{2,}$/;
    return pattern.test(email)
}
console.log(checkEmail("Qfafaf@gmail.com"));
console.log(checkEmail("Qfafafgmail.com"));

// -------------------- task 3
function swapString(input) {
    let pattern = /(\w+)\s+(\w+)/;
    let output = input.replace(pattern, "$2, $1");
    return output;
}
console.log(swapString("Java Script"));

// --------------------- task 4

function checkCard(number) {
    const pattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (pattern.test(number)) {
        return "Your number card is valid"
    } else {
        return "Your number card is invalid"
    }
}
console.log(checkCard('2332-3222-1123-1232'));
console.log(checkCard('2332-3222-1123-122'));

// --------------------- task 5

function checkText(text) {
    let pattern = /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;

    if (pattern.test(text)) {
        return "Email is correct!";
    } else {
        return "Email is not correct!";
    }
}
console.log(checkText('aaaa@gmail.com'));
console.log(checkText('aaaa__fas@gmail.com'));

// ------------------- task 6 
// Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
// Приклад роботи:
// checkLogin('ee1.1ret3');
// true 
// //1.1, 3

// checkLogin('ee1*1ret3');
// false 
// //1, 1, 3

function checkLogin(login) {
    let logPattern = /^[A-Za-z][A-Za-z0-9]{1,9}$/;
    let numPattern = /\d+(\.\d+)?/g;
    if (logPattern.test(login)) {
        return true;
    }

    let numbers = login.match(numPattern);
    if (numbers) {
        return numbers;
    } else {
        return null;
    }
}
console.log(checkLogin('ee1.ret3'));
console.log(checkLogin('ee1*1ret3'));
