// console.log(sum(3,4))
// function sum(a,b) {
//     return a + b;
// }

// const sum = (a, b) => a + b;

// const Dog = (id, name, age) => {
//     this.id = id;
//     this.name = name;
//     this.age = age;
// }

// let dog = new Dog(1, "abc", 1);
// console.log(dog)

let obj = {
    id: 1,
    b() {
        console.log(this.id, this)
    },
    c: () => {
        console.log(this.id, this)
    }
}
obj.b();
obj.c();
