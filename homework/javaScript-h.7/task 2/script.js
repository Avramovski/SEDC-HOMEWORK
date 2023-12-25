



class Book {
    constructor(title, author, readingStatus) {
        this.title = title;
        this.author = author;
        this.readingStatus = readingStatus
      
    }
    info() {
        if (readingStatus === 'true')  {
            document.write(`<p>You read ${this.title} by ${this.author}</p>`)
        }
        else {
            alert(`You need to read ${this.title} by ${this.author}`)
        }
    }
}

const title = prompt("Enter the title of the book:");
const author = prompt("Enter the author of the book:");
const readingStatus = prompt("Have you already read the book? ");


const book = new Book(title,author,readingStatus);

book.info();