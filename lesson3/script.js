// let a = [1, 2, 3, 4, 5]

// for (let i = 0; i != a.length; i++) {
//     alert(a[i])
// }

// i != a.length; - не равна длине массива
// a = [1, 2, 3, 4, 5] - список

// alert(a)
// a.push(6)
// alert(a)

// for ("начало"; "условие"; "шаг") {
//     "Тело цикла"
// }

// let i = 0;

// for (; i < 3; i++) {
//     alert(i)
// }

// for (; true; i++) {
//     console.log(i)
// }

// let i = 0;

// for (; i<3; ) {
//     i++
//     alert(i)
// }

// ----------------------------------------------------------------
// let i = 0;
// while (true) {
    
//     if(i === 10) {
//         break
//     }
//     alert(i)

//     i++

// }
// ----------------------------------------------------------------
// let i = 0;
// while (true) {
   
//     i++
    
//     if(i === 10) {
//         continue
//     }
    
//     if ( i === 15) {
//         break
//     }

//     alert(i)
// }
// -------------------------------------------------------------------
// do {
//     "тело цикла"
// } while  (con)
// -------------------------------------------------------------------
// a = [1, 2, 3, 4, 5];
// b = [9, 8, 7, 6, 5];

// for (let i=0; i < a.length; i++) {
//     let value1 = a[i]

//     for (let j=0; j < b.length; j++){
//     let value2 = b[j]

//     if(value1 == value2) {
//         alert(`Найдено совпаление ${value1}`)
//         }
//     }         
// }
// -------------------------------------------------------------------
// console.log(document.getElementsByClassName("").innerHTML)
// -------------------------------------------------------------------

// function имя("параметры(аргументы)") {
//     "тело"
// }

// let a = 0

// function helloMessage(name) {
//     // let a = 0
//     alert(`Всем ${name}`)

// }

// helloMessage("Иван")
// helloMessage("Игорь")

// function helloMessage(text = "Всем привет!"){
//     alert(text)
// }
// helloMessage("Всем пока")
// function sum(a, b){
//     return a + b
//     }

//     let b = sum(1,2)
//     alert(b)

// function validatorNumber(number) {
//     if (typeof number == 'number') {
//         return true
//     }
//     return false
// }

// function sum(a, b){
//     if (validatorNumber(a) && validatorNumber(b)) {
//         return a + b
//     }
//     return null
// }

// alert (sum("4",3))