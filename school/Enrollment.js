class Enrollment {
  constructor(enrollmentId, student, course) {
    this.enrollmentId = enrollmentId;
    this.student = student;
    this.course = course;
    this.status = "pending";
  }

  register() {
    this.status = "registered";
  }

  dropCourse() {
    this.status = "dropped";
  }

  showEnrollment() {
    const studentName =
      typeof this.student === "string" ? this.student : this.student.name;
    const courseName =
      typeof this.course === "string" ? this.course : this.course.courseName;

    console.log("Enrollment ID:", this.enrollmentId);
    console.log("Student:", studentName);
    console.log("Course:", courseName);
    console.log("Status:", this.status);
  }
}

module.exports = Enrollment;
