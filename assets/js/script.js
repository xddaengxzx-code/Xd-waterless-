// XD WATERLESS – Script ringan (tiada gimmick)

// Smooth scroll untuk future section (jika tambah page)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple console branding (optional)
console.log("XD WATERLESS | Premium Maintenance System Loaded");
