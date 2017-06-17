/*
 1. Дан код:
 var a = 1, b = 1, c, d;

 Почему код даёт именно такие результаты?

 // с = 2 - префиксный инкремент сначала увеличивает a до 2, а потом возвращает значение
 c = ++a; alert(c);

 // d = 1 - постфиксный инкремент сначала возвращает старое значение, а  потом увеличавет значение на 1
 d = b++; alert(d);

 // c = 5 - сначала увеличили a до 3, потом использовали в арифметике
 c = (2+ ++a); alert(c);

 // d = 4 - увеличили b до 3, но в этом выражении оставили старое значение
 d = (2+ b++); alert(d);

 // каждую переменную увеличили по 2 раза
 alert(a);               // 3
 alert(b);               // 3
 */

/*
 2. Чему будет равен x в примере ниже?
 var a = 2;
 var x = 1 + (a *= 2);

 x = 5, т.к. x = 1 + (a * 2) = 1 + 4 = 5;
 */

/*
 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт,
 который работает по следующему принципу:
 если a и b положительные, вывести их разность;
 если а и b отрицательные, вывести их произведение;
 если а и b разных знаков, вывести их сумму;
 ноль можно считать положительным числом.
 */

// var a = -2, b = 3, c;
//
// if (a >= 0 && b >= 0) {         // если a и b положительные, вывести их разность
//     console.log(c = a - b);
// } else if (a < 0 && b < 0) {    // если а и b отрицательные, вывести их произведение
//     console.log(c = a * b);
// } else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {    // если а и b разных знаков, вывести их сумму. Лучше оставить
//     console.log(c = a + b);                             // просто else, код будет короче.
// }

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

// var a = 14;
//
// switch (a) {
//     case 0:
//         console.log(0);
//     case 1:
//         console.log(1);
//     case 2:
//         console.log(2);
//     case 3:
//         console.log(3);
//     case 4:
//         console.log(4);
//     case 5:
//         console.log(5);
//     case 6:
//         console.log(6);
//     case 7:
//         console.log(7);
//     case 8:
//         console.log(8);
//     case 9:
//         console.log(9);
//     case 10:
//         console.log(10);
//     case 11:
//         console.log(11);
//     case 12:
//         console.log(12);
//     case 13:
//         console.log(13);
//     case 14:
//         console.log(14);
//     case 15:
//         console.log(15);
//         break;
//     default:
//         console.log('Oooops!');
// }

/*
 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
 Обязательно использовать оператор return.
 */

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

/*
 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения
 аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из
 арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
 */

function mathOperation(agr1, arg2, operation) {
    switch (operation) {
        case 'plus':
            return plus(agr1, arg2);

        case 'minus':
            return minus(agr1, arg2);

        case 'multiplication':
            return multiplication(agr1, arg2);

        case 'division':
            return division(agr1, arg2);

        default:
            return false;
    }
}

console.log('Сложение: ' + mathOperation(2, 2, 'plus'));
console.log('Вычитание: ' + mathOperation(2, 2, 'minus'));
console.log('Умножение: ' + mathOperation(2, 2, 'multiplication'));
console.log('Деление: ' + mathOperation(2, 2, 'division'));


/*
 7. * Сравнить null и 0. Попробуйте объяснить результат.
 */

console.log('null > 0 - ' + (null > 0));  // false, т.к. null преобразовано к 0
console.log('null >= 0 - ' + (null >= 0)); // true, т.к. null преобразовано к 0
console.log('null === 0 - ' + (null === 0)); // false, в стандарте явно указано, что null равен лишь undefined

/*
 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow),
 где val – заданное число, pow – степень.
 */

function power(val, pow) {
    if (pow !== 1) { // пока степень не равна 1, вычислять power(val,pow - 1) вместо power(val,pow)
        return val * power(val, pow - 1);
    } else {
        return val;
    }
}

console.log('Функция power: ' + power(5, 2));