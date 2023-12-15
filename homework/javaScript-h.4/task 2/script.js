
function calculateSum(numbers) {

    for (let i = 0; i < numbers.lenght; i++) {
        if (!valuNumber(number[i])) {
            alert('You need to provide 5 numbers.Please try again!');
            return;
        }
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum);
}
function valuNumber(number) {
    return !isNaN(number);

    
    
}
const numberArray = [3, 4, 5, 3, 2];
calculateSum(numberArray)