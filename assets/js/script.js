document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const vehicleButtons = document.querySelectorAll('.vehicle');
    const lasakPriceSpan = document.getElementById('lasakPrice');
    const gempakPriceSpan = document.getElementById('gempakPrice');
    const terbaikPriceSpan = document.getElementById('terbaikPrice');

    // Base prices (for Kompak)
    const basePrices = {
        lasak: 45,
        gempak: 80,
        terbaik: 95
    };

    // Price adjustments for other vehicles
    const priceAddOn = {
        kompak:  { lasak: 0, gempak: 0, terbaik: 0 },
        sedan:   { lasak: 5, gempak: 5, terbaik: 5 },
        suv:     { lasak: 10, gempak: 10, terbaik: 10 },
        mpv:     { lasak: 15, gempak: 15, terbaik: 15 }
    };

    // Get currently selected vehicle
    function getSelectedVehicle() {
        const activeBtn = document.querySelector('.vehicle.active');
        return activeBtn ? activeBtn.dataset.size : 'kompak';
    }

    // Update price displays
    function updatePrices(vehicleSize) {
        const add = priceAddOn[vehicleSize] || priceAddOn.kompak;
        lasakPriceSpan.textContent = basePrices.lasak + add.lasak;
        gempakPriceSpan.textContent = basePrices.gempak + add.gempak;
        terbaikPriceSpan.textContent = basePrices.terbaik + add.terbaik;
    }

    // Vehicle button click handler
    vehicleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            vehicleButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updatePrices(this.dataset.size);
        });
    });

    // Initial price update
    updatePrices(getSelectedVehicle());

    // Global book function (called from onclick)
    window.book = function(packageName) {
        const vehicleSize = getSelectedVehicle();
        const vehicleDisplay = {
            kompak: 'Kompak (Axia / Myvi)',
            sedan: 'Sedan (City / Civic)',
            suv: 'SUV (X50 / CRV)',
            mpv: 'MPV (Alphard)'
        };
        const vehicleText = vehicleDisplay[vehicleSize] || vehicleSize;

        const message = `Hi XD WATERLESS, I would like to book the *${packageName}* package for my *${vehicleText}*.`;
        const whatsappURL = `https://wa.me/60167003569?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };
});
