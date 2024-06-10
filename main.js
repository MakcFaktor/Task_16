class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    }

    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    }


    getAverageAttendance() {
        const attendedClasses = this.attendance.filter(value => value === true).length;
        const totalClasses = this.attendance.filter(value => value !== null).length;
        return totalClasses === 0 ? 0 : attendedClasses / totalClasses;
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const averageAttendance = this.getAverageAttendance();
        if (averageGrade > 90 && averageAttendance > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || averageAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Іван", "Іванов", 2000, [95, 88, 92]);
const student2 = new Student("Петро", "Петров", 2001, [70, 85, 78]);
const student3 = new Student("Марія", "Коваленко", 1999, [92, 95, 90]);

student1.present();
student1.present();
student1.absent();
document.querySelector('.student_1').textContent = student1.summary();
console.log(student1.summary(), "Студент 1");

student2.present();
student2.absent();
student2.absent();
document.querySelector('.student_2').textContent = student2.summary();
console.log(student2.summary(), "Студент 2");


student3.present();
student3.present();
student3.present();
document.querySelector('.student_3').textContent = student3.summary();
console.log(student3.summary(), "Студент 3");
