function combineNames(firstNames, lastNames) {
    if (!Array.isArray(firstNames) || !Array.isArray(lastNames) || firstNames.length !== lastNames.length) {
        return "Invalid input. Please provide two arrays of equal length.";
    }

    const fullNameArray = [];

    for (let i = 0; i < firstNames.length; i++) {
        const fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
        fullNameArray.push(fullName);
    }

    return fullNameArray;
}

const firstNames = ["Bob", "Jill"];
const lastNames = ["Gregory", "Wurtz"];
const result = combineNames(firstNames, lastNames);
console.log(result);
