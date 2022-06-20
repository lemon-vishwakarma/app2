// ODD-NUMBER BRANCH
const isOdd = (number) => {
    if (number % 2 != 0) {
        console.log(`${number} = ODD`);
    } else {
        console.log(`${number} = NOT ODD`);
    }
}
isOdd(10);
isOdd(11);

// EVEN-NUMBER BRANCH
const isEven = (number) => {
    if (number % 2 == 0) {
        console.log(`${number} = EVEN`);
    } else {
        console.log(`${number} = NOT EVEN`);
    }
}
isEven(10);
isEven(11);


// Add Function:
const add = (x, y) => {
    console.log(x + y);
}
add(10, 20);

// Subtract Function:
const subtract = (x, y) => {
    console.log(x - y);
}
subtract(10, 20);

// Divide function:
const divide = (x, y) => {
    console.log(x / y);
}
divide(10, 20);

// Multiply Function:
const multiply = (x, y) => {
    console.log(x * y);
}
multiply(10, 20);

const square = (number) => {
    console.log(number ** 2);
}
square(5);

const cube = (number) => {
    console.log(number ** 3);
}
cube(5);

const newFunc = () => {
    console.log("Hello from newFunc");
}
newFunc();