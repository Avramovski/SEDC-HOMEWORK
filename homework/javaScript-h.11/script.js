class Academy {
    constructor(name, start, end,) {
        this.name = name;
        this.students = [];
        this.subjects = [];
        this.start = start
        this.end = end
    }
    numberOfClasses = () => { this.subjects.length * 10; }

    printStudents = () => {
        console.log(`Students : ${this.name}`);
        this.students.forEach(student => {
            console.log(student.firstName, student.lastName);
        })
    }
    printSubjects = () => {
        console.log(`Subjects : ${this.name}`);
        this.subjects.forEach(subject => {
            console.log(subject.title);
        })
    }

}

class Subject {
    constructor(title, isElective, academy,) {
        this.title = title;
        this.numberOfClasses = 10;
        this.isElective = isElective
        this.academy = academy
        this.students = [];

    }
    overrodeClasses(number) {
        if (number >= 3) {
            this.numberOfClasses = number
        } else {
            alert("number of classes cannot be smaller than 3.");
        }
    }
}

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.currentSubjacts = [];
        this.academy = null;
        this.completedSubjact = null;
    }
    startAcademy(academy) {
        academy.students.push(this);
        this.academy = academy;
    }
    startSubject(subject) {
        if (!this.academy || !this.academy.subjects.includes(subject)) {
            console.log('the student has no academy or the subject is not in the academy');
            return;
        }
        if (this.currentSubjacts !== null) {
            this.completedSubjact = this.currentSubjacts;
        }
        this.currentSubjacts = subject;
        subject.students.push(this);
    }
}
const academy = new Academy("SEDC", new Date(2024, 2, 21), new Date(2025, 2, 21));
const student1 = new Student("Fico", "Zlat", 20);
const student2 = new Student("Nikola", "Avram", 19);
const subject1 = new Subject("Java Script ", true, academy);
const subject2 = new Subject(".NET", false, academy);
academy.subjects.push(subject1, subject2);
student1.startAcademy(academy);
student2.startAcademy(academy);
student1.startSubject(subject1);
student2.startSubject(subject2);
academy.printStudents();
academy.printSubjects();


