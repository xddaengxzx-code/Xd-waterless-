// XD Waterless Booking System
let bookingData = {
    carSize: null,
    carType: null,
    package: null,
    basePrice: 0,
    addons: [],
    addonTotal: 0,
    total: 0,
    deposit: 0
};

// Car Selection
document.querySelectorAll('.car-card').forEach(card => {
    card.addEventListener('click', function() {
        // Remove previous selection
        document.querySelectorAll('.car-card').forEach(c => c.classList.remove('selected'));
        
        // Select this
        this.classList.add('selected');
        
        // Save data
        bookingData.carSize = this.dataset.size;
        bookingData.carType = this.querySelector('h4').textContent;
        bookingData.quickPrice = parseInt(this.dataset.quick);
        bookingData.signaturePrice = parseInt(this.dataset.signature);
        
        // Update package prices display
        document.getElementById('quick-price').textContent = 'RM' + bookingData.quickPrice;
        document.getElementById('signature-price').textContent = 'RM' + bookingData.signaturePrice;
        
        // Go to next step
        setTimeout(() => goToStep(2), 300);
    });
});

// Package Selection
document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('click', function() {
        document.querySelectorAll('.package-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        
        bookingData.package = this.dataset.package;
        bookingData.basePrice = this.dataset.package === 'quick' ? bookingData.quickPrice : bookingData.signaturePrice;
        
        calculateTotal();
        setTimeout(() => goToStep(3), 300);
    });
});

// Add-ons Selection
document.querySelectorAll('.addon-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const addon = {
            name: this.parentElement.querySelector('.addon-name').textContent,
            price: parseInt(this.dataset.price)
        };
        
        if (this.checked) {
            bookingData.addons.push(addon);
        } else {
            bookingData.addons = bookingData.addons.filter(a => a.name !== addon.name);
        }
        
        calculateTotal();
        updateSummary();
    });
});

// Calculate Total Price
function calculateTotal() {
    bookingData.addonTotal = bookingData.addons.reduce((sum, addon) => sum + addon.price, 0);
    bookingData.total = bookingData.basePrice + bookingData.addonTotal;
    bookingData.deposit = Math.round(bookingData.total * 0.5);
    
    document.getElementById('total-amount').textContent = 'RM' + bookingData.total;
    document.getElementById('deposit-amount').textContent = bookingData.deposit;
}

// Update Summary Display
function updateSummary() {
    const summaryDiv = document.getElementById('booking-summary');
    
    if (!bookingData.carSize) {
        summaryDiv.innerHTML = '<p>Sila pilih kereta dan pakej dahulu</p>';
        return;
    }
    
    let html = `
        <p><strong>Kereta:</strong> ${bookingData.carType}</p>
        <p><strong>Pakej:</strong> ${bookingData.package === 'quick' ? 'Quick Wash' : 'Signature Detail'}</p>
        <p><strong>Harga Asas:</strong> RM${bookingData.basePrice}</p>
    `;
    
    if (bookingData.addons.length > 0) {
        html += '<p><strong>Add-ons:</strong></p><ul style="margin-left: 20px; margin-bottom: 10px;">';
        bookingData.addons.forEach(addon => {
            html += `<li>${addon.name} (+RM${addon.price})</li>`;
        });
        html += '</ul>';
    }
    
    summaryDiv.innerHTML = html;
}

// Navigation
function goToStep(stepNum) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => step.classList.add('hidden'));
    
    // Show target step
    document.getElementById('step' + stepNum).classList.remove('hidden');
    
    // Scroll to booking section
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    
    // If going to summary step, update it
    if (stepNum === 4) {
        updateSummary();
    }
}

function backToStep(stepNum) {
    goToStep(stepNum);
}

// Submit to WhatsApp
function submitBooking(e) {
    e.preventDefault();
    
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const location = document.getElementById('customer-location').value;
    const datetime = document.getElementById('booking-datetime').value;
    const notes = document.getElementById('customer-notes').value;
    
    if (!bookingData.carSize || !bookingData.package) {
        alert('Sila pilih saiz kereta dan pakej dahulu!');
        return;
    }
    
    // Format message
    let message = `*Tempahan XD Waterless*\n\n`;
    message += `*Nama:* ${name}\n`;
    message += `*Telefon:* ${phone}\n`;
    message += `*Lokasi:* ${location}\n`;
    message += `*Tarikh/Masa:* ${datetime}\n\n`;
    
    message += `*Detail Cuci:*\n`;
    message += `Kereta: ${bookingData.carType}\n`;
    message += `Pakej: ${bookingData.package === 'quick' ? 'Quick Wash' : 'Signature Detail'}\n`;
    message += `Harga: RM${bookingData.basePrice}\n`;
    
    if (bookingData.addons.length > 0) {
        message += `\n*Add-ons:*\n`;
        bookingData.addons.forEach(addon => {
            message += `- ${addon.name}: RM${addon.price}\n`;
        });
    }
    
    message += `\n*Jumlah: RM${bookingData.total}*\n`;
    message += `*Deposit (50%): RM${bookingData.deposit}*\n\n`;
    
    if (notes) {
        message += `*Nota:* ${notes}\n\n`;
    }
    
    message += `Saya confirm booking ini.`;
    
    // Encode and open WhatsApp
    const encodedMsg = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/60167003569?text=${encodedMsg}`;
    
    window.open(whatsappURL, '_blank');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('XD Waterless Booking System Ready');
    
    // Set min datetime to now
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.getElementById('booking-datetime').min = now.toISOString().slice(0,16);
});
