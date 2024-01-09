
class Calculator {
    constructor(mainScreen, upperScreen) {
        this.mainScreen = mainScreen
        this.upperScreen = upperScreen
        this.clear()
    }
    clear() {
        this.mainScreen = ''
        this.upperScreen = ''
    }
    
    delete() {
        this.mainScreen = this.mainScreen.toString().slice(0, -1)
    }
    showNumber(number) {
        if (number === '.' && this.mainScreen.includes('.')) return
        this.mainScreen = this.mainScreen.toString() + number.toString()
    }
    makeOperation(operation) {
        if (this.mainScreen === ' ') return
        if (this.upperScreen !== ' ') {
            this.compute()
        }
        this.operation = operation
        this.upperScreen = this.mainScreen
        this.mainScreen = ''
    }
    compute() {
        let computate
        const main = parseFloat(this.mainScreen)
        const upper = parseFloat(this.upperScreen)
        if (isNaN(main) || isNaN(upper)) return
        switch (this.operation) {
            case '+':
                computate = upper + main
                break
                case '-':
                    computate = upper - main
                    break
                    case '*':
                        computate = upper * main
                        break
                        case '/':
                            computate = upper / main
                            break
                        }
                        this.mainScreen = computate
                        this.operation = undefined
                        this.upperScreen = ' '
                    }
                    screen(){
                        this.mainScreen.innerText= this.mainScreen
                        if (this.operation != null){
                            this.upperScreen = 
                            `${this.upperScreen}${this.operation}`
                        }
                        else {
                            this.upperScreen.innerText = ' '
                        }
                    }
                    
                }
                
                const buttonsForNumbers = document.querySelectorAll("[data-number]");
                const buttonsForOperations = document.querySelectorAll("[data-operation]");
                const buttonForequal = document.querySelector("[data-equal]");
                const buttonForAllClear = document.querySelector("[data-all-clear]");
                const buttonForDelete = document.querySelector("[data-delete]");
                const mainTextElement = document.querySelector("[data-main-screen]");
                const upperTextElement = document.querySelector("[data-upper-screen]");

             const calculator = new Calculator( upperScreen , mainScreen)

                buttonsForNumbers.forEach(button => {
                    button.addEventListener('click' ,() =>{
                        calculator.showNumber(button.innerText)
                        calculator.screen()

                    })
                })
