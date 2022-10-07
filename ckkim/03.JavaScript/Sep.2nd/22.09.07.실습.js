const num = Math.ceil(Math.random() * 100);
if (num % 3 === 0 && num % 5 === 0) {
    console.log(num, 'FizzBug');
} else if (num%3 ===0) {
    console.log(num, 'Fizz');
} else if (num%5 === 0) {
    console.log(num, 'Bug');
} else {
    console.log(num, num);
}

for (let i=1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, 'FizzBug');
    } else if (i%3 ===0) {
        console.log(i, 'Fizz');
    } else if (i%5 === 0) {
        console.log(i, 'Bug');
    } else {
        console.log(i);
    }
}