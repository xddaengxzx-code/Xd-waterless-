const phone = "60167003569";

const pricing = {
    kompak: { lasak: 35, gempak: 60, terbaik: 95, lowkey: 120, highkey: 210, unlocked: 330 },
    sedan: { lasak: 45, gempak: 75, terbaik: 115, lowkey: 160, highkey: 270, unlocked: 410 },
    suv: { lasak: 55, gempak: 90, terbaik: 140, lowkey: 200, highkey: 330, unlocked: 510 },
    mpv: { lasak: 65, gempak: 110, terbaik: 165, lowkey: 240, highkey: 410, unlocked: 610 }
};

let currentSize = "kompak";

// Vehicle selection with smooth scroll
document.querySelectorAll('.vehicle-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.vehicle-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        currentSize = card.dataset.size;
        updatePrices();
        
        // Haptic feedback if available
        if (navigator.vibrate) navigator.vibrate(10);
    });
});

function updatePrices() {
    const p = pricing[currentSize];
    const elements = {
        lasakPrice: p.lasak,
        gempakPrice: p.gempak,
        terbaikPrice: p.terbaik,
        lowkeyPrice: p.lowkey,
        highkeyPrice: p.highkey,
        unlockedPrice: p.unlocked
    };

    Object.entries(elements).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (!el) return;
        
        el.classList.add('updating');
        
        // Smooth count animation
        const start = parseInt(el.textContent.replace(/\D/g, '')) || 0;
        const duration = 400;
        const startTime = performance.now();
        
        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const current = Math.round(start + (value - start) * ease);
            
            el.textContent = el.classList.contains('tier-price') ? 'RM' + current : current;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                el.classList.remove('updating');
            }
        }
        
        requestAnimationFrame(animate);
    });
}

// Booking with smooth transition
document.querySelectorAll('.action-btn, .tier-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Ripple effect
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size/2 + 'px';
        ripple.style.top = e.clientY - rect.top - size/2 + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
        
        // Prepare message
        const pack = this.dataset.package;
        let price;
        
        if (pack.includes("ONZ")) {
            const tier = pack.split(" ")[1].toLowerCase();
            price = pricing[currentSize][tier];
        } else {
            price = pricing[currentSize][pack.toLowerCase()];
        }

        const vehicleLabels = {
            kompak: "Kompak",
            sedan: "Sedan",
            suv: "SUV",
            mpv: "MPV"
        };

        const msg = `XD Waterless Booking\n\n` +
                   `Package: ${pack}\n` +
                   `Vehicle: ${vehicleLabels[currentSize]}\n` +
                   `Price: RM${price}\n\n` +
                   `Name:\nLocation:\nDate & Time:\n\n` +
                   `Deposit RM20 to confirm.`;

        setTimeout(() => {
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
        }, 300);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize
updatePrices();

// Smooth scroll for vehicle selector
const track = document.getElementById('vehicleTrack');
let isDown = false;
let startX;
let scrollLeft;

track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => isDown = false);
track.addEventListener('mouseup', () => isDown = false);

track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
});
