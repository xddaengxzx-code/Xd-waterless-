// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ===== BOOKING FORM HANDLER =====
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const carModel = document.getElementById('carModel').value.trim();
        const vehicleSize = document.getElementById('vehicleSize').value;
        const serviceType = document.getElementById('serviceType').value;
        
        // Validation
        if (!name || !phone || !carModel || !vehicleSize || !serviceType) {
            alert('Sila isi semua maklumat yang diperlukan.');
            return;
        }
        
        // Phone validation (minimum 9 digits)
        const phoneDigits = phone.replace(/\D/g, '');
        if (phoneDigits.length < 9) {
            alert('Sila masukkan nombor telefon yang sah (minimum 9 digit).');
            document.getElementById('phone').focus();
            return;
        }
        
        // Map values to display names
        const sizeNames = {
            small: 'Kecil (Myvi, Axia, Iriz)',
            medium: 'Sedang (X70, Civic, CR-V)',
            large: 'Besar (X90, Harrier, Alphard)',
            premium: 'Premium (Mercedes, BMW, Volvo)'
        };
        
        const serviceNames = {
            exterior: 'Cucian Luar (RM35-RM65)',
            exteriorInterior: 'Cucian Luar & Dalam (RM80-RM160)',
            slickBana: 'Slick Bana (RM100-RM180)',
            polish: 'Polish 1 Stage (RM200-RM350)'
        };
        
        // Create WhatsApp message
        const message = `Hi XD Waterless,%0A%0A`
            + `Saya nak tempah servis:%0A`
            + `📌 Nama: ${name}%0A`
            + `📞 Telefon: ${phone}%0A`
            + `🚗 Model Kereta: ${carModel}%0A`
            + `📏 Saiz Kereta: ${sizeNames[vehicleSize]}%0A`
            + `🔧 Servis: ${serviceNames[serviceType]}%0A`
            + `📍 Lokasi: Shah Alam, Selangor%0A`
            + `⏰ Waktu: 10am-10pm%0A%0A`
            + `Sila hubungi saya untuk pengesahan tempahan.`;
        
        // Open WhatsApp
        window.open(`https://wa.me/60167003569?text=${message}`, '_blank');
        
        // Reset form
        bookingForm.reset();
        
        // Show success message
        alert('Terima kasih! Anda akan dibawa ke WhatsApp untuk selesaikan tempahan.');
    });
}

// ===== MEMBERSHIP PACKAGE BOOKING =====
function bookPackage(packageType) {
    const packageNames = {
        foundation: 'Pakej Foundation (4 kali/bulan)',
        protection: 'Pakej Protection (6 kali/bulan)',
        concierge: 'Pakej Concierge (8 kali/bulan)'
    };
    
    const packagePrices = {
        foundation: 'RM279-RM579',
        protection: 'RM499-RM999',
        concierge: 'RM899-RM1,599'
    };
    
    const message = `Hi XD Waterless,%0A%0A`
        + `Saya berminat dengan ${packageNames[packageType]}.%0A`
        + `Harga: ${packagePrices[packageType]}/bulan%0A%0A`
        + `Boleh beri lebih detail tentang pakej ini?%0A`
        + `Saya nak tahu:%0A`
        + `1. Proses pendaftaran%0A`
        + `2. Terma & syarat%0A`
        + `3. Cara pembayaran%0A%0A`
        + `Terima kasih.`;
    
    window.open(`https://wa.me/60167003569?text=${message}`, '_blank');
}

// ===== STICKY NAVIGATION ON SCROLL =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'var(--bg-light)';
        navbar.style.backdropFilter = 'none';
    }
});

// ===== ACTIVE NAV LINK ON SCROLL =====
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== LAZY LOADING FOR IMAGES =====
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ===== FORM INPUT FORMATTING =====
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        // Format: 016-123 4567
        if (value.length > 3) {
            value = value.substring(0, 3) + '-' + value.substring(3);
        }
        if (value.length > 7) {
            value = value.substring(0, 7) + ' ' + value.substring(7);
        }
        if (value.length > 12) {
            value = value.substring(0, 12);
        }
        
        e.target.value = value;
    });
}

// ===== INITIALIZE ON LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('XD Waterless website loaded successfully!');
    
    // Add active class to current nav link
    const currentPath = window.location.hash || '#hero';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
    
    // Scroll to top on page refresh
    window.scrollTo(0, 0);
});
