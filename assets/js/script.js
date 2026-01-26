document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.getElementById('whatsapp-btn');

    // Tracking Klik
    whatsappBtn.addEventListener('click', (e) => {
        console.log('User clicked WhatsApp Booking');
        // Di sini kau boleh tambah tracking Pixel atau Analytics nanti
    });

    // Simple reveal animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
