class Course {
  constructor(courseId, courseName, credits) {
    this.courseId = courseId;
    this.courseName = courseName;
    this.credits = credits;
  }

  showCourseInfo() {
    console.log("----- Course Information -----");
    console.log("Course ID:", this.courseId);
    console.log("Course Name:", this.courseName);
    console.log("Credits:", this.credits);
  }

  updateCourse(newCourseName, newCredits) {
    if (newCourseName) {
      this.courseName = newCourseName;
    }

    if (newCredits) {
      this.credits = newCredits;
    }

    console.log(`Updated course: ${this.courseName} (${this.credits} credits)`);
  }
}

module.exports = Course;
