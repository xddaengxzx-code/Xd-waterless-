const phone = "60167003569";

const pricing = {
    kompak: { lasak: 35, gempak: 60, terbaik: 95, lowkey: 120, highkey: 210, unlocked: 330 },
    sedan: { lasak: 45, gempak: 75, terbaik: 115, lowkey: 160, highkey: 270, unlocked: 410 },
    suv: { lasak: 55, gempak: 90, terbaik: 140, lowkey: 200, highkey: 330, unlocked: 510 },
    mpv: { lasak: 65, gempak: 110, terbaik: 165, lowkey: 240, highkey: 410, unlocked: 610 }
};

const vehicleLabels = {
    kompak: "Kompak (Myvi, Axia, Bezza)",
    sedan: "Sedan (City, Vios, Civic)",
    suv: "SUV (CR-V, X70, Harrier)",
    mpv: "MPV (Alphard, Vellfire)"
};

let currentSize = "kompak";

// Vehicle selection
document.querySelectorAll('.vehicle-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.vehicle-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        currentSize = card.dataset.size;
        updatePrices();
        
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
        
        const start = parseInt(el.textContent.replace(/\D/g, '')) || 0;
        const duration = 400;
        const startTime = performance.now();
        
        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
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

// Generate WhatsApp message
function generateMessage(packageType, tier) {
    const p = pricing[currentSize];
    const isOnz = packageType === "ONZ";
    let msg = "";
    
    if (isOnz) {
        // ONZ Club Membership
        const onzPrices = { lowkey: p.lowkey, highkey: p.highkey, unlocked: p.unlocked };
        const savings = { lowkey: 20, highkey: 30, unlocked: 50 };
        const singlePrices = { lowkey: p.lasak * 4, highkey: p.gempak * 4, unlocked: p.terbaik * 4 };
        const sessions = { lowkey: "Lasak", highkey: "Gempak", unlocked: "Terbaik" };
        
        msg = `🔒 *ONZ CLUB MEMBERSHIP*\n`;
        msg += `━━━━━━━━━━━━━━━━━━━━\n\n`;
        msg += `📋 *Plan:* ${tier.toUpperCase()}\n`;
        msg += `🚗 *Vehicle:* ${vehicleLabels[currentSize]}\n`;
        msg += `📦 *Includes:* 4× ${sessions[tier]} sessions\n`;
        msg += `⏱ *Valid:* 12 months\n\n`;
        msg += `💰 *Pricing:*\n`;
        msg += `   Normal: RM${singlePrices[tier]}\n`;
        msg += `   ONZ: RM${onzPrices[tier]}\n`;
        msg += `   *You Save: RM${savings[tier]}*\n\n`;
        msg += `━━━━━━━━━━━━━━━━━━━━\n\n`;
        msg += `👤 *Your Details:*\n`;
        msg += `Name: \n`;
        msg += `Phone: \n`;
        msg += `Address: \n\n`;
        msg += `💳 *Full payment RM${onzPrices[tier]} to activate.*\n\n`;
        msg += `Send details to join ONZ Club.`;
        
    } else {
        // Single Package
        const singlePrices = { LASAK: p.lasak, GEMPAK: p.gempak, TERBAIK: p.terbaik };
        const durations = { LASAK: "30 min", GEMPAK: "45 min", TERBAIK: "60 min" };
        
        msg = `⚡ *XD WATERLESS BOOKING*\n`;
        msg += `━━━━━━━━━━━━━━━━━━━━\n\n`;
        msg += `📦 *Package:* ${packageType}\n`;
        msg += `🚗 *Vehicle:* ${vehicleLabels[currentSize]}\n`;
        msg += `⏱ *Duration:* ${durations[packageType]}\n`;
        msg += `💰 *Price:* RM${singlePrices[packageType]}\n\n`;
        msg += `━━━━━━━━━━━━━━━━━━━━\n\n`;
        msg += `👤 *Your Details:*\n`;
        msg += `Name: \n`;
        msg += `Location: \n`;
        msg += `Date: \n`;
        msg += `Time: \n\n`;
        msg += `💳 *Deposit RM20 to lock slot.*\n\n`;
        msg += `Reply to confirm booking.`;
    }
    
    return msg;
}

// Booking handler
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
        
        // Parse package
        const pack = this.dataset.package;
        let msg;
        
        if (pack.includes("ONZ")) {
            const tier = pack.split(" ")[1].toLowerCase();
            msg = generateMessage("ONZ", tier);
        } else {
            msg = generateMessage(pack, null);
        }

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
