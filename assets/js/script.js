/**
 * Logik Penukaran Tab XD Waterless
 */
function showTab(tabName) {
    // Ambil elemen
    const sectionAla = document.getElementById('section-ala');
    const sectionMem = document.getElementById('section-mem');
    const btnAla = document.getElementById('btn-ala');
    const btnMem = document.getElementById('btn-mem');

    if (tabName === 'ala') {
        // Paparkan Price List
        sectionAla.classList.remove('hide');
        sectionMem.classList.add('hide');
        // Aktifkan Button
        btnAla.classList.add('active');
        btnMem.classList.remove('active');
    } else {
        // Paparkan Membership
        sectionMem.classList.remove('hide');
        sectionAla.classList.add('hide');
        // Aktifkan Button
        btnMem.classList.add('active');
        btnAla.classList.remove('active');
    }
}
