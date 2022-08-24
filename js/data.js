
export const numbers = [1, 2, 3, 4, 5, 6, 7];

export class Student {
    constructor(name, koreaLanguage, english, mathematics) {
        //console.log("this 는", this);
        this.name = name;
        this.koreaLanguage = koreaLanguage;
        this.english = english;
        this.mathematics = mathematics;
    }
}

const student1 = new Student("홍길동", 95, 87, 75);
const student2 = new Student("김길동", 67, 92, 55);
const student3 = new Student("고길동", 78, 82, 100);
const student4 = new Student("최길동", 45, 55, 85);


export const students = [student1, student2, student3, student4];
export const fluits = ["사과", "딸기", "배", "참외", "딸기", "수박"];