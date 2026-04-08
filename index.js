const Student = require("./school/Student");
const Teacher = require("./school/Teacher");
const Course = require("./school/Course");
const Classroom = require("./school/classroom");
const Enrollment = require("./school/Enrollment");
const Grade = require("./school/Grade");
const Schedule = require("./school/Schedule");

const student1 = new Student("S001", "Somchai", 15, "Grade 10");
const teacher1 = new Teacher("T001", "Anan", 35, "Math");

student1.showProfile();
student1.speak();
student1.eat();

teacher1.showProfile();
teacher1.speak();
teacher1.eat();
