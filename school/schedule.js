class Schedule {
  constructor(course, teacher, day, time, classroom) {
    this.course = course;
    this.teacher = teacher;
    this.day = day;
    this.time = time;
    this.classroom = classroom;
  }

  createSchedule() {
    console.log(
      `Schedule created for ${this.course.courseName} on ${this.day} at ${this.time}.`,
    );
  }

  updateSchedule(day, time, classroom) {
    if (day) {
      this.day = day;
    }

    if (time) {
      this.time = time;
    }

    if (classroom) {
      this.classroom = classroom;
    }

    console.log(`Schedule updated for ${this.course.courseName}.`);
  }

  showSchedule() {
    console.log("----- Schedule -----");
    console.log("Course:", this.course.courseName);
    console.log("Teacher:", this.teacher.name);
    console.log("Day:", this.day);
    console.log("Time:", this.time);
    console.log("Classroom:", this.classroom.roomNumber);
  }
}

module.exports = Schedule;
