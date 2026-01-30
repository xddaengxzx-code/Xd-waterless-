// Pricing Data
const PRICES = {
    kompak:  { quick: 30, signature: 60, elite: 180 },
    sedan:   { quick: 35, signature: 70, elite: 210 },
    suv:     { quick: 45, signature: 85, elite: 255 },
    mpv:     { quick: 55, signature: 100, elite: 300 }
};

let currentSize = 'kompak';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setSize('kompak'); // Default to easiest decision
    initSticky();
});

// Set Size Function
function setSize(size) {
    currentSize = size;
    const price = PRICES[size];
    
    // Update tabs
    document.querySelectorAll('.size-tab').forEach(tab => {
        tab.classList.remove('active');
        if(tab.dataset.size === size) tab.classList.add('active');
    });
    
    // Update displayed prices with animation
    animateValue('sig-price', price.signature);
    animateValue('quick-price', price.quick);
    animateValue('elite-price', price.elite);
    
    // Update Elite math
    document.querySelector('.elite-single').textContent = price.signature;
    document.querySelector('.elite-total').textContent = price.signature * 6;
    document.getElementById('elite-save').textContent = price.signature * 6 - price.elite;
    
    // Update sticky CTA
    document.getElementById('stickyPrice').textContent = 'RM' + price.signature;
    
    // Track (optional)
    console.log('Size selected:', size, 'Price:', price.signature);
}

// Animate number change
function animateValue(id, newVal) {
    const el = document.getElementById(id);
    el.style.opacity = '0';
    setTimeout(() => {
        el.textContent = newVal;
        el.style.opacity = '1';
    }, 200);
}

// Booking functions
function bookSize(type) {
    const price = PRICES[currentSize][type];
    const sizeNames = {
        kompak: 'Kompak',
        sedan: 'Sedan/SUV Kecil',
        suv: 'SUV Besar',
        mpv: 'MPV'
    };
    
    const messages = {
        signature: `Hai XD Waterless,%0A%0ASaya nak book SIGNATURE untuk kereta ${sizeNames[currentSize]}.%0A%0AHarga: RM${price}%0A%0ANama: %0APlate No: %0ALokasi: %0ATarikh/Time: `,
        quick: `Hai XD Waterless,%0A%0ASaya nak book QUICK untuk kereta ${sizeNames[currentSize]}.%0A%0AHarga: RM${price}%0A%0ANama: %0APlate No: %0ALokasi: %0ATarikh/Time: `,
        elite: `Hai XD Waterless,%0A%0ASaya nak join ELITE CLUB untuk ${sizeNames[currentSize]}.%0A%0AHarga: RM${price} (6 sesi)%0A%0ANama: %0APlate No: %0ABoleh explain cara bayar?`
    };
    
    window.open(`https://wa.me/60167003569?text=${messages[type]}`, '_blank');
}

function bookCurrentSelection() {
    bookSize('signature');
}

// Sticky CTA logic
function initSticky() {
    const sticky = document.getElementById('stickyCta');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        const heroHeight = document.querySelector('.confirm-header').offsetHeight;
        
        if (currentScroll > heroHeight) {
            sticky.style.display = 'block';
        } else {
            sticky.style.display = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// CSS transition helper
document.querySelectorAll('.size-tab, .signature-card, .quick-option, .elite-banner').forEach(el => {
    el.style.transition = 'all 0.3s ease';
});
