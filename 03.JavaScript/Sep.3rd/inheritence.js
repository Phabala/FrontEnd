// 상속 (Inheritance), 메소드 재정의(OverRiding)
class Person {
    constructor (name, age, gender) { // 속성
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    toString() { // 메소드
        return `저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`
    }
}

class Student extends Person {
    constructor (name, age, gender, scholarship=100000) {
        super(name, age, gender);
        this.scholarship = scholarship;
    }
    toString() {
        return super.toString() + `\n장학금은 ${this.scholarship}원을 받았습니다.`;
    }        
}
const student = new Student('성춘향', 17, '여자', 200000);
console.log(student.toString());

// Teacher 클래스 - Person 상속, 속성: 담당부서 추가, toString() 메소드 재정의

class Teacher extends Person {
    constructor (name, age, gender, department) {
        super(name, age, gender);
        this.department = department;
    }
    toString() {
        return super.toString() + `\n담당부서는 ${this.department} 입니다.`;
    }
}

const teacher = new Teacher('김기홍', 26, '남자', 'JS');
console.log(teacher.toString());