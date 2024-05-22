// 1.
// let question = prompt("Как вас зовут?");
// let answer = `Привет ${question}`;
// alert(answer);
// 2.
// let question = prompt("В каком году вы родились?");
// const YEAR = 2024;
// let answer = `Вам ${YEAR - question} лет (год, года, годов)`;
// alert (answer);
// 3.
// let question = prompt("Назовите длину стороны квадрата");
// let answer = `Периметр квадрата равен: ${question * 4}`;
// alert (answer);
// 4.
// let question = prompt("Назовите радиус окружности");
// const PI = 3.14;
// let answer = `Площадь окружности равна: ${PI * question ** 2}`;
// alert (answer);
// 5.
// let question1 = prompt("Назовите расстояние между городами, км");
// let question2 = prompt("Назовите время за которое хотите доехать, ч");
// let answer = `Скорость с которой вам следует ехать: ${question1 / question2} км/ч`;
// alert (answer);
// 6. 
// let question = prompt("Введите колличесво валюты в долларах");
// const COURSE = 1.09;
// let answer = `Ваш курс равен ${COURSE * question} евро`;
// alert (answer);
// 7. 
// let question1 = prompt("Укажите объем Флешки в Гб");
// let question2 = question1 * 1000
// let answer = (`Количество файлов которое можно записать на Флешку ${Math.floor(question2 / 820)}`);
// alert (answer);
// 8.
// let question1 = prompt("Сколько у вас денег?");
// let question2 = prompt("Какая цена у шоколадки?");
// let answer1 = (`Количество шоколадок которое вы можете купить ${Math.floor(question1 / question2)} шт.`)
// alert (answer1);
// let answer2 = (`Ваша сдача ${question1 - (question2 * Math.floor(question1 / question2))} руб.`)
// alert (answer2);
// 9.
// let question = prompt("Введите трехзначное число");
// let answer = (`${(question % 10)}${(Math.floor(question / 10) % 10)}${Math.floor(question / 100)}`);
// alert (answer);
// 10.
// let question = prompt("Введите целое число");
// question % 2 == 0 ? alert('Четное') : alert('Нечетное');