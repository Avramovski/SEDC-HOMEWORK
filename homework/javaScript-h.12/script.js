class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    getStudentAcademy(student) {
        return student.academyName;
    }
}

class Student {
    constructor(firstName, lastName, age, academyName, studentId) {
        Object.setPrototypeOf(this, new Person(firstName, lastName, age));
        this.academyName = academyName;
        this.studentId = studentId
        this.study = () => {
            console.log(`The student ${this.firstName} is studing in the ${this.academyName} academy`);
        }
    }
}
let person = new Person

let person1 = new Student('Nikola', "avramovski", 19, 'SEDC', 'ID123')
console.log(person1);
person1.getFullName()
person1.study()

console.log('====================================================');
let person2 = new Student('Mario', "Sstefanov", 33, "BrainStar", 'DI444')
console.log(person2);
person2.study()
person2.getFullName()


console.log(person.getStudentAcademy(person1));

class DesignStudent {
    constructor(firstName, lastName, age, academyName, studentId, isStudentOfTheMonth) {
        Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId))
        this.isStudentOfTheMonth = isStudentOfTheMonth || false;
        this.attendAdobeExam = () => {
            console.log(`${this.firstName} is doing an adobe exam`);
        }
    }
}

let person3 = new DesignStudent('Nikola', 'Avramovski', 19, 'SEDC', 'ID123');
person3.attendAdobeExam();
class CodeStudent {
    constructor(firstName, lastName, age, academyName, studentId, hasIndividualProject = true, hasGroupProject = true) {
        Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
        this.hasIndividualProject = hasIndividualProject;
        this.hasGroupProject = hasGroupProject;

        this.doProject = (type) => {
            if (type === 'individual') {
                console.log(`${this.firstName} is working on an individual project`);
                this.hasIndividualProject = true;
            } else if (type === 'group') {
                console.log(`${this.firstName} is working on a group project.`);
            } else {
                console.log(`Invalid project type`);
            }
        }
    }


}
let codeStudent = new CodeStudent('Nikola', 'Avramovski', 19, 'SEDC', 'ID123', true, true, 'individual');
console.log(codeStudent);
codeStudent.doProject('individual');

class NetworkStudent {
    constructor(firstName, lastName, age, academyName, studentId, academyPart) {
        Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId, academyPart));
        this.attendCiscoExam = () => {
            console.log(`${this.firstName} is doing a Cisco exam`);
        }
    }

}
let netwperson = new NetworkStudent('Nikola', 'Avramovski', 19, 'SEDC', 'ID123', 5);
console.log(netwperson);
netwperson.attendCiscoExam();


