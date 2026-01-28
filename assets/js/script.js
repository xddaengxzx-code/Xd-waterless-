function showTab(tabName) {
    const sectionAla = document.getElementById('section-ala');
    const sectionMem = document.getElementById('section-mem');
    const btnAla = document.getElementById('btn-ala');
    const btnMem = document.getElementById('btn-mem');

    if (tabName === 'ala') {
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
}
