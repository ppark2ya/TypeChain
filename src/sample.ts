class Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// }

const lynn = new Human("Lynn", 18, "female");

const person = {
    name: 'park',
    age: 28,
    gender: 'male',
};

const sayHi = ({name, age, gender}: Human): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!!`;
}

console.log(sayHi(person));

export {};