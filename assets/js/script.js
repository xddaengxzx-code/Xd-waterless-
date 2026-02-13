// XD Waterless - Interactive Enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add hover effect to package boxes
  const boxes = document.querySelectorAll('.box, .onz-box');
  boxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 5px 15px rgba(200, 255, 0, 0.2)';
    });
    
    box.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'none';
    });
  });

  // WhatsApp button animation
  const whatsappLink = document.querySelector('.footer a');
  whatsappLink.addEventListener('mouseover', function() {
    this.style.background = '#a8d800';
  });
  
  whatsappLink.addEventListener('mouseout', function() {
    this.style.background = '#c8ff00';
  });

  // Add animation to content when it comes into view
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll('.box, .premium, .onz, .policy, .footer');
  animatedElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // Form validation for any future contact form
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add form validation logic here if needed
      alert('Terima kasih! Pesanan anda akan diproses.');
    });
  }

  // Mobile menu toggle (if needed)
  const mobileMenuButton = document.createElement('button');
  mobileMenuButton.textContent = '☰';
  mobileMenuButton.style.display = 'none';
  mobileMenuButton.style.position = 'fixed';
  mobileMenuButton.style.top = '10px';
  mobileMenuButton.style.right = '10px';
  mobileMenuButton.style.zIndex = '1000';
  mobileMenuButton.style.background = '#c8ff00';
  mobileMenuButton.style.color = '#000';
  mobileMenuButton.style.border = 'none';
  mobileMenuButton.style.borderRadius = '5px';
  mobileMenuButton.style.padding = '10px';
  mobileMenuButton.style.cursor = 'pointer';
  
  document.body.appendChild(mobileMenuButton);
  
  // Responsive adjustments
  function checkViewport() {
    if (window.innerWidth < 768) {
      mobileMenuButton.style.display = 'block';
    } else {
      mobileMenuButton.style.display = 'none';
    }
  }
  
  checkViewport();
  window.addEventListener('resize', checkViewport);
});
