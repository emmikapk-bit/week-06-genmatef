class Grade {
  constructor(student, course, score = 0) {
    this.student = student;
    this.course = course;
    this.score = score;
    this.grade = this.calculateGrade(score);

    if (this.student && Array.isArray(this.student.grades)) {
      this.student.grades.push(this);
    }
  }

  calculateGrade(score) {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
  }

  updateScore(newScore) {
    this.score = newScore;
    this.grade = this.calculateGrade(newScore);
    console.log(
      `${this.student.name} got ${this.score} points in ${this.course.courseName}.`,
    );
  }

  showGrade() {
    console.log(
      `Student: ${this.student.name} | Course: ${this.course.courseName} | Score: ${this.score} | Grade: ${this.grade}`,
    );
  }
}

module.exports = Grade;
