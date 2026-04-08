const Student = require("./school/Student");
const Teacher = require("./school/Teacher");
const Course = require("./school/Course");
const Classroom = require("./school/Classroom");
const Enrollment = require("./school/Enrollment");
const Grade = require("./school/Grade");
const Schedule = require("./school/schedule");

const student1 = new Student("S001", "Somchai", 15, "Grade 10");
const teacher1 = new Teacher("T001", "Anan", 35, "Mathematics");
const course1 = new Course("C001", "Math", 3);
const classroom1 = new Classroom("A101", "Building 1", 40);
const enrollment1 = new Enrollment("E001", student1, course1);
const grade1 = new Grade(student1, course1);
const schedule1 = new Schedule(
  course1,
  teacher1,
  "Monday",
  "09:00 AM",
  classroom1,
);

student1.showProfile();
student1.speak();
student1.eat();

teacher1.showProfile();
teacher1.speak();
teacher1.eat();
teacher1.teachCourse(course1);

course1.showCourseInfo();

classroom1.assignCourse(course1);
classroom1.showRoomInfo();

student1.enrollCourse(course1);
enrollment1.register();
enrollment1.showEnrollment();

schedule1.createSchedule();
schedule1.showSchedule();

teacher1.assignGrade(grade1, 88);
student1.viewGrades();
