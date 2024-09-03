//Базовые операторы
// 1.Задача: Арифметические операции
let x = 8;
let y = 4;
let sum = x + y;
let diff = x - y;
let multiply = x * y;
let div = x / y;
console.log(sum, diff, multiply, div);

//2.Задача: Инкремент и декремент
let counter = 10;
counter++;
console.log(counter);
counter--;
console.log(counter);

//3.Задача: Операторы присваивания
let num = 5;
num += 3;
num -= 2;
console.log(num);

// Математика
// 1. Задача: Округление чисел
let price = 19.99;
console.log(Math.round(price));

// 2.Задача: Возведение в степень
let base = 3;
let exponent = 4;
console.log(Math.pow(base, exponent));

// 3.Задача: Поиск минимального и максимального значения
const a = 5;
const b = 9;
const c = 3;
console.log (Math.min(a,b,c), Math.max(a,b,c))

// Операторы сравнения
// 1. Задача: Сравнение чисел
let a1 = 10;
let b1 = 20;
console.log(a >= b);

// 2.Задача: Проверка равенства
let firstName = "John";
let lastName = "John";
console.log(firstName === lastName);

let num1 = 0;
let str = "";
console.log(num1 == str);

// 3.Задача: Проверка неравенства
let age = 18;
console.log(age !== 21);

//  Логические операторы
// 1. Задача: Использование оператора AND
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID);

// 2.Задача: Использование оператора OR (||)
let isMember = false;
let isGuest = true;
console.log(isMember || isGuest);

// Задача: Использование оператора NOT (!)
let isOnline = true;
console.log(!isOnline);
