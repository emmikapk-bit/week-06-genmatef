class Classroom {
  constructor(roomNumber, building, capacity) {
    this.roomNumber = roomNumber;
    this.building = building;
    this.capacity = capacity;
    this.assignedCourse = null;
  }

  assignCourse(course) {
    if (this.assignedCourse) {
      console.log(`Room ${this.roomNumber} is already assigned by ${this.assignedCourse.courseName}`);
      return;
    }
    this.assignedCourse = course;
    console.log(`Assigned course ${course.courseName} to room ${this.roomNumber}`);
  }

  showRoomInfo() {
    console.log(`Classroom: ${this.roomNumber} (Building ${this.building})`);
    console.log(`Capacity: ${this.capacity} people`);
    if (this.assignedCourse) {
      console.log(`Used for teaching course: ${this.assignedCourse.courseName}`);
    } else {
      console.log(`No course assigned yet`);
    }
  }
}