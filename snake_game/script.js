// Глобальные переменные
var FIELD_SIZE_X = 20, // размер поля по x
		FIELD_SIZE_Y = 20, // размер поля по y
		SNAKE_SPEED = 300; // скорость змейки

var snake = [], // змейка
		direction = 'y+', // направление движения по y вверх
		gameIsRunning = false, //проверка запущена ли игра
		snake_timer, // таймер змейки
		food_timer, // таймер появления еды
		scope = 0; // счет

// начальная функция
function init() {
	prepareField(); // Генерация поля
	var wrap = document.getElementsByClassName('wrap').[0];
	//подгоняем размер контйенера под размер игрового поля
	if (16 * (FIELD_SIZE_X + 1) < 380) {
		wrap.style.width = '380px';
	} else {
		wrap.style.width = 16 * (FIELD_SIZE_X + 1).toString() + 'px';
	}

	// События для кнопок "Старт" и "Новая игра"
	document.getElementById('snake-start').addEventListener('click',startGame);
	document.getElementById('snake-renew').addEventListener('click',startGame);

	// Отслеживание нажатие клавиш клавиатуры
	addEventListener('keydown',changeDirection);
}

// Функция генерации поля
function prepareField() {
	var game_table = document.createElement('table');
	game_table.setAttribute('class','game-table');

	// Генерация ячеек игровой таблицы
	for (var i = 0; i < FIELD_SIZE_Y; i++) {
		var row = document.createElement('tr');
		row.className = 'game-table-row row-' + i;

		for (var j = 0; j < FIELD_SIZE_X; j++) {
			// Создаем ячейки
			var cell = document.createElement('td');
			cell.className = 'game-table-cell cell-' + i + '-' + j;
			row.appendChild(cell); // Добавляем ячейку (столбец)
		}
		game_table.appendChild(row); // Добавляем строку
	}
	document.getElementById('snake-field').appendChild(game_table); // Добавляем таблицу в div#snake-field
}

