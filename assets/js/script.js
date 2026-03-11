// ===== GLOBAL VARIABLES & FUNCTIONS =====
// These are available immediately, even before DOMContentLoaded

// Price list for each vehicle size
const prices = {
    kompak: { lasak: 45, gempak: 80, terbaik: 95 },
    sedan:  { lasak: 55, gempak: 95, terbaik: 110 },
    suv:    { lasak: 65, gempak: 110, terbaik: 120 },
    mpv:    { lasak: 75, gempak: 130, terbaik: 140 }
};

// Currently selected vehicle size (default = kompak)
let currentSize = "kompak";

// Function to update the price displays on the page
function updatePrice() {
    const lasakSpan = document.getElementById("lasakPrice");
    const gempakSpan = document.getElementById("gempakPrice");
    const terbaikSpan = document.getElementById("terbaikPrice");

    // Guard: exit if elements aren't in the DOM yet
    if (!lasakSpan || !gempakSpan || !terbaikSpan) return;

    // Update text content with prices for current vehicle
    lasakSpan.textContent = prices[currentSize].lasak;
    gempakSpan.textContent = prices[currentSize].gempak;
    terbaikSpan.textContent = prices[currentSize].terbaik;
}

// Global book function (called directly from onclick in HTML)
window.book = function(pkg) {
    const phone = "60167003569";
    const message = `Booking XD Waterless\nPackage: ${pkg}\nVehicle: ${currentSize}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
};

// ===== SETUP AFTER DOM IS READY =====
document.addEventListener("DOMContentLoaded", function() {
    // Get all vehicle buttons
    const vehicles = document.querySelectorAll(".vehicle");

    // Attach click handler to each button
    vehicles.forEach(function(btn) {
        btn.addEventListener("click", function() {
            // Remove 'active' class from all buttons
            vehicles.forEach(function(v) {
                v.classList.remove("active");
            });
            // Add 'active' class to the clicked button
            btn.classList.add("active");
            // Update current size and refresh prices
            currentSize = btn.dataset.size;
            updatePrice();
        });
    });

    // Initial price display (based on default active button)
    // Find the button that already has the 'active' class (if any)
    const activeBtn = document.querySelector(".vehicle.active");
    if (activeBtn) {
        currentSize = activeBtn.dataset.size;
    }
    updatePrice();
});
