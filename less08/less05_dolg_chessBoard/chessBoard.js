'use strict';

function getChessBoard() {
	var chessBoard = document.createElement('table'),
			letters = ',A,B,C,D,E,F,G,H,'.split(','),
			digits = ',1,2,3,4,5,6,7,8,'.split(',').reverse(),
			num = 10,
			row,
			cell;

	for (var i = 0; i < num; i++) {
		row = document.createElement('tr'); // создаем строку
		chessBoard.appendChild(row);

		for (var j = 0; j < num; j++) { 
			cell = document.createElement('td'); // создаем столбец
			row.appendChild(cell);

			cell.className = setPieces(i, letters[j]); // расставляем фигуры

			if ( (i === 0 || i === (num - 1)) || (j === 0 || j === (num - 1)) ) {
				cell.className = 'outer';
				cell.innerHTML = letters[j] || digits[i]; // буквы/цифры по бокам
			} else {
					if ((i + j) % 2) {
					cell.style.backgroundColor = 'dimgray'; // закрашываем четные клетки
          }
				}
				// console.log('i = ' + i);
				// console.log('letters[' + j + '] = ' + letters[j]);
			}
		}
	return chessBoard;		
}

function setPieces(row, col) {
    // расставляем пешки
    if (row === 2 && col !== '') { // верхние
        return 'black-pawns';
    }
    if (row === 7 && col !== '') { // нижние
        return 'white-pawns';
    }
    // расставляем другие фигуры
    if (row === 1) { // верхние
    	switch(col) {
    		case 'A': return 'black-rook';
    		case 'B': return 'black-knight';
    		case 'C': return 'black-bishop';
    		case 'D': return 'black-queen';
    		case 'E': return 'black-king';
    		case 'F': return 'black-bishop';
    		case 'G': return 'black-knight';
    		case 'H': return 'black-rook';
    	}
    }

    if (row === 8) { // нижние
    	switch(col) {
    		case 'A': return 'white-rook';
    		case 'B': return 'white-knight';
    		case 'C': return 'white-bishop';
    		case 'D': return 'white-queen';
    		case 'E': return 'white-king';
    		case 'F': return 'white-bishop';
    		case 'G': return 'white-knight';
    		case 'H': return 'white-rook';
    	}
    }
}

var div = document.getElementById('wrap');

div.appendChild(getChessBoard());