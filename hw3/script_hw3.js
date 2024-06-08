// 1. 
// let start = parseInt(prompt("Введите начало диапазона:")); 
// let end = parseInt(prompt("Введите конец диапазона:")); 
// let sum = 0; 

// while (start <= end) { 
//   sum += start; 
//   start++; 
// }

// alert("Сумма всех чисел в диапазоне: " + sum);

// 2.
// let number1 = parseInt(prompt("Введите первое число:"));
// let number2 = parseInt(prompt("Введите второе число:"));
// let divisor = 1;
// let maxDivisor = 1;
  
// while (divisor <= number1 && divisor <= number2) { 
//   if (number1 % divisor === 0 && number2 % divisor === 0) { 
//     maxDivisor = divisor; 
//   } 
//   divisor++; 
// }
  
// alert("Наибольший общий делитель: " + maxDivisor);

// 3.
// let number = parseInt(prompt("Введите число:")); 
// let divisor = 1;

// alert("Делители числа " + number + ":");

// while (divisor <= number) { 
//   if (number % divisor === 0) { 
//     alert(divisor); 
// } 
// divisor++; 
// }

// 4.
// let number = parseInt(prompt("Введите число:")); 
// let count = 0;

// while (number !== 0) { 
//     number = Math.floor(number / 10); 
//     count++; 
// }

// alert("Количество цифр в числе: " + count);

// 5.
// let positiveCount = 0; 
// let negativeCount = 0; 
// let zeroCount = 0; 
// let evenCount = 0; 
// let oddCount = 0; 
// let count = 0;

// while (count < 10) { 
// let number = parseInt(prompt("Введите число:"));

// if (number > 0) { 
//   positiveCount++; 
// } 
// else if (number < 0) { 
//   negativeCount++; 
// } 
// else { 
//   zeroCount++; 
// }

// if (number % 2 === 0) { 
//   evenCount++; 
// } 
// else { 
//   oddCount++; 
// }

// count++; 
// }

// alert("Статистика введенных чисел:\n" + "Положительных: " + positiveCount + "\n" + "Отрицательных: " + negativeCount + "\n" + "Нулей: " + zeroCount + "\n" + "Четных: " + evenCount + "\n" + "Нечетных: " + oddCount);

// 6.
// let again = true;

// while (again) { 
//   let number1 = parseInt(prompt("Введите первое число:")); 
//   let number2 = parseInt(prompt("Введите второе число:")); 
//   let operator = prompt("Введите знак (+, -, *, /):");

// let result;

// switch (operator) { 
//   case "+": result = number1 + number2; 
//   break; 
//   case "-": result = number1 - number2; 
//   break; 
//   case "*": result = number1 * number2; 
//   break; 
//   case "/": result = number1 / number2; 
//   break; 
//   default: alert("Неверный знак оператора"); 
//   continue; }

// alert("Результат: " + result);

// let answer = prompt("Хотите решить еще один пример? (да/нет)"); 

// if (answer.toLowerCase() !== "да") { 
//   again = false; 
// } 
// }
