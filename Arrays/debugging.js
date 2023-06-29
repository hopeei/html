// -------------------- task 1

function sumSliceArray(arr, first, second) {

    if (typeof first !== 'number' || typeof second !== 'number') {
        throw new Error('Порядкові номери мають бути числами');
    }

    if (first >= arr.length || second >= arr.length) {
        throw new Error('Порядкові номери перевищують розмір масиву');
    }
    return arr[first] + arr[second];
}
try {
    const arr = [1, 2, 3, 4, 5];
    const first = 2;
    const second = 4;
    const result = sumSliceArray(arr, first, second);
    console.log(result);
} catch (error) {
    console.error(error.message);
}


// ------------------- task 2

function checkAge() {
    try {
        let name = prompt("Enter your name: ");
        let age = prompt("Enter your age : ");
        let status = prompt("Enter your status(moderator, admin, user): ");
        let ageCount = parseInt(age);
        if (ageCount <= 18 || ageCount >= 70) {
            throw new RangeError('Age incorect');
        }
        if (age === "" || age === null) {
            throw new Error('The field is empty! Please enter your age')
        }
        if (Number.isNaN(age)) {
            throw new TypeError('Please enter number')
        }
        if (status !== 'admin' && status !== 'moderator' && status !== 'user') {
            throw new EvalError('Your status incorect')
        }
        alert('HAPPY WATCHING')

    } catch (error) {
        alert("Error:" + error.name + "\n\n" + error.message);
    }
}

checkAge();

// --------------- task 3


function calcRectangleArea(width, height) {
    let square = width * height;
    if (Number.isNaN(width) || Number.isNaN(height)) {
        throw new Error('Incorrect parameters')
    }
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new RangeError('Parameters is no number')
    }
    return square;
}
console.log(calcRectangleArea(2, 10));


// ------------------ task 4

class MonthException {
    constructor(message) {
        this.name = "MonthException";
        this.message = message;
    }
}
function showMonthName(month) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    if (month <= 1 || month >= 12) {
        throw new MonthException(" Incorrect month number");
    }
    return months[month - 1];
}
try {
    const monthName = showMonthName(2);
    console.log(monthName);
    const invalidMonthName = showMonthName(15)
} catch (error) {
    console.log(`Error ${error.message}`);
}

// ------------------ task 5

function showUser(id) {
    if (id < 0) {
        throw new Error("Negative id ");
    }

    return { id };
}

function showUsers(ids) {
    const validUsers = [];

    for (const id of ids) {
        try {
            const user = showUser(id);
            validUsers.push(user);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    return validUsers;
}

const ids = [1, 2, -3, 4, 5];
console.log(showUsers(ids));























