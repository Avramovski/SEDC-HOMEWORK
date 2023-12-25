console.log('task 1');

class Dog {
    constructor(name, kind) {
        this.name = name;
        this.kind = kind;
    };
    speak() {
        const speakPrompt = prompt(`What will ${this.name} with ${this.kind} breed say:`)
        

        if (speakPrompt == 0 ) {
            alert('You need to input text!')
            this.speak();
        }
        else {
            document.write(`<p><b>${this.name} form the ${this.kind} bressd will tell you: ${speakPrompt}</b></p>`)
        }
    }
};

const dog1 = new Dog('Baki', 'Golo kozo kuce')
const dog2 = new Dog('Rex','Pitbul')

dog1.speak();
dog2.speak();         