import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person;
let programStart = async (persons) => {
    do {
        console.log("Wellcome Dear");
        const ans = await inquirer.prompt({
            type: "list",
            name: "slect",
            message: "What do you want to talk about?",
            choices: ["Your Self", "Students"]
        });
        if (ans.slect == "Your Self") {
            console.log("You are talking to yourself");
            console.log("I am fine Now");
        }
        ;
        if (ans.slect == "Students") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Which student should you talk to?"
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello , i am ${name.name} I am fine`);
                console.log(persons.students);
            }
            ;
            if (student) {
                console.log(`Hello , i am ${student.name} I am fine`);
                console.log(persons.students);
            }
        }
        ;
    } while (true);
};
programStart(persons);
