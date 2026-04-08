// Example of inheritance
// Grade gets everything from Student via 'extends'
import Student from './school/Student.js';

class Grade {
    // รับ Object ของนักเรียนและวิชาเข้ามา พร้อมคะแนนเริ่มต้น (ถ้าไม่ใส่จะให้เป็น 0)
    constructor(student, course, score = 0) {
        this.student = student; // เก็บ Object Student
        this.course = course; // เก็บ Object Course
        this.score = score;
        this.grade = this.calculateGrade(score); // คำนวณเกรดอัตโนมัติทันทีที่สร้าง
    }

    // Encapsulation: ซ่อนโค้ดการตัดเกรดไว้ข้างใน ไม่ให้คลาสอื่นต้องมาวุ่นวาย
    calculateGrade(score) {
        if (score >= 80) return 'A';
        if (score >= 70) return 'B';
        if (score >= 60) return 'C';
        if (score >= 50) return 'D';
        return 'F';
    }

    // Encapsulation: เวลาอัปเดตคะแนน เกรดจะถูกอัปเดตตามไปโดยอัตโนมัติ
    updateScore(newScore) {
        this.score = newScore;
        this.grade = this.calculateGrade(newScore);
        console.log(
            `[Update] ${this.student.name} got ${this.score} (${this.grade}) in ${this.course.courseName}`,
        );
    }

    showGrade() {
        console.log(
            `[Grade Report] Student: ${this.student.name} | Course: ${this.course.courseName} | Score: ${this.score} | Grade: ${this.grade}`,
        );
    }
}
