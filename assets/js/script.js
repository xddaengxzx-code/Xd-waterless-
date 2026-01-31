// XD Waterless Price Catalog Scripts

// Print functionality
function printCatalog() {
    window.print();
}

// Highlight package on click (for mobile viewing)
document.addEventListener('DOMContentLoaded', function() {
    const packageBoxes = document.querySelectorAll('.package-box');
    
    packageBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Remove active class from all
            packageBoxes.forEach(b => b.classList.remove('active-highlight'));
            
            // Add to clicked (only on mobile)
            if (window.innerWidth <= 768) {
                this.classList.add('active-highlight');
            }
        });
    });
    
    // Add ripple effect to print button
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('mousedown', function(e) {
            let ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255,255,255,0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            ripple.style.left = e.offsetX + 'px';
            ripple.style.top = e.offsetY + 'px';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    }
});

// Keyboard shortcut for print (Ctrl+P)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        printCatalog();
    }
});

// Add CSS animation for ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
    
    .active-highlight {
        transform: scale(1.02);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

console.log('XD Waterless Price Catalog Loaded');
