let arrayOfNumbers = [4, 6, 8]

let div1 = document.getElementById("numbers")
div1.innerHTML = `<p><i>This is the numbers from the array :</i><b> ${arrayOfNumbers}</b></p>`

let div2 = document.getElementById("div2")
div2.innerHTML = `<p> <i>The sum of the array numbers is:</i> <b>${sumNumbers(arrayOfNumbers)}</b></p>`

let div3 = document.getElementById("div3")
div3.innerHTML = `<p><i>Mathematical equasion:</i> <b> ${arrayOfNumbers[0]} + ${arrayOfNumbers[1]} + ${arrayOfNumbers[2]} = ${sumNumbers(arrayOfNumbers)} </b></p> `

function sumNumbers(array) {
    let sum = 0;
    for (i = 0; i < arrayOfNumbers.length; i++) {
        sum = (array[i] + sum)

    }
    return sum;
}

