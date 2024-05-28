// function Dog (size, hight, weight) {
//     this.size = size
//     this.hight = hight
//     this.weight = weight
// }

// let dog1 = new Dog("big", 30, 35)
// console.log(dog1)

// let labrador1 = new Dog("big", 60, 35)
// let labrador2 = new Dog("big", 60, 35)

// labrador1.color = "black"
// labrador2.color = "red"
// console.log(labrador1)
// console.log(labrador2)
//-------------------------------------------------------------------------------------------------
// class Human {
//     constructor(firstName,lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     sayHi() {
//         console.log(`Privet ${this.firstName}`)
//     }

// }

// let driver = new Human("Андрей", "Иванов")
// driver.sayHi()
// console.log(driver)

// let programer = new Human("Дмитрий", "Дмитриенко")
// programer.sayHi()
//----------------------------------------------------------------------------------------------------

// const Status = {
//     DRAFT:"Черновик",
//     WORK:"Рабочий"
// }

// class BaseDocument {
//     constructor(number, status) {
//     this.number = number
//     this.status = status
//     }
//     getStatus() {
//         alert(this.status)
//     }
// }

// class Contract extends BaseDocument {
//     constructor(number, status, name) {
//         super(number, status)
//         this.name = name
//     }

//     static valueValidation(value) {
//         if (typeof value == "string") {
//             console.log("Валидация пройдена")
//         }
//         else {
//             console.log("Валидация не пройдена")
//         }
//         console.log("Привет")
//     }


//     // getStatus() {
//     //     alert(`Для договора - ${this.name} статус - ${this.status}`)
//     // }
// }

// let nameContract = Contract.valueValidation("Privet")

// let contract = new Contract(1, Status.WORK, "Договор1")

// console.log(contract)
// contract.getStatus()
//--------------------------------------------------------------------------------------------

// class CoffeeMachine {
//     _waterAmount = 0 // ограничение

//     set waterAmount(value) {                      //для работы с приватным методом
//         if (value < 0) console.log("Ошибка")
//         if (value > 0) {
//             console.log(`Воды - ${value}`)
//             this._waterAmount = value}
        
//     }
    
//     get power() {
//         return this._power
//     }

//     constructor(power) {
//         this._power = power
//         alert(`Создана кофеварка с мощностью ${this.power}`)
//     }
// }
// let coffeeMachine = new CoffeeMachine(100)

// coffeeMachine.waterAmount = 10

// console.log(coffeeMachine.waterAmount)

// coffeeMachine.waterAmount = 200

// console.log(coffeeMachine.waterAmount)