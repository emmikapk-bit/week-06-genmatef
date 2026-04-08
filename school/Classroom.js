class Classroom {
  constructor(roomNumber, building, capacity) {
    this.roomNumber = roomNumber;
    this.building = building;
    this.capacity = capacity;
    this.assignedCourse = null;
  }

  assignCourse(course) {
    if (this.assignedCourse) {
      console.log(
        `Room ${this.roomNumber} is already assigned to ${this.assignedCourse.courseName}.`,
      );
      return;
    }

    this.assignedCourse = course;
    console.log(
      `Assigned course ${course.courseName} to room ${this.roomNumber}.`,
    );
  }

  showRoomInfo() {
    console.log(`Classroom: ${this.roomNumber} (${this.building})`);
    console.log(`Capacity: ${this.capacity} people`);

    if (this.assignedCourse) {
      console.log(`Assigned Course: ${this.assignedCourse.courseName}`);
      return;
    }

    console.log("Assigned Course: None");
  }
}

module.exports = Classroom;
