var answer, ok;

do {
    ok = false;
    answer = +prompt(works.a00 + works.a1 + works.a2 + works.a3 + works.a4 + '-1 - Забрать деньги');
    if (answer == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, answer);
    }
} while (!ok);
switch (answer) {
    case 3: // Первое действие
        do {
            ok = false;
            answer = +prompt(works.b00 + works.b1 + works.b2 + works.b3 + works.b4 + '-1 - Забрать деньги');
            if (answer == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, answer);
            }
        } while (!ok);
        switch (answer) {
            case 4:
                do {
                    ok = false;
                    answer = +prompt(works.c00 + works.c1 + works.c2 + works.c3 + works.c4 + '-1 - Забрать деньги');
                    if (answer == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.c0, answer);
                    }
                } while (!ok);
                switch (answer) {
                    case 2: // Третье действие
                        do {
                            ok = false;
                            answer = +prompt(works.d00 + works.d1 + works.d2 + works.d3 + works.d4 + '-1 - Забрать деньги');
                            if (answer == -1) {
                                break;
                            }
                            else {
                                ok = isAnswer(works.d0, answer);
                            }
                        } while (!ok);
                        switch (answer) {
                            case 1: // Четвертое действие
                                alert('И у нас есть победитель!!! тудудуду!');
                                break;
                            case -1: // Четвертое действие
                                break;
                            default:
                                alert('Неправльный ответ!');
                        }
                        break;
                    case -1: // Третье действие
                        break;
                    default:
                        alert('Неправльный ответ!');
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Неправльный ответ!');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Неправльный ответ!');
}
alert('Спасибо за игру!');

//------------------------------------------
function isAnswer(q, answer) {
    if (isNaN(answer) || !isFinite(answer)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (answer < 1 || answer > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    else {
        return true;
    }
}