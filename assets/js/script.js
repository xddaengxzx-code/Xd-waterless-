const phone = "60167003569";

const pricing = {
kompak:{lasak:35,gempak:60,terbaik:95,lowkey:120,highkey:210,unlocked:330},
sedan:{lasak:45,gempak:75,terbaik:115,lowkey:160,highkey:270,unlocked:410},
suv:{lasak:55,gempak:90,terbaik:140,lowkey:200,highkey:330,unlocked:510},
mpv:{lasak:65,gempak:110,terbaik:165,lowkey:240,highkey:410,unlocked:610}
};

let currentSize="kompak";
let addonTotal = 0;

// Load sound (pastikan file click.wav ada di assets/sounds/)
const clickSound = new Audio('assets/sounds/click.wav');

document.querySelectorAll(".vehicle").forEach(btn=>{
btn.addEventListener("click",()=>{
document.querySelectorAll(".vehicle").forEach(b=>b.classList.remove("active"));
btn.classList.add("active");
currentSize=btn.dataset.size;
updatePrices();
playSound();
});
});

function updatePrices(){
const p=pricing[currentSize];
document.getElementById("lasakPrice").innerText="RM"+p.lasak;
document.getElementById("gempakPrice").innerText="RM"+p.gempak;
document.getElementById("terbaikPrice").innerText="RM"+p.terbaik;
document.getElementById("lowkeyPrice").innerText="RM"+p.lowkey;
document.getElementById("highkeyPrice").innerText="RM"+p.highkey;
document.getElementById("unlockedPrice").innerText="RM"+p.unlocked;
updateAddonTotal(); // Update add-on total too
}

function playSound(){
clickSound.currentTime = 0; // Reset sound
clickSound.play().catch(e => console.log("Sound play failed:", e)); // Handle autoplay issues
}

// Add-on checkboxes
document.querySelectorAll(".addon-item input").forEach(checkbox=>{
checkbox.addEventListener("change", updateAddonTotal);
});

function updateAddonTotal(){
addonTotal = 0;
document.querySelectorAll(".addon-item input:checked").forEach(cb=>{
addonTotal += parseInt(cb.dataset.price);
});
document.getElementById("addonTotal").innerText = addonTotal;
}

document.querySelectorAll(".btn-book").forEach(btn=>{
btn.addEventListener("click",()=>{
const pack=btn.dataset.package;
const basePrice=pricing[currentSize][pack.split(" ")[0].toLowerCase()];
const totalPrice = basePrice + addonTotal;
let msg=`XD WATERLESS\n`;
msg+=`Package: ${pack}\n`;
msg+=`Saiz: ${currentSize}\n`;
msg+=`Harga Package: RM${basePrice}\n`;
if(addonTotal > 0){
msg+=`Add-ons: RM${addonTotal}\n`;
}
msg+=`Total: RM${totalPrice}\n\n`;
msg+=`Nama:\nAlamat:\nTarikh & masa:\n\n`;
msg+=`Saya bayar deposit minimum RM20 untuk lock slot.`;
window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,"_blank");
playSound();
});
});

updatePrices();
