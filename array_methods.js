// // sort out numbers array from lowest to highest
const numbers = [32323232,  2, 1, 4, 22, 565, 4, 12323223, 12, 34343434343434343434, 77777, 11111];
const sortedNumbers = numbers
    .sort((a, b) => a - b)
    .map(a => Number(a));

const timesTwo = numbers.map((num) => {
    return num * 2;
});


const over100 = numbers.filter((num) => {
    return num > 100;
});


