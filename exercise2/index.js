class Student {
  constructor(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }

  calculateAverage() {
    const totalgrades = this.grades.reduce((a, b) => a + b, 0);
    const averageGrade = totalgrades / this.grades.length;

    return averageGrade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${
      this.age
    }, Average grade: ${this.calculateAverage()} Summary: ${
      this.name
    } has ${this.calculateAverage() < 50 ? "Failed ❌" : "Passed ✅"}`;
  }
}

const student1 = new Student("Ayomide", 23, [80, 80, 90, 60]);

console.log(student1.getDetails());
