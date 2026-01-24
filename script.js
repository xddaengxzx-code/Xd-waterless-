// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.pricing-content');
const priceCards = document.querySelectorAll('.price-card');
const navItems = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const statNumbers = document.querySelectorAll('.stat-number');

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    updateActiveNavLink();
});

// Mobile Menu Toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking on a link
navItems.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Tab Switching Functionality
function showTab(tabId) {
    // Hide all tab contents
    tabContents.forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
    });
    
    // Remove active class from all tab buttons
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab content
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.add('active');
        activeTab.style.display = 'block';
    }
    
    // Add active class to clicked tab button
    event.currentTarget.classList.add('active');
}

// Initialize tab functionality
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
        showTab(tabId);
    });
});

// Animate counter numbers
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Initialize counter animation when element is in viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-count'));
            if (!counter.classList.contains('animated')) {
                counter.classList.add('animated');
                animateCounter(counter, target, 1500);
            }
        }
    });
}, { threshold: 0.5 });

// Observe stat numbers
statNumbers.forEach(stat => {
    observer.observe(stat);
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// WhatsApp booking function
function bookService(serviceType, size, price) {
    const message = `Hai XD Waterless! Saya nak tempah servis:
Service: ${serviceType}
Saiz Kereta: ${size}
Harga: ${price}

Nama: [NAMA ANDA]
Lokasi: [LOKASI SHAH ALAM]
Tarikh/Masa: [TARIKH/MASA YANG DIPILIH]`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/60167003569?text=${encodedMessage}`, '_blank');
}

// Add booking functionality to all service buttons
document.querySelectorAll('.btn-whatsapp').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.getAttribute('href').includes('wa.me')) {
            // Already has WhatsApp link, let it proceed
            return;
        }
        
        e.preventDefault();
        const card = this.closest('.price-card');
        const serviceName = card.querySelector('.price-name').textContent;
        const price = card.querySelector('.price-amount')?.textContent || 
                     card.querySelector('strong')?.textContent;
        
        bookService(serviceName, '', price);
    });
});

// Add hover effect to price cards
priceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Create WhatsApp message
        let message = `*BOOKING XD WATERLESS CAR WASH*%0A%0A`;
        message += `*Nama:* ${data.name}%0A`;
        message += `*Telefon:* ${data.phone}%0A`;
        message += `*Pakej:* ${data.package}%0A`;
        message += `*Tarikh:* ${data.date}%0A`;
        message += `*Masa:* ${data.time}%0A`;
        message += `*Lokasi:* ${data.location}%0A`;
        message += `*Pesanan Khas:* ${data.message || 'Tiada'}%0A%0A`;
        message += `Saya nak confirm booking untuk servis di atas.`;
        
        window.open(`https://wa.me/60167003569?text=${message}`, '_blank');
        this.reset();
        
        // Show success message
        alert('Terima kasih! Anda akan dihantar ke WhatsApp untuk pengesahan tempahan.');
    });
}

// Initialize date picker min date to tomorrow
const dateInput = document.getElementById('date');
if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
}

// Add scroll reveal animation
function scrollReveal() {
    const reveals = document.querySelectorAll('.price-card, .step, .gallery-item');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for scroll reveal elements
document.querySelectorAll('.price-card, .step, .gallery-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Add scroll event for reveal animation
window.addEventListener('scroll', scrollReveal);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('XD Waterless Car Wash Website Loaded Successfully!');
    
    // Initialize first tab as active
    const firstTab = document.querySelector('.tab-btn');
    if (firstTab) {
        const firstTabId = firstTab.getAttribute('onclick').match(/'([^']+)'/)[1];
        showTab(firstTabId);
    }
    
    // Trigger scroll reveal on load
    scrollReveal();
    
    // Update copyright year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Lazy load images
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Add click animation to buttons
document.querySelectorAll('.btn, .btn-whatsapp').forEach(button => {
    button.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Price comparison calculator
function calculateSavings(alaCartePrice, membershipPrice) {
    const savings = alaCartePrice - membershipPrice;
    const percentage = ((savings / alaCartePrice) * 100).toFixed(0);
    return { savings, percentage };
}

// Example usage:
// const savings = calculateSavings(400, 349);
// console.log(`Jimat RM${savings.savings} (${savings.percentage}%)`);

// Service size classification
const vehicleSizes = {
    kecil: ['Axia', 'Myvi', 'Bezza', 'Iriz', 'Persona', 'Saga'],
    sedang: ['Civic', 'Altis', 'HR-V', 'CR-V', 'CX-5', 'X70'],
    besar: ['Fortuner', 'Pajero', 'Ranger', 'Hilux', 'Alphard', 'Vellfire'],
    premium: ['Mercedes', 'BMW', 'Audi', 'Lexus', 'Volvo', 'Porsche']
};

function classifyVehicle(model) {
    for (const [size, models] of Object.entries(vehicleSizes)) {
        if (models.some(m => model.toLowerCase().includes(m.toLowerCase()))) {
            return size;
        }
    }
    return 'sedang'; // Default size
}

// Initialize tooltips
const tooltips = document.querySelectorAll('[data-tooltip]');
tooltips.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        tooltip.style.transform = 'translateX(-50%)';
        
        element.tooltip = tooltip;
    });
    
    element.addEventListener('mouseleave', () => {
        if (element.tooltip) {
            element.tooltip.remove();
            element.tooltip = null;
        }
    });
});

// Add CSS for tooltips
const tooltipStyle = document.createElement('style');
tooltipStyle.textContent = `
    .tooltip {
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 0.8rem;
        white-space: nowrap;
        z-index: 9999;
        pointer-events: none;
    }
`;
document.head.appendChild(tooltipStyle);
