const Person = require("./Person");

class Teacher extends Person {
  constructor(teacherId, name, age, subject) {
    super(name, age);
    this.teacherId = teacherId;
    this.subject = subject;
  }

  teachCourse(course) {
    const courseName = typeof course === "string" ? course : course.courseName;
    console.log(`${this.name} is teaching ${courseName}.`);
  }

  assignGrade(gradeRecord, score) {
    if (gradeRecord && typeof gradeRecord.updateScore === "function") {
      gradeRecord.updateScore(score);
      return;
    }

    console.log(`${this.name} assigned score ${score}.`);
  }

  showProfile() {
    console.log("Teacher ID:", this.teacherId);
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Subject:", this.subject);
  }
}

module.exports = Teacher;
