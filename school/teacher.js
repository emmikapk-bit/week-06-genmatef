class Teacher {
    constructor(teacherId, name, subject) {
        this.teacherId = teacherId;
        this.name = name;
        this.subject = subject;
    }

    teachCourse(courseName) {
        console.log(this.name + " is teaching " + courseName);
    }

    assignGrade(studentName, score) {
        console.log(this.name + " gives " + score + " to " + studentName);
    }

    showProfile() {
        console.log("Teacher ID: " + this.teacherId);
        console.log("Name: " + this.name);
        console.log("Subject: " + this.subject);
    }
}

const t1 = new Teacher(1, "Mr. John", "Math");

t1.showProfile();
t1.teachCourse("Algebra");
t1.assignGrade("Ali", 95);