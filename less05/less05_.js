var size = 8;
// с обозначением строк и полей, поэтому суммарный
// размер таблицы будет 10х10
//$('body').append('<table id="chess"></table>');
var board = document.createElement('table');
document.body.appendChild(board);


// Готовим верхнюю и нижнюю строку с цифрами
var letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ' '];
// var headerAndFooter = $('<tr></tr>');
var headerAndFooter = document.
for (var i = 0; i < letters.length; i++) {
    headerAndFooter.append('<td class="chess_header">' + letters[i] + '</td>');
    document.body.appendChild();
}
/*
// Добавляем в таблицу основные строки
for (var i = 0; i < size; i++) {
    board.append('<tr></tr>');
    // Внутри строк добавляем столбцы
    for (var j = 0; j < size + 2; j++) {
        $(board).find('tr:last').append('<td></td>');
    }
}
// Теперь добавляем верхнюю и нижнюю строку с числами
board.append(headerAndFooter);
// а нужно добавить ещё одну такую-же строку, поэтому клонируем её
board.prepend(headerAndFooter.clone());

// Теперь пробежим по всей таблице и расставим номера строк
// в крайних левом и правом столбцах. Так как нумерация идёт в противоположном
// от нашего прохода порядке, то использую массив
var numbers = [0, 8, 7, 6, 5, 4, 3, 2, 1];
$(board).find('tr').each(function (rowNum) {
    if (rowNum !== 0 && rowNum !== 9) {
        $(this).children('td').each(function (colNum) {
            if (colNum === 0 || colNum === 9) {
                // Если это первый или последний столбец, ставим номер строки
                // и стиль заголовка
                $(this).text(numbers[rowNum]).addClass('chess_header');
            } else {
                // Ячейка внутри шахматной доски.
                // Вычисляем её положение по чётности строки/столбца и окрашиваем
                if ((rowNum % 2 === 0 && colNum % 2 === 0) || (rowNum % 2 !== 0 && colNum % 2 !== 0)) {
                    $(this).addClass('white');
                } else {
                    $(this).addClass('black');
                }
            }
        });
    }
});*/
