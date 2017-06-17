/*
 Домашнее задание
 2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть
 кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок
 корзины. Корзина должна уметь считать общую сумму заказа.
 */

window.onload = function () {
    var image = document.getElementsByTagName('img');
    for (var i = 0; i < image.length; i++) {
        image[i].onclick = addToBascket;
    }
};

function addToBascket(e) {
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