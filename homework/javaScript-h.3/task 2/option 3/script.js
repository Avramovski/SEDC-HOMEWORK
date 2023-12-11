console.log('task 2');

// so bonusot 

// ne svativ dali treba vaka malku mi bese nejasno so treba da izvrsi bonusot (ja svativ deka vaka)

function calculateDogAge(age, isHumanToDog) {
    if (isHumanToDog) {
        let dogAge = 7 * age;
        return dogAge;
    } else {
        let humanAge = age / 7;
        return humanAge;
    }
}


let dogAge = 14 ;
let humanAge = 70;

console.log(calculateDogAge(dogAge));
console.log(calculateDogAge(humanAge));