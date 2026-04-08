//course เก็บข้อมูลรายวิชา

class Course {
  constructor(courseId, courseName, credits) {
    this.courseId = courseId;
    this.courseName = courseName;
    this.credits = credits;
  }

  //โชว์ข้อมูลใน Course ทั้งหมด
  showCourseInfo() {
    console.log("----- Course Information -----");
    console.log(`ID: ${this.courseId}`);
    console.log(`รายวิชา: ${this.courseName}`);
    console.log(`หน่วยกิต: ${this.credits}`);
  }

  //ลงทะเบียนเรียนใหม่
  updateCourse(newCourseName, newCredits) {
    if (newCourseName) this.courseName = newCourseName;
    if (newCredits) this.credits = newCredits;
    console.log(
      `ลงทะเบียนใหม่สำเร็จ : วิชา ${this.courseName} (${this.credits} หน่วยกิต)`,
    );
  }
}

module.exports = Course;

// // --- ส่วนทดสอบ -----
// const myCourse = new Course("CS101", "JavaScript OOP", 3);
// myCourse.showCourseInfo();

// myCourse.updateCourse("Advanced JavaScript", 4);
// myCourse.showCourseInfo();
