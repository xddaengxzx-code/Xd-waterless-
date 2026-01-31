// XD WATERLESS - Pricing & Booking System
// Semua harga mengikut saiz

const PRICES = {
    kompak:  { quick: 30, signature: 60, elite: 180 },
    sedan:   { quick: 35, signature: 70, elite: 210 },
    suv:     { quick: 45, signature: 85, elite: 255 },
    mpv:     { quick: 55, signature: 100, elite: 300 }
};

const SIZE_NAMES = {
    kompak: 'Kompak',
    sedan: 'Sedan/SUV Kecil',
    suv: 'SUV Besar',
    mpv: 'MPV'
};

const SIZE_EXAMPLES = {
    kompak: 'Myvi, Axia, Bezza, Saga',
    sedan: 'City, Vios, HR-V, X50, Aruz',
    suv: 'CR-V, CX-5, X70, Fortuner',
    mpv: 'Alphard, Vellfire, Alza, Exora'
};

let currentSize = 'kompak';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setSize('kompak');
    initSticky();
    console.log('XD Waterless - Ready');
});

// Set Size Function - Update semua harga
function setSize(size) {
    currentSize = size;
    const price = PRICES[size];
    
    // Update active tab
    document.querySelectorAll('.size-tab').forEach(tab => {
        tab.classList.remove('active');
        if(tab.dataset.size === size) tab.classList.add('active');
    });
    
    // Update QUICK price
    animateValue('quick-price', price.quick);
    
    // Update SIGNATURE price
    animateValue('sig-price', price.signature);
    
    // Update ELITE price & math
    animateValue('elite-price', price.elite);
    document.querySelector('.elite-single').textContent = price.signature;
    document.querySelector('.elite-total').textContent = price.signature * 6;
    document.getElementById('elite-save').textContent = (price.signature * 6) - price.elite;
    
    // Update sticky CTA
    document.getElementById('stickyPrice').textContent = 'RM' + price.signature;
}

// Animate number change
function animateValue(id, newVal) {
    const el = document.getElementById(id);
    if (!el) return;
    
    el.style.opacity = '0';
    el.style.transform = 'translateY(-10px)';
    el.style.transition = 'all 0.2s ease';
    
    setTimeout(() => {
        el.textContent = newVal;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }, 200);
}

// Booking functions
function bookSize(type) {
    const price = PRICES[currentSize][type];
    const sizeName = SIZE_NAMES[currentSize];
    const examples = SIZE_EXAMPLES[currentSize];
    const deposit = Math.ceil(price / 2);
    
    let message = '';
    const greeting = `Hai XD Waterless,`;
    
    if (type === 'quick') {
        message = `${greeting}%0A%0ASaya nak book QUICK untuk kereta ${sizeName}.%0A(Contoh: ${examples})%0A%0AHarga: RM${price}%0ADeposit 50%: RM${deposit}%0A%0ANama: %0APlate No: %0ALokasi: %0ATarikh & Masa: `;
    } else if (type === 'signature') {
        message = `${greeting}%0A%0ASaya nak book SIGNATURE untuk kereta ${sizeName}.%0A(Contoh: ${examples})%0A%0AHarga: RM${price}%0ADeposit 50%: RM${deposit}%0A%0ANama: %0APlate No: %0ALokasi: %0ATarikh & Masa: `;
    } else if (type === 'elite') {
        message = `${greeting}%0A%0ASaya nak join ELITE CLUB untuk ${sizeName}.%0A%0AHarga: RM${price} (6 sesi)%0ADeposit: RM${deposit}%0A%0ASyarat: Pernah guna SIGNATURE sekali.%0A%0ANama: %0APlate No: %0ABoleh explain cara bayar?`;
    }
    
    window.open(`https://wa.me/60167003569?text=${message}`, '_blank');
}

function bookCurrentSelection() {
    bookSize('signature');
}

// Sticky CTA logic
function initSticky() {
    const sticky = document.getElementById('stickyCta');
    const hero = document.querySelector('.confirm-header');
    
    if (!sticky || !hero) return;
    
    const heroHeight = hero.offsetHeight;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > heroHeight + 100) {
            sticky.style.display = 'block';
            setTimeout(() => {
                sticky.style.opacity = '1';
                sticky.style.transform = 'translateY(0)';
            }, 10);
        } else {
            sticky.style.opacity = '0';
            sticky.style.transform = 'translateY(100%)';
            setTimeout(() => {
                sticky.style.display = 'none';
            }, 300);
        }
    });
    
    sticky.style.transition = 'opacity 0.3s, transform 0.3s';
    sticky.style.opacity = '0';
    sticky.style.transform = 'translateY(100%)';
}

// Button click effects
document.querySelectorAll('.btn-main, .btn-secondary, .btn-elite').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});
