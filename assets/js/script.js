const prices = {

kompak:{lasak:45,gempak:80,terbaik:95},

sedan:{lasak:55,gempak:95,terbaik:110},

suv:{lasak:65,gempak:110,terbaik:120},

mpv:{lasak:75,gempak:130,terbaik:140}

}

let currentSize="kompak"

const vehicles=document.querySelectorAll(".vehicle")

vehicles.forEach(btn=>{
btn.addEventListener("click",()=>{

vehicles.forEach(v=>v.classList.remove("active"))
btn.classList.add("active")

currentSize=btn.dataset.size

updatePrices()

})
})

function updatePrices(){

document.getElementById("lasakPrice").innerText=prices[currentSize].lasak
document.getElementById("gempakPrice").innerText=prices[currentSize].gempak
document.getElementById("terbaikPrice").innerText=prices[currentSize].terbaik

}

function book(pkg){

const phone="60167003569"

const text=`Booking XD Waterless
Package: ${pkg}
Vehicle: ${currentSize}`

const url=`https://wa.me/${phone}?text=${encodeURIComponent(text)}`

window.open(url)

}

updatePrices()
