document.addEventListener("DOMContentLoaded", function () {

const prices = {

kompak: {
lasak: 45,
gempak: 80,
terbaik: 95
},

sedan: {
lasak: 55,
gempak: 95,
terbaik: 110
},

suv: {
lasak: 65,
gempak: 110,
terbaik: 120
},

mpv: {
lasak: 75,
gempak: 130,
terbaik: 140
}

};


let currentSize = "kompak";


const vehicles = document.querySelectorAll(".vehicle");


vehicles.forEach(function(btn){

btn.addEventListener("click", function(){

vehicles.forEach(function(v){
v.classList.remove("active");
});

btn.classList.add("active");

currentSize = btn.dataset.size;

updatePrice();

});

});


function updatePrice(){

const lasak = document.getElementById("lasakPrice");
const gempak = document.getElementById("gempakPrice");
const terbaik = document.getElementById("terbaikPrice");

if(!lasak || !gempak || !terbaik) return;

lasak.textContent = prices[currentSize].lasak;
gempak.textContent = prices[currentSize].gempak;
terbaik.textContent = prices[currentSize].terbaik;

}


window.book = function(pkg){

const phone = "60167003569";

const message =
`Booking XD Waterless
Package: ${pkg}
Vehicle: ${currentSize}`;

const url =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");

};


updatePrice();

});
