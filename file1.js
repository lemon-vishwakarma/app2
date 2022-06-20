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
