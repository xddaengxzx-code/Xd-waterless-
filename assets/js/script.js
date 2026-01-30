/**
 * XD WATERLESS - CYBERPUNK UI ENGINE v2.0
 */

function switchTab(tabId, btnElement) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(tabId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update tab buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (btnElement) {
        btnElement.classList.add('active');
    }
    
    // Smooth scroll to tabs
    const tabsContainer = document.querySelector('.cyber-tabs');
    if (tabsContainer) {
        const offset = tabsContainer.offsetTop - 100;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
    
    // Console log for debugging
    console.log(`TAB_SWITCHED: ${tabId}`);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    console.log('╔════════════════════════════════════╗');
    console.log('║   XD WATERLESS SYSTEM ONLINE       ║');
    console.log('║   PROTOCOL: CYBERPUNK_PREMIUM      ║');
    console.log('║   STATUS: OPERATIONAL              ║');
    console.log('╚════════════════════════════════════╝');
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.service-card, .membership-card, .combo-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            console.log(`CARD_HOVER: ${card.querySelector('h3')?.textContent || 'unknown'}`);
        });
    });
    
    // Track CTA clicks
    const cta = document.querySelector('.cyber-cta');
    if (cta) {
        cta.addEventListener('click', (e) => {
            console.log('BOOKING_INITIATED');
            
            // Add click animation
            cta.style.transform = 'translateX(-50%) scale(0.95)';
            setTimeout(() => {
                cta.style.transform = '';
            }, 150);
        });
    }
    
    // Random glitch effect on text
    setInterval(() => {
        const glitchTexts = document.querySelectorAll('.glitch-text');
        const randomText = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
        if (randomText) {
            randomText.style.animation = 'none';
            setTimeout(() => {
                randomText.style.animation = '';
            }, 100);
        }
    }, 5000);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === '1') {
        const alaBtn = document.querySelector('#btn-ala');
        if (alaBtn) switchTab('alacarte', alaBtn);
    } else if (e.key === '2') {
        const memBtn = document.querySelector('#btn-mem');
        if (memBtn) switchTab('membership', memBtn);
    }
});
