// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    };
        speak = function() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
        };
}
class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }

    listsSubjects = function(subject) {
        return `'Today we are learning about ${subject}'`
    }

    PRAssignment = function() {
        
    }

    sprintChallange = function() {

    }
}
class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    demo = function(subject) {
        return `'Today we are learning about ${subject}'`
    }

    grade = function(subject) {
        return `'${this.name} receives a perfect score on ${subject}`

    }
}
class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr) 
        this.gradClassName = attr.gradClassName;
        this.favInstructors = attr.favInstructors;
    }; 
    standUp = function() {

    }
    debugsCode = function() {

    }
}

const eddie = new Student({
    name: "eddie jimenez",
    age: 29,
    location: "oceanside",
    previousBackground: "IT mainly network and computer hardware",
    className: "Lambda Web Dev",
    favSubjects: "HTML, Javascript"
})

const christian = new Student({
    name: "christian madera",
    age: 25,
    location: "vista",
    previousBackground: "IT mainly network and computer hardware",
    className: "Lambda Web Dev",
    favSubjects: "Javascript, CSS"
})

const jason = new Student({
    name: "jason vargas",
    age: 29,
    location: "escondido",
    previousBackground: "IT mainly network and computer hardware",
    className: "Lambda Web Dev",
    favSubjects: "CSS, Ruby, Python"
})

const forest = new Instructor({
    name: "Mr.Gump",
    age: 49,
    location: "oceanside",
    specialty: "Javascript, Running",
    favLanguage: "JSON",
    catchPhrase: "Code is like a Ford dealership, you never know which car is gonna break"

})

const feeny = new Instructor({
    name: "Mr.feeny",
    age: 49,
    location: "oceanside",
    specialty: "Html, Teaching",
    favLanguage: "JSON",
    catchPhrase: "Mr.Mathews does this code look right to you."

})

const captain = new Instructor({
    name: "MR.Planet",
    age: 89,
    location: "Earth",
    specialty: "Javascript, Saving the Planet",
    favLanguage: "JSON",
    catchPhrase: "Code is like a Ford dealership, you never know which car is gonna break"

})

const igor = new ProjectManager({
    name: "Igor the machine",
    age: 30,
    location: "Russia",
    gradClassName: "The Machine 2017",
    favInstructors: "",
    
})

const burt = new ProjectManager({
    name: "Burt",
    age: 35,
    location: "USA",
    gradClassName: "WebDev 2016",
    favInstructors: "",
    
})

console.log(eddie.name);
console.log(eddie.speak());
console.log(feeny.demo("JavaScript"));
console.log(captain.grade("Html"));