/**
 * XD WATERLESS - TAB CONTROLLER
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

    // Scroll back to top of content for consistency
    const scrollPos = document.querySelector('.tab-system').offsetTop - 60;
    window.scrollTo({
        top: scrollPos,
        behavior: 'smooth'
    });
}
