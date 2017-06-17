/*

 Домашнее задание
 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые
 html-теги по своему желанию. Доска должна быть разлинована соответствующим образом,
 т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы
 – латинскими буквами A, B, C, D, E, F, G, H.

 2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К-
 король, Ф – ферзь и тп., причем все фигуры должны стоять на своих местах и быть
 соответственно черными и белыми.
 3. * Заменить буквы, обозначающие фигуры картинками.

 */

/*

// Раскаршивание клеток на основе проверки цветов

var num = 9;
var colorBlack = "black";
var colorWhite = "white";
var color = null;

document.write("<table>");

for (var tr = 1; tr <= num; tr++) {

    document.write("<tr>");
    for (var td = 1; td <= num; td++) {
        color = (color == colorBlack) ? colorWhite : colorBlack;
        document.write("<td class=" + color + ">");
        document.write("&nbsp;");
        document.write("</td>");
    }
    document.write("</tr>");
}

document.write("</table><br><br>");

*/

// Раскаршивание клеток на основе проверки чет/нечет
var num = 8;
var blackCell = "black";
var wightCell = "white";
var brownCell = "brown";
var n = 8;
document.write("<table>");

for (var tr = 1; tr <= num; tr++) {
    document.write("<tr>");

    for (var td = 1; td <= num; td++) {
        if ((tr+td)%2 == 0) {
            document.write("<td class=" + blackCell + ">");
        } else {document.write("<td class=" + wightCell + ">");}
        document.write(td);
        document.write("</td>");
    }

    document.write("</tr>");
}

document.write("</table>");