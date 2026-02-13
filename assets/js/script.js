// ========== CONFIG ==========
const phone = "60167003569";
const pricing = {
  kompak: { lasak: 35, gempak: 60, terbaik: 95, lowkey: 120, highkey: 210, unlocked: 330 },
  sedan:  { lasak: 45, gempak: 75, terbaik: 115, lowkey: 160, highkey: 270, unlocked: 410 },
  suv:    { lasak: 55, gempak: 90, terbaik: 140, lowkey: 200, highkey: 330, unlocked: 510 },
  mpv:    { lasak: 65, gempak: 110, terbaik: 165, lowkey: 240, highkey: 410, unlocked: 610 }
};

let currentSize = "kompak";
let addonsTotal = 0;

// ========== SOUND EFFECT (Web Audio API) ==========
let audioCtx = null;
function playClickSound() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 800;
    gainNode.gain.value = 0.1;
    osc.connect(gainNode).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
  } catch (e) {
    // silently fail if audio not supported
  }
}

// ========== ADD-ONS AUTO KIRA ==========
function calcAddonsTotal() {
  const checkboxes = document.querySelectorAll('.addon-checkbox');
  let total = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) total += parseInt(cb.dataset.price, 10);
  });
  return total;
}

function updateAddonsTotal() {
  addonsTotal = calcAddonsTotal();
  updatePrices();
}

// ========== PRICE UPDATE WITH ANIMATION ==========
function updatePrices() {
  const p = pricing[currentSize];
  const priceElements = {
    lasakPrice: p.lasak,
    gempakPrice: p.gempak,
    terbaikPrice: p.terbaik,
    lowkeyPrice: p.lowkey,
    highkeyPrice: p.highkey,
    unlockedPrice: p.unlocked
  };

  for (let [id, base] of Object.entries(priceElements)) {
    const el = document.getElementById(id);
    const total = base + addonsTotal;
    el.innerText = 'RM' + total;
    // Trigger animation
    el.classList.add('price-animate');
    setTimeout(() => {
      el.classList.remove('price-animate');
    }, 300);
  }
}

// ========== VEHICLE SELECTOR ==========
document.querySelectorAll('.vehicle').forEach(btn => {
  btn.addEventListener('click', () => {
    playClickSound();
    document.querySelectorAll('.vehicle').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSize = btn.dataset.size;
    updatePrices();
  });
});

// ========== ADD-ONS LISTENERS ==========
document.querySelectorAll('.addon-checkbox').forEach(cb => {
  cb.addEventListener('change', () => {
    playClickSound();
    updateAddonsTotal();
  });
});

// ========== BOOK BUTTON ==========
document.querySelectorAll('.btn-book').forEach(btn => {
  btn.addEventListener('click', () => {
    playClickSound();
    const pack = btn.dataset.package;
    // extract base package name (e.g., "LASAK" from "ONZ LOWKEY" -> "lowkey")
    let baseKey = pack.split(' ').pop().toLowerCase();
    // handle normal packages
    if (pack === 'LASAK') baseKey = 'lasak';
    if (pack === 'GEMPAK') baseKey = 'gempak';
    if (pack === 'TERBAIK') baseKey = 'terbaik';
    
    const basePrice = pricing[currentSize][baseKey];
    const totalPrice = basePrice + addonsTotal;

    // Build add-ons summary
    let addonsText = '';
    document.querySelectorAll('.addon-checkbox').forEach(cb => {
      if (cb.checked) {
        const label = cb.closest('.addon-item')?.innerText?.split('+')[0].trim() || 'Add-on';
        addonsText += `\n  • ${label} (+RM${cb.dataset.price})`;
      }
    });

    let msg = `XD WATERLESS\n`;
    msg += `Package: ${pack}\n`;
    msg += `Saiz: ${currentSize}\n`;
    msg += `Harga Asas: RM${basePrice}\n`;
    if (addonsTotal > 0) {
      msg += `Add-on:${addonsText}\n`;
      msg += `Jumlah Add-on: RM${addonsTotal}\n`;
    }
    msg += `━━━━━━━━━━\n`;
    msg += `*JUMLAH BAYARAN: RM${totalPrice}*\n\n`;
    msg += `Nama:\nAlamat:\nTarikh & masa:\n\n`;
    msg += `Saya bayar deposit minimum RM20 untuk lock slot.`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  });
});

// ========== INIT ==========
updatePrices();
