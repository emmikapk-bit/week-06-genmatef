const Person = require("./Person.js");

class Student extends Person {
 constructor(name, age, studentId, gradeLevel) {
 super(name, age);
 this.studentId = studentId;
 this.gradeLevel = gradeLevel;
 this.grades = [];
 his.enrollments = [];
 }

 enrollCourse(course) {
 console.log(`${this.name} กำลังลงทะเบียนเรียนวิชา ${course.courseName}`);
 }

 viewGrades() {
 console.log(`\nเกรดของ ${this.name}:`);
 if (this.grades.length === 0) {
  console.log("ยังไม่มีเกรด");
  return;
 }
 this.grades.forEach(grade => {
  console.log(`- ${grade.course.courseName}: ${grade.grade} (${grade.score} คะแนน)`);
 });
 
 showProfile() {
 super.showProfile();
 console.log(`Student ID: ${this.studentId}`);
 console.log(`Grade Level: ${this.gradeLevel}`);
}
 }
}
