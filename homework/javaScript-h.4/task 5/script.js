function findSumMinMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Invalid input. Please provide a non-empty array.";
    }

    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];

            if (arr[i] < min) {
                min = arr[i];
            }
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }

    if (min === Infinity || max === -Infinity) {
        return "No numeric values found in the array.";
    }

    return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}
const mixedArray = [3, 5, 'nesto', 6, 8, 'drugonesto', 11];
console.log(findSumMinMax(mixedArray));
