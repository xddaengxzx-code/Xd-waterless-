const phone = "60167003569";

const pricing = {
    kompak: {
        lasak: 35,
        gempak: 60,
        terbaik: 95,
        lowkey: 120,
        highkey: 210,
        unlocked: 330
    },
    sedan: {
        lasak: 45,
        gempak: 75,
        terbaik: 115,
        lowkey: 160,
        highkey: 270,
        unlocked: 410
    },
    suv: {
        lasak: 55,
        gempak: 90,
        terbaik: 140,
        lowkey: 200,
        highkey: 330,
        unlocked: 510
    },
    mpv: {
        lasak: 65,
        gempak: 110,
        terbaik: 165,
        lowkey: 240,
        highkey: 410,
        unlocked: 610
    }
};

let currentSize = "kompak";

// Vehicle selector
document.querySelectorAll(".vehicle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove active from all
        document.querySelectorAll(".vehicle-btn").forEach(b => {
            b.classList.remove("active");
        });
        
        // Add active to clicked
        btn.classList.add("active");
        currentSize = btn.dataset.size;
        
        // Update prices with animation
        updatePrices();
    });
});

function updatePrices() {
    const p = pricing[currentSize];
    const priceElements = {
        lasakPrice: p.lasak,
        gempakPrice: p.gempak,
        terbaikPrice: p.terbaik,
        lowkeyPrice: p.lowkey,
        highkeyPrice: p.highkey,
        unlockedPrice: p.unlocked
    };

    Object.entries(priceElements).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (el) {
            // Add updating class for animation
            el.classList.add("updating");
            
            setTimeout(() => {
                el.textContent = value;
                el.classList.remove("updating");
            }, 150);
        }
    });
}

// Booking buttons
document.querySelectorAll(".btn-book").forEach(btn => {
    btn.addEventListener("click", () => {
        const pack = btn.dataset.package;
        let price;
        
        // Get price based on package
        if (pack.includes("ONZ")) {
            const tier = pack.split(" ")[1].toLowerCase();
            price = pricing[currentSize][tier];
        } else {
            price = pricing[currentSize][pack.toLowerCase()];
        }

        // Build WhatsApp message
        let msg = `*XD WATERLESS BOOKING*\n`;
        msg += `━━━━━━━━━━━━━━━\n\n`;
        msg += `📦 Package: *${pack}*\n`;
        msg += `🚗 Vehicle: *${currentSize.toUpperCase()}*\n`;
        msg += `💰 Price: *RM${price}*\n\n`;
        msg += `━━━━━━━━━━━━━━━\n\n`;
        msg += `Please fill in:\n`;
        msg += `👤 Name:\n`;
        msg += `📍 Address/Location:\n`;
        msg += `📅 Preferred Date:\n`;
        msg += `⏰ Preferred Time:\n\n`;
        msg += `💳 I'll pay RM20 deposit to lock my slot.`;

        // Open WhatsApp
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
    });
});

// Initialize
updatePrices();

// Add scroll reveal effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll(".package-card, .onz-card, .premium-card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
});
