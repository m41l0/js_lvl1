var btn_prev = document.querySelector("#gallery .buttons .prev");
var btn_next = document.querySelector("#gallery .buttons .next");

var images = document.querySelectorAll("#gallery .photos img");
var i = 0;


btn_prev.onclick = function() {
	images[i].style.display = "none";
	i--;

	if(i < 0){
		i = images.length-1;
	}
	images[i].style.display = "block";
}


btn_next.onclick = function() {
	images[i].style.display = "none";
	i++;

	if(i >= images.length){
		i = 0;
	}
	images[i].style.display = "block";
}


var item_1 = document.querySelector(".product .buy_1");
var item_2 = document.querySelector(".product .buy_2");
var item_3 = document.querySelector(".product .buy_3");
var price_1 = 3000;
var price_2 = 200000;
var price_3 = 7000000;
var total_1 = 0;
var total_2 = 0;
var total_3 = 0;
var number_1 = 0;
var number_2 = 0;
var number_3 = 0;

item_1.onclick = function(){
	document.querySelector(".cart .count").innerHTML = number_1 + 1 + number_2 + number_3;
	number_1++;
	total_1 = number_1*price_1;
	document.querySelector(".cart .item_price").innerHTML = "Туры: " + "$" + total_1;
	total_price();
	item_1_info();
}


item_2.onclick = function(){
	document.querySelector(".cart .count").innerHTML = number_2 + 1 + number_1 + number_3;
	number_2++;
	total_2 = number_2*price_2;
	document.querySelector(".cart .item_price").innerHTML ="Автомобили: "  + "$" + total_2;
	total_price();
	item_2_info();
} 

item_3.onclick = function(){
	document.querySelector(".cart .count").innerHTML = number_3 + 1 + number_2 + number_1;
	number_3++;
	total_3 = number_3*price_3;
	document.querySelector(".cart .item_price").innerHTML ="Особняки: "  + "$" + total_3;
	total_price();
	item_3_info();
} 


function total_price(){
	var total_price = total_1 + total_2 + total_3;
	document.querySelector(".cart .total_price").innerHTML = "Общая сумма: " + "$" + total_price ;
}

function item_1_info(){
	document.querySelector(".cart .item_1").innerHTML = "Туры - " + number_1 + " шт.";
}

function item_2_info(){
	document.querySelector(".cart .item_2").innerHTML = "Автомобили - " + number_2 + " шт.";
}

function item_3_info(){
	document.querySelector(".cart .item_3").innerHTML = "Особняки - " + number_3 + " шт.";
}

var clear = document.querySelector(".cart .delete");


	clear.onclick = function total_price(){
	    location.reload();
}


