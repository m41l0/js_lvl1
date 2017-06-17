/*
 Домашнее задание
 +
 1. Выводить счёт в режиме реального времени.
 2. Генерировать временные препятствия на поле.
 3. * Убрать границы поля. Т.е. при пересечении границы поля змейка появляется с
 противоположной стороны.
 */

// Глобальные переменные:
var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300; // Интервал между перемещениями змейки
var snake = []; // Сама змейка
var direction = 'y+'; // Направление движения змейки
var gameIsRunning = false; // Запущена ли игра
var snakeTimer; // Таймер змейки
var foodTimer; // Таймер для еды
var score = 0; // Результат
var scoreField; // поле для отображения текущего счета

function init() {
    prepareGameField(); // Генерация поля

    scoreField = document.getElementById('score-field');
    scoreField.innerHTML = score; // выводим начальный счет

    var wrap = document.getElementsByClassName('wrap')[0];
    // Подгоняем размер контейнера под игровое поле
    if (20 * (FIELD_SIZE_X + 1) < 380) {
        wrap.style.width = '380px';
    }
    else {
        wrap.style.width = (20 * (FIELD_SIZE_X + 1)).toString() + 'px';
    }

    // События кнопок Старт и Новая игра
    document.getElementById('snake-start').addEventListener('click', startGame);
    document.getElementById('snake-renew').addEventListener('click', refreshGame);

// Отслеживание клавиш клавиатуры
    addEventListener('keydown', changeDirection);
}

/**
 * Функция генерации игрового поля
 */
function prepareGameField() {
    // Создаём таблицу
    var gameTable = document.createElement('table');
    // gameTable.setAttribute('class', 'game-table'); //todo заменил строку, удалить
    gameTable.className = 'game-table';

    // Генерация ячеек игровой таблицы
    for (var i = 0; i < FIELD_SIZE_Y; i++) {
        // Создание строки
        var row = document.createElement('tr');
        row.className = 'game-table-row row-' + i;

        for (var j = 0; j < FIELD_SIZE_X; j++) {
            // Создание ячейки
            var cell = document.createElement('td');
            cell.className = 'game-table-cell cell-' + i + '-' + j;

            row.appendChild(cell); // Добавление ячейки
        }
        gameTable.appendChild(row); // Добавление строки
    }

    document.getElementById('snake-field').appendChild(gameTable); // Добавление таблицы
}

/**
 * Старт игры
 */
function startGame() {
    gameIsRunning = true;
    respawn();

    snakeTimer = setInterval(move, SNAKE_SPEED);
    setTimeout(createFood, 3000);
    setInterval(createBlockage, 5000);
}

/**
 * Функция расположения змейки на игровом поле
 */
function respawn() {
    // Змейка - массив td
    // Стартовая длина змейки = 2

    // Respawn змейки из центра
    var startCoordX = Math.floor(FIELD_SIZE_X / 2);
    var startCoordY = Math.floor(FIELD_SIZE_Y / 2);

    // Голова змейки
    var snakeHead = document.getElementsByClassName('cell-' + startCoordY + '-' + startCoordX)[0];
    snakeHead.setAttribute('class', snakeHead.getAttribute('class') + ' snake-unit');
    // Тело змейки
    var snakeTail = document.getElementsByClassName('cell-' + (startCoordY - 1) + '-' + startCoordX)[0];
    snakeTail.setAttribute('class', snakeTail.getAttribute('class') + ' snake-unit');

    snake.push(snakeHead);
    snake.push(snakeTail);
}

/**
 * Движение змейки
 */
function move() {
    // console.log('move',direction);
    // Сборка классов
    var snakeHeadClasses = snake[snake.length - 1].getAttribute('class').split(' ');
    // console.log(snakeHeadClasses);
    // Сдвиг головы
    var newUnit;
    var snakeCoords = snakeHeadClasses[1].split('-');

    var coordY = parseInt(snakeCoords[1]);
    var coordX = parseInt(snakeCoords[2]);

    // Определяем новую точку
    if (direction == 'x-') { // Если влево
        newUnit = document.getElementsByClassName('cell-' + (coordY) + '-' + (coordX - 1))[0];
        // сквозное прохождение через стенку
        if (snakeCoords[2] == (FIELD_SIZE_X - FIELD_SIZE_X)) {
            newUnit = document.getElementsByClassName('cell-' + (coordY) + '-' + (coordX + (FIELD_SIZE_X - 1)))[0];
        }
    }
    else if (direction == 'x+') { // Если вправо
        newUnit = document.getElementsByClassName('cell-' + (coordY) + '-' + (coordX + 1))[0];
        // сквозное прохождение через стенку
        if (snakeCoords[2] == (FIELD_SIZE_X - 1)) {
            newUnit = document.getElementsByClassName('cell-' + (coordY) + '-' + (coordX - (FIELD_SIZE_X - 1)))[0];
        }
    }
    else if (direction == 'y+') { // Если вверх
        newUnit = document.getElementsByClassName('cell-' + (coordY - 1) + '-' + (coordX))[0];
        // сквозное прохождение через стенку
        if (snakeCoords[1] == (FIELD_SIZE_Y - FIELD_SIZE_Y)) {
            newUnit = document.getElementsByClassName('cell-' + (coordY + (FIELD_SIZE_Y - 1)) + '-' + (coordX))[0];
        }
    }
    else if (direction == 'y-') { // Если вниз
        newUnit = document.getElementsByClassName('cell-' + (coordY + 1) + '-' + (coordX))[0];
        // сквозное прохождение через стенку
        if (snakeCoords[1] == (FIELD_SIZE_Y - 1)) {
            newUnit = document.getElementsByClassName('cell-' + (coordY - (FIELD_SIZE_Y - 1)) + '-' + (coordX))[0];
        }
    }

    // Проверки
    // 1) newUnit не часть змейки
    // 2) Змейка не ушла за границу поля
    // console.log(newUnit);
    if (!isSnakeUnit(newUnit) && newUnit !== undefined) {
        // Добавление новой части змейки
        newUnit.setAttribute('class', newUnit.getAttribute('class') + ' snake-unit');
        snake.push(newUnit);

        // Проверяем, надо ли убрать хвост
        if (!haveFood(newUnit)) {
            // Находим хвост
            var removed = snake.splice(0, 1)[0];
            var classes = removed.getAttribute('class').split(' ');

            // удаляем хвост
            removed.setAttribute('class', classes[0] + ' ' + classes[1]);
        }

        // проверка на столкновение с препятствием
        if (haveBlockage(newUnit)) {
            finishTheGame();
        }
    }
    else {
        finishTheGame();
    }
}

/**
 * Проверка на змейку
 * @param unit
 * @returns {boolean}
 */
function isSnakeUnit(unit) {
    var check = false;

    if (snake.includes(unit)) {
        check = true;
    }
    return check;
}
/**
 * проверка на еду
 * @param unit
 * @returns {boolean}
 */
function haveFood(unit) {
    var check = false;

    var unitClasses = unit.getAttribute('class').split(' ');

    // Если еда
    if (unitClasses.includes('food-unit')) {
        check = true;
        createFood();

        scoreField.innerHTML = ++score; // увеличиваем счет и выводим
    }
    return check;
}

/**
 * Создание еды
 */
function createFood() {
    var foodCreated = false;

    while (!foodCreated) {
        // рандом
        var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
        var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);

        var foodCell = document.getElementsByClassName('cell-' + foodY + '-' + foodX)[0];
        //console.log(foodCell); // почему td уже имеет class = food-unit ???
        var foodCellClasses = foodCell.getAttribute('class').split(' ');

        // проверка на змейку
        if (!foodCellClasses.includes('snake-unit')) {
            var classes = '';

            for (var i = 0; i < foodCellClasses.length; i++) {
                classes += foodCellClasses[i] + ' ';
            }

            foodCell.setAttribute('class', classes + 'food-unit');
            //console.log(foodCell); // здесь понятно почему td уже имеет class = food-unit
            foodCreated = true;
        }
    }
}

/** 
 * Создание препятствий
 */

function createBlockage() {
    var blockCreated = false;
    // var blockageCount = 0; // счетчик препятствий


    while (!blockCreated) {
        // рандом
        var blockX = Math.floor(Math.random() * FIELD_SIZE_X);
        var blockY = Math.floor(Math.random() * FIELD_SIZE_Y);

        var blockCell = document.getElementsByClassName('cell-' + blockY + '-' + blockX)[0];
        var blockCellClasses = blockCell.getAttribute('class').split(' ');

        // проверка на змейку
        if (!blockCellClasses.includes('snake-unit')) {
            var classes = '';

            for (var i = 0; i < blockCellClasses.length; i++) {
                classes += blockCellClasses[i] + ' ';
            }

            blockCell.setAttribute('class', classes + 'block-unit');
            blockCreated = true;
        }
    }
}

/**
 * проверка на препятствие
 * @param unit
 * @returns {boolean}
 */
function haveBlockage(unit) {
    var check = false;

    var unitClasses = unit.getAttribute('class').split(' ');

    // Если препятствие
    if (unitClasses.includes('block-unit')) {
        check = true;
    }
    return check;
}

/**
 * Изменение направления движения змейки
 * @param e - событие
 */
function changeDirection(e) {
    switch (e.keyCode) {
        case 37: // Клавиша влево
            if (direction != 'x+') {
                direction = 'x-'
            }
            break;
        case 38: // Клавиша вверх
            if (direction != 'y-') {
                direction = 'y+'
            }
            break;
        case 39: // Клавиша вправо
            if (direction != 'x-') {
                direction = 'x+'
            }
            break;
        case 40: // Клавиша вниз
            if (direction != 'y+') {
                direction = 'y-'
            }
            break;
    }
}

/**
 * Функция завершения игры
 */
function finishTheGame() {
    gameIsRunning = false;
    clearInterval(snakeTimer);
    clearInterval(snakeTimer);
    alert('Вы проиграли! Ваш результат: ' + score.toString()); // todo убрать toString() - здесь необязателен
}

/**
 * Новая игра
 */
function refreshGame() {
    location.reload();
}

// Инициализация
window.onload = init;