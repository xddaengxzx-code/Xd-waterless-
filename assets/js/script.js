const phone = "60167003569";

const pricing = {
    kompak: { lasak: 35, gempak: 60, terbaik: 95, lowkey: 120, highkey: 210, unlocked: 330 },
    sedan: { lasak: 45, gempak: 75, terbaik: 115, lowkey: 160, highkey: 270, unlocked: 410 },
    suv: { lasak: 55, gempak: 90, terbaik: 140, lowkey: 200, highkey: 330, unlocked: 510 },
    mpv: { lasak: 65, gempak: 110, terbaik: 165, lowkey: 240, highkey: 410, unlocked: 610 }
};

let currentSize = "kompak";
let slotCount = 3;

// WebGL Background
function initWebGL() {
    const canvas = document.getElementById('webgl-bg');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
        console.log('WebGL not supported, falling back to CSS');
        return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Simple shader for liquid effect
    const vertexShader = `
        attribute vec2 position;
        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `;
    
    const fragmentShader = `
        precision mediump float;
        uniform float time;
        uniform vec2 resolution;
        
        void main() {
            vec2 uv = gl_FragCoord.xy / resolution;
            float wave = sin(uv.x * 10.0 + time) * 0.1;
            wave += sin(uv.y * 8.0 + time * 0.5) * 0.1;
            
            vec3 color = vec3(0.0, 0.0, 0.0);
            color += vec3(0.78, 1.0, 0.0) * wave * 0.3; // neon green
            color += vec3(0.0, 0.94, 1.0) * sin(time * 0.5) * 0.05; // cyan accent
            
            gl_FragColor = vec4(color, 1.0);
        }
    `;
    
    // Compile shaders and create program (simplified)
    // In production, use Three.js or similar
    
    // Fallback: CSS animation already handles visual
}

// Cursor Trail
function initCursorTrail() {
    const trail = document.getElementById('cursorTrail');
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trail.style.left = trailX - 10 + 'px';
        trail.style.top = trailY - 10 + 'px';
        
        requestAnimationFrame(animate);
    }
    animate();
}

// Text Scramble Effect
function scrambleText(element, finalText) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
    let iterations = 0;
    
    const interval = setInterval(() => {
        element.innerText = finalText
            .split('')
            .map((char, index) => {
                if (index < iterations) return finalText[index];
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        if (iterations >= finalText.length) clearInterval(interval);
        iterations += 1/3;
    }, 30);
}

// Live Clock
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    document.getElementById('liveTime').textContent = time;
}

// Slot Counter Animation
function updateSlots() {
    const el = document.getElementById('slotCount');
    el.classList.add('updating');
    setTimeout(() => el.classList.remove('updating'), 300);
}

// Vehicle Selection
document.querySelectorAll('.holo-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.holo-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        currentSize = card.dataset.size;
        
        // Update display with scramble effect
        const display = document.getElementById('activeClass');
        scrambleText(display, currentSize.toUpperCase());
        
        updatePrices();
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
        if (el) {
            el.classList.add('price-updating');
            setTimeout(() => {
                // Typewriter effect for price
                let current = 0;
                const increment = Math.ceil(value / 10);
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= value) {
                        current = value;
                        clearInterval(timer);
                        el.classList.remove('price-updating');
                    }
                    el.textContent = 'RM' + current;
                }, 30);
            }, 100);
        }
    });
}

// Booking with glitch effect
document.querySelectorAll('.cyber-btn, .tower-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Glitch animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => this.style.transform = 'scale(1)', 100);
        
        const pack = this.dataset.package;
        let price;
        
        if (pack.includes("ONZ")) {
            const tier = pack.split(" ")[1].toLowerCase();
            price = pricing[currentSize][tier];
        } else {
            price = pricing[currentSize][pack.toLowerCase()];
        }

        const vehicleNames = {
            kompak: "KOMPAK_CLASS",
            sedan: "SEDAN_CLASS", 
            suv: "SUV_CLASS",
            mpv: "MPV_CLASS"
        };

        let msg = `⚡ XD_WATERLESS // BOOKING_REQUEST\n`;
        msg += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        msg += `📦 PACKAGE: ${pack}\n`;
        msg += `🚗 VEHICLE: ${vehicleNames[currentSize]}\n`;
        msg += `💰 PRICE: RM${price}\n\n`;
        msg += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        msg += `👤 OPERATOR_DATA:\n`;
        msg += `NAME: [INPUT_REQUIRED]\n`;
        msg += `LOCATION: [INPUT_REQUIRED]\n`;
        msg += `TIMESTAMP: [INPUT_REQUIRED]\n\n`;
        msg += `🔒 DEPOSIT_RM20_TO_SECURE_SLOT`;

        setTimeout(() => {
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
        }, 500);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initWebGL();
    initCursorTrail();
    setInterval(updateClock, 1000);
    setInterval(updateSlots, 5000);
    
    // Initial scramble
    setTimeout(() => {
        const el = document.getElementById('logoScramble');
        scrambleText(el, 'SYSTEM.ONLINE');
    }, 1000);
    
    // Random slot fluctuation
    setInterval(() => {
        if (Math.random() > 0.7 && slotCount > 1) {
            slotCount--;
            document.getElementById('slotCount').textContent = '0' + slotCount;
        }
    }, 10000);
    
    updatePrices();
});

// Window resize
window.addEventListener('resize', () => {
    const canvas = document.getElementById('webgl-bg');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});
