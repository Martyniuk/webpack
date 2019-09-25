class Human {
    KIND = 'HUMAN';

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayKind = () => {
        console.log('Kind', this.KIND);
    };

    sayName() {
        console.log('Name', this.name);
    }

    sayAge() {
        console.log('Age', this.age);
    }
}

const gendalf = new Human('Gendalf', 666);

gendalf.sayAge();

export const a = 1;
export const b = 5;
const c = a + b;
console.log(c);
