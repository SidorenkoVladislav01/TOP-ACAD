// 1.
// let age = prompt("Сколько вам лет?");
// if (age =>0, age <=2) {
//     alert ("Вы ребенок")
// }
// else if (age =>12, age <=17){
//     alert ("Вы подросток")  
// }
// else if (age =>18, age <=59){
//     alert ("Вы взрослый")  
// }
// else if (age =>60) {
//     alert ("Вы пенсионер")
// }
// 2.
// let number = prompt("Введите число от 0 до 9")
// switch(number) {
//     case "0":
//         alert(")")
//         break
//     case "1":
//         alert("!")
//         break
//     case "2":
//         alert("@")
//         break
//     case "3":
//         alert("#")
//         break
//     case "4":
//         alert("$")
//         break
//     case "5":
//         alert("%")
//         break
//     case "6":
//         alert("^")
//         break
//     case "7":
//         alert("&")
//         break
//     case "8":
//         alert("*")
//         break
//     case "9":
//         alert("(")
//         break
// }
// 3.
// let number = prompt("Введите трехзначное число");
// if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
//     alert('Одинаковые числа есть')
// }
// else
//     alert('Одинаковых чисел нет');
// 4.
// let year = prompt('Введите год');
// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     alert('Високосный год');
// }
// else
//     alert('Не високосный год');
// 5. 
// let number = prompt("Введите пятиразрядное число");  
// if (number[0] === number[4] || number[1] == number[3]) // первый вариант кода, сам
// // if (number === number.split('').reverse().join('')) // второй вариант с интернета
//     {
//     alert("Это палиндром")
// } else {
//     alert("Это не палиндром")
// }