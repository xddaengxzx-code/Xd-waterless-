// Pricing Data Structure
const pricing = {
    kompak: {
        vehicle: "Myvi, Axia, Bezza, Saga",
        quick: { price: 35, time: 30, code: "QW-KOMPAK" },
        signature: { price: 60, time: 60, code: "SIG-KOMPAK" },
        elite: { price: 220, savings: 20, code: "ELITE-KOMPAK" }
    },
    sedan: {
        vehicle: "City, Vios, HR-V, X50, Aruz",
        quick: { price: 45, time: 35, code: "QW-SEDAN" },
        signature: { price: 75, time: 70, code: "SIG-SEDAN" },
        elite: { price: 280, savings: 20, code: "ELITE-SEDAN" }
    },
    suv: {
        vehicle: "CR-V, CX-5, X70, Fortuner",
        quick: { price: 55, time: 40, code: "QW-SUVB" },
        signature: { price: 90, time: 80, code: "SIG-SUVB" },
        elite: { price: 340, savings: 20, code: "ELITE-SUVB" }
    },
    mpv: {
        vehicle: "Alphard, Vellfire, Estima",
        quick: { price: 65, time: 45, code: "QW-MPV" },
        signature: { price: 110, time: 90, code: "SIG-MPV" },
        elite: { price: 420, savings: 20, code: "ELITE-MPV" }
    }
};

// State
let currentSize = 'kompak';
const phoneNumber = '60167003569';
const tagline = "No hose, no buckets, just quick shine!";

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    initVehicleTabs();
    initMobileMenu();
    initBookingButtons();
    updatePrices();
    initSmoothScroll();
});

// Vehicle Tabs
function initVehicleTabs() {
    const tabs = document.querySelectorAll('.vehicle-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentSize = tab.dataset.size;
            updatePrices();
        });
    });
}

// Update Prices based on selection
function updatePrices() {
    const data = pricing[currentSize];
    
    // Update Quick Wash
    const quickPrice = document.querySelector('[data-service="quick"] .price');
    const quickTime = document.querySelector('[data-service="quick"] [data-time]');
    if (quickPrice) {
        quickPrice.textContent = data.quick.price;
        quickPrice.dataset.base = data.quick.price;
    }
    if (quickTime) {
        quickTime.textContent = data.quick.time;
        quickTime.dataset.time = data.quick.time;
    }
    
    // Update Signature
    const sigPrice = document.querySelector('[data-service="signature"] .price');
    const sigTime = document.querySelector('[data-service="signature"] [data-time]');
    if (sigPrice) {
        sigPrice.textContent = data.signature.price;
        sigPrice.dataset.base = data.signature.price;
    }
    if (sigTime) {
        sigTime.textContent = data.signature.time;
        sigTime.dataset.time = data.signature.time;
    }
    
    // Update Elite
    const elitePrice = document.querySelector('.elite-price .price');
    const eliteVehicle = document.getElementById('elite-vehicle');
    if (elitePrice) {
        elitePrice.textContent = data.elite.price;
        elitePrice.dataset.base = data.elite.price;
    }
    if (eliteVehicle) {
        eliteVehicle.textContent = capitalize(currentSize);
    }
}

// Initialize Booking Buttons
function initBookingButtons() {
    const buttons = document.querySelectorAll('.btn-book, .btn-elite');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const service = e.target.dataset.service;
            const data = pricing[currentSize];
            let code, price, message;
            
            if (service === 'Quick Wash') {
                code = data.quick.code;
                price = data.quick.price;
                message = generateWhatsAppMessage(service, code, price, data.vehicle);
            } else if (service === 'Signature Detail') {
                code = data.signature.code;
                price = data.signature.price;
                message = generateWhatsAppMessage(service, code, price, data.vehicle);
            } else if (service === 'Elite Club') {
                code = data.elite.code;
                price = data.elite.price;
                message = generateWhatsAppMessage(service, code, price, data.vehicle, true);
            }
            
            openWhatsApp(message);
        });
    });
}

// Generate WhatsApp Message
function generateWhatsAppMessage(service, code, price, vehicle, isElite = false) {
    const date = new Date().toLocaleDateString('ms-MY');
    
    let text = `*XD WATERLESS* %0A`;
    text += `⚡ ${tagline} %0A%0A`;
    text += `📅 Tarikh: ${date}%0A`;
    text += `🚗 Servis: ${service}%0A`;
    text += `📋 Kod: ${code}%0A`;
    text += `🚙 Kenderaan: ${vehicle}%0A`;
    text += `💰 Harga: RM${price}%0A%0A`;
    
    if (isElite) {
        text += `*ELITE CLUB BENEFITS:*%0A`;
        text += `• 4x Sesi Signature%0A`;
        text += `• Free Merchandise%0A`;
        text += `• Tiada expiry%0A%0A`;
    }
    
    text += `*MAKLUMAT TAMBAHAN:*%0A`;
    text += `Nama: %0A`;
    text += `Alamat penuh: %0A`;
    text += `Tarikh/Slot masa: %0A`;
    text += `Add-ons (jika ada): %0A%0A`;
    text += `Saya bayar 50% deposit untuk lock slot.`;
    
    return text;
}

// Open WhatsApp
function openWhatsApp(message) {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}

// Mobile Menu Toggle
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if (!toggle || !menu) return;
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        
        const spans = toggle.querySelectorAll('span');
        if (menu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            const spans = toggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                const offset = 120;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility
function capitalize(str) {
    if (str === 'kompak') return 'Kompak';
    if (str === 'sedan') return 'Sedan/SUV Kecil';
    if (str === 'suv') return 'SUV Besar';
    if (str === 'mpv') return 'MPV/Van';
    return str;
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
