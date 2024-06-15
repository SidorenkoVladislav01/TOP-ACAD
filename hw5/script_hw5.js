// 1.
// // function power(base, exponent) {
// //     if (exponent === 0) {
// //       return 1;
// //     } else {
// //       return base ** exponent;
// //     }
// //   }
  
// //   let base = parseFloat(prompt("Введите число:"));
// //   let exponent = parseInt(prompt("Введите степень:"));
  
// //   if (isNaN(base) || isNaN(exponent)) {
// //     alert("Введите число!");
// //   } else {
// //     let result = power(base, exponent);
// //     alert(base + " в степени " + exponent + " равно " + result);
// //   }

// 2.
// function divider(a, b) {
//     if (b === 0) {
//       return a;
//     } else {
//       return divider(b, a % b);
//     }
//   }
  
//   let number1 = parseInt(prompt("Введите первое число:"));
//   let number2 = parseInt(prompt("Введите второе число:"));
  
//   if (isNaN(number1) || isNaN(number2)) {
//     alert("Введите число!");
//   } else {
//     let result = divider(number1, number2);
//     alert("Наибольший общий делитель: " + result);
//   }

// 3.
// function getMaxDigit(number) {
//     if (number < 10) {
//       return number;
//     } else {
//       let lastDigit = number % 10;
//       let remainingDigits = Math.floor(number / 10);
//       let maxDigit = getMaxDigit(remainingDigits);
//       return Math.max(lastDigit, maxDigit);
//     }
//   }
  
//   let number = parseInt(prompt("Введите число:"));
  
//   if (isNaN(number)) {
//     alert("Введите число!");
//   } else {
//     let result = getMaxDigit(number);
//     alert("Максимальная цифра: " + result);
//   }

// 4.
// function recursia(divisible, divider = 1) {
//     if (divisible <= 1) {
    
//     console.log("Число  должно быть быльше 1")
//     return
//     }

//     if (divisible % divider == 0 && divider != 1 && divisible != divider) {
//         console.log("Число не простое")
//         return
//     }

//     if (divider === divisible) {
//         console.log("Число простое")
//         return
//     }

//  recursia(divisible, divider + 1)

// }

// recursia(5)