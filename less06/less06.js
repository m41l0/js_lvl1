/*
 Домашнее задание
 1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие
 картинки по указанному в src адресу.

 2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть
 кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок
 корзины. Корзина должна уметь считать общую сумму заказа.

 3. * Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой
 картинки должны быть стрелки “вперед” и “назад”, по нажатию на которые происходит замена
 изображения на следующее или предыдущее.
 */

window.onload = function () {
    var image = document.getElementsByTagName('img');
    console.log(image);
    for (var i = 0; i < image.length; i++) {
        image[i].onclick = changeBigPicture;
    }

};

function changeBigPicture(e) {
    var appDiv = document.getElementById('bigPicture'); // div для большой кратинки
    appDiv.innerHTML = '';
    var eventElement = event.target;
    console.log(eventElement);

    var imageNameParts = eventElement.id.split('_');
    var src = './img/big/' + imageNameParts[1] + '.jpg';
    var imageDomElement = document.createElement('img');
    imageDomElement.src = src;
    imageDomElement.onload = function () {alert('Картинка есть!')};
    imageDomElement.onerror = function () {alert('А нет картинки!')};
    appDiv.appendChild(imageDomElement);
};