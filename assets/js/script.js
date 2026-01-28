/**
 * XD Waterless - Tab Navigation Logic
 */

function showTab(tabName) {
    // 1. Dapatkan elemen content
    const sectionAla = document.getElementById('section-ala');
    const sectionMem = document.getElementById('section-mem');
    
    // 2. Dapatkan elemen button
    const btnAla = document.getElementById('btn-ala');
    const btnMem = document.getElementById('btn-mem');

    if (tabName === 'ala') {
        // Paparkan Ala Carte
        sectionAla.classList.remove('hide');
        sectionMem.classList.add('hide');
        
        // Aktifkan gaya butang Ala Carte
        btnAla.classList.add('active');
        btnMem.classList.remove('active');
    } else if (tabName === 'mem') {
        // Paparkan Membership
        sectionMem.classList.remove('hide');
        sectionAla.classList.add('hide');
        
        // Aktifkan gaya butang Membership
        btnMem.classList.add('active');
        btnAla.classList.remove('active');
    }
}

// Log untuk memastikan skrip dimuatkan dengan betul
console.log("XD Waterless Script Loaded via assets/js/script.js");
