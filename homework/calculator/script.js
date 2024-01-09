const buttonsForNumbers = document.querySelectorAll("[data-number]");
const buttonsForOperations = document.querySelectorAll("[data-operation]");
const buttonForequal = document.querySelector("[data-equal]");
const buttonForAllClear = document.querySelector("[data-all-clear]");
const buttonForDelete = document.querySelector("[data-delete]");
const mainTextElement = document.querySelector("[data-main-screen]");
const upperTextElement = document.querySelector("[data-upper-screen]");

class Calculator {
    constructor(mainText, upperText) {
        this.mainTextElement = mainText;
        this.upperTextElement = upperText;
        this.clear();
    }

    clear() {
        this.mainText = ' ';
        this.upperText = ' ';
        this.operation = undefined;
    }

    delete() {
        this.mainText = this.mainText.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.mainText.includes('.')) return;
        this.mainText = this.mainText.toString() + number.toString();
    }

    operatioFunction(operation) {
        if (this.mainText === '') return;
        if (this.upperText !== '') {
            this.compute();
        }
        this.operation = operation;
        this.upperText = this.mainText;
        this.mainText = '';
    }

    compute() {
        let computate;
        const upper = parseFloat(this.upperText);
        const main = parseFloat(this.mainText);
        if (isNaN(upper) || isNaN(main)) return;

        switch (this.operation) {
            case '+':
                computate = upper + main;
                break;
            case '-':
                computate = upper - main;
                break;
            case '*':
                computate = upper * main;
                break;
            case '/':
                if (main === 0) {
                    alert("Can't divide by 0");
                    this.clear();
                    return;
                }
                computate = upper / main;
                break;
        }

        this.mainText = computate.toString();
        this.operation = undefined;
        this.upperTextElement.innerText = '';
    }

    screen() {
        this.mainTextElement.innerText = this.mainText;
        if (this.operation != null) {
            this.upperTextElement.innerText =
                `${this.upperText} ${this.operation}`;
        } else {
            this.upperText = '';
        }
    }
}

const calculator = new Calculator(mainTextElement, upperTextElement);

buttonsForNumbers.forEach(button => {
    button.addEventListener('click', function () {
        calculator.appendNumber(button.innerText);
        calculator.screen();
    });
});

buttonsForOperations.forEach(button => {
    button.addEventListener('click', function () {
        calculator.operatioFunction(button.innerText);
        calculator.screen();
    });
});

buttonForequal.addEventListener('click', () => {
    calculator.compute();
    calculator.screen();
});

buttonForAllClear.addEventListener('click', () => {
    calculator.clear();
    calculator.screen();
});

buttonForDelete.addEventListener('click', () => {
    calculator.delete();
    calculator.screen();
});
