/**
 * XD WATERLESS - DYNAMIC CATALOG ENGINE
 */

function showTab(tabId) {
    const sectionAla = document.getElementById('section-ala');
    const sectionMem = document.getElementById('section-mem');
    const btnAla = document.getElementById('btn-ala');
    const btnMem = document.getElementById('btn-mem');

    if (tabId === 'ala') {
        sectionAla.classList.remove('hide');
        sectionMem.classList.add('hide');
        btnAla.classList.add('active');
        btnMem.classList.remove('active');
    } else {
        sectionMem.classList.remove('hide');
        sectionAla.classList.add('hide');
        btnMem.classList.add('active');
        btnAla.classList.remove('active');
    }

    // Smooth scroll to top of tab container
    const tabTop = document.querySelector('.tab-system').offsetTop - 70;
    window.scrollTo({
        top: tabTop,
        behavior: 'smooth'
    });
}

// Initial state check
document.addEventListener('DOMContentLoaded', () => {
    console.log('XD_SYSTEM_ONLINE');
});
