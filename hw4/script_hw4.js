// 1.
// function twoNumbers() {

//     let number1 = parseInt(prompt("Введите первое число"))
//     let number2 = parseInt(prompt("Введите второе число"))

//     if (number1 < number2) {
//         return -1
//     }
//     else if (number1 > number2) {
//         return 1
//     }
//     else if (number1 == number2) {
//         return 0
//     }
// }

// alert(twoNumbers())

// 2.
// function factorial(num) {
//     let result = 1;

//     for (let i = 2; i <= num; i++) {
//         result *= i;
//     }

//     return result;
// }

// let number = parseInt(prompt("Введите число для вычисления факториала:"));
// let result = factorial(number);
// alert(`Факториал числа ${number} равен ${result}`);

// 3.
// function ThreeNumbers () {
//     let num1 = parseInt(prompt("Введите первое число"))
//     let num2 = parseInt(prompt("Введите второе число"))
//     let num3 = parseInt(prompt("Введите третье число"))
    
//     num1 = String(num1)
//     num2 = String(num2)
//     num3 = String(num3)

//     alert(num1 + num2 + num3)
// }
// ThreeNumbers()

// 4.
// let length = parseInt(prompt("Введите длину"))
// let width = parseInt(prompt("Введите ширину"))

// function square(length, width) {
//  if (width === undefined) {
//     return length * length
//  }
//  else {
//     return length * width
//  }
// }

// if (!width) {
//     let result = square(Number(length));
//     alert("Площадь квадрата: " + result);
// } else {
//     let result = square(Number(length), Number(width));
//     alert("Площадь прямоугольника: " + result);
// }

// 5.
// let number = parseInt(prompt("Введите число:"));

// function isPerfectNumber(number) {
//   let sum = 0;

//   for (let i = 1; i < number; i++) {
//     if (number % i === 0) {
//       sum += i;
//     }
//   }

//   return sum === number;
// }

// if (isPerfectNumber(number)) {
//   alert(number + " является совершенным числом");
// } 
// else {
//   alert(number + " не является совершенным числом");
// }


