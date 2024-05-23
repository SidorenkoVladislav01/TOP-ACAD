// Функции - обычное наименование (function declaration)

// function sayHi() {
//     alert("Привет!")
// }
// sayHi()

// Function Expression

// let sayHi = function() {
//     alert("Привет")
// }
// sayHi()

// Рекурсия

// let a = 0;

// function plus1(number){
//     number += 10
//     alert(number)
//     if (number < 610){
//     plus1(number + 20)
//     } // Рекурсия
// }
// plus1(0)

// Стрелочная функция

// let sum2 = (arg1, arg2) => {
//     alert(arg1 + arg2)
// }
// sum2(1, 2)

// Объекты

// let user1 = new Object(); // так не делаем
// let user2 = {}

// let user = {
//     name: "Igor",
//     age: 30,
//     children: {
//         name: "Vadim",
//         age: 16,
//         children: {
//             name: "Egor"
//         }
//     }
// }

// user["age"]
// let name = user?.children?.children?.children
// alert(name)

// JSON.stringify - преобразовать объекты в строки

// let user = {}

// let name = prompt("Как тебя зовут?")

// user["name"] = name
// // user.name - name // можно присвоить так

// alert(JSON.stringify(user))

// let age = prompt("Сколько тебе лет?")
// user.age = age
// alert(JSON.stringify(user))

// [{}, {}, {}]

// let user = {name: "Igor",
//             age: 30
// }

// for (let key in user) {
//     alert(user[key]) // Обратиться к объекту - игорь, 30
// }

// const user = {
//     name: "Igor",
//     age: 30
// }
// alert(JSON.stringify(user))
// user.firstName = "Ivanov"
// alert(JSON.stringify(user))

// let number1 = 0
// let number2 = number1

// console.log(number1)
// console.log(number2)

// let object1 = {name: "Test1"}
// let object2 = object1

// object2["age"] = 30

// console.log(JSON.stringify(object1))
// console.log(JSON.stringify(object2))

// let object1 = {name: "Test1"}
// let object2 = object1

// if (object1 == object2) {
//     console.log(true)
// }

// let user = {
//     name: "John",
//     age: 38,
//     sayHi() {
//         console.log(this)
//     }
// }

// user.sayHi()

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Jack")

// console.log(user)

// let now = new Date
// console.log(now)