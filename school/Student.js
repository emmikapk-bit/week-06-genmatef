const Person = require("./Person");

class Student extends Person {
  constructor(studentId, name, age, gradeLevel) {
    super(name, age);
    this.studentId = studentId;
    this.gradeLevel = gradeLevel;
    this.enrollments = [];
    this.grades = [];
  }

  enrollCourse(course) {
    this.enrollments.push(course);
    console.log(`${this.name} enrolled in ${course.courseName}.`);
  }

  viewGrades() {
    if (this.grades.length === 0) {
      console.log(`${this.name} has no grades yet.`);
      return;
    }

    console.log(`Grades for ${this.name}:`);
    this.grades.forEach((gradeRecord) => {
      gradeRecord.showGrade();
    });
  }

  showProfile() {
    console.log("Student ID:", this.studentId);
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Grade Level:", this.gradeLevel);
  }
}

module.exports = Student;
