:root {
    --bg: #0a0a0a;
    --bg-card: #111111;
    --bg-elevated: #161616;
    --neon: #e2f82b;
    --neon-dim: #c5db20;
    --text: #ffffff;
    --text-dim: #888888;
    --text-muted: #555555;
    --border: #222222;
    --success: #4ade80;
    --accent: #3b82f6;
    --warning: #f59e0b;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    padding-bottom: 100px;
    -webkit-font-smoothing: antialiased;
}

.container { 
    max-width: 640px; 
    margin: 0 auto; 
    padding: 0 20px; 
}

/* HEADER & LOGO */
.main-header {
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 16px 0;
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(10px);
    background: rgba(10, 10, 10, 0.95);
}

.main-header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-container {
    display: flex;
    align-items: center;
    height: 40px;
}

.logo-img {
    height: 100%;
    width: auto;
    object-fit: contain;
    max-width: 200px;
}

.logo-text {
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--neon);
    letter-spacing: 2px;
}

.header-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 0.8rem;
    color: var(--text-dim);
    gap: 4px;
}

.hours, .location {
    display: flex;
    align-items: center;
    gap: 6px;
}

/* HERO */
.confirm-header {
    padding: 40px 0 24px;
    text-align: center;
    background: var(--bg);
}

h1 {
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 12px;
    line-height: 1.2;
    background: linear-gradient(135deg, #fff 0%, var(--neon-dim) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.sub {
    color: var(--text-dim);
    font-size: 1rem;
    max-width: 450px;
    margin: 0 auto 20px;
    line-height: 1.5;
}

.sub strong { 
    color: var(--text); 
    font-weight: 600; 
}

.notice-box {
    background: rgba(226, 248, 43, 0.1);
    border: 1px solid var(--neon);
    border-radius: 10px;
    padding: 16px;
    margin: 20px auto 0;
    max-width: 500px;
    font-size: 0.9rem;
    color: var(--text);
}

.notice-box strong {
    color: var(--neon);
}

.trust-pill {
    display: inline-flex;
    gap: 16px;
    font-size: 0.85rem;
    color: var(--text-dim);
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 8px;
}

.trust-pill span {
    background: rgba(255,255,255,0.05);
    padding: 6px 12px;
    border-radius: 20px;
    border: 1px solid var(--border);
}

/* SIZE SELECTOR */
.size-section {
    padding: 32px 0;
    background: var(--bg-card);
    border-top: 1px solid var(--border);
}

.section-label {
    font-size: 0.85rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;
}

.size-tabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 20px;
}

.size-tab {
    background: var(--bg);
    border: 2px solid var(--border);
    border-radius: 12px;
    padding: 20px 12px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 6px;
    position: relative;
    overflow: hidden;
}

.size-tab:hover { 
    border-color: var(--text-muted); 
    transform: translateY(-2px);
}

.size-tab.active {
    border-color: var(--neon);
    background: rgba(226, 248, 43, 0.1);
    box-shadow: 0 0 30px rgba(226, 248, 43, 0.15);
}

.size-icon { font-size: 1.6rem; margin-bottom: 4px; }

.size-name { 
    font-size: 0.9rem; 
    font-weight: 700; 
    color: var(--text);
    line-height: 1.3;
}

.size-tab.active .size-name { color: var(--neon); }

.size-price {
    font-size: 1.3rem;
    font-weight: 800;
    color: var(--neon);
    margin-top: 4px;
}

.size-ex {
    font-size: 0.75rem;
    color: var(--text-muted);
    line-height: 1.2;
    margin-top: 2px;
}

.size-helper {
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-dim);
    margin-top: 16px;
}

.size-helper a { 
    color: var(--neon); 
    text-decoration: none; 
    font-weight: 600;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s;
}

.size-helper a:hover {
    border-bottom-color: var(--neon);
}

/* SIGNATURE */
.signature-section {
    padding: 40px 0 32px;
    background: var(--bg);
}

.signature-card {
    background: var(--bg-card);
    border: 2px solid var(--neon);
    border-radius: 20px;
    padding: 40px 24px 32px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
}

.signature-card:hover { 
    transform: translateY(-4px); 
    box-shadow: 0 20px 60px rgba(226, 248, 43, 0.1);
}

.recommended-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--neon);
    color: var(--bg);
    font-size: 0.7rem;
    font-weight: 800;
    padding: 8px 20px;
    border-radius: 20px;
    white-space: nowrap;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    box-shadow: 0 4px 15px rgba(226, 248, 43, 0.3);
}

.sig-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 28px;
    flex-wrap: wrap;
    gap: 16px;
}

h2 { 
    font-size: 2rem; 
    font-weight: 800; 
    line-height: 1; 
    margin-bottom: 8px;
}

.sig-sub { 
    color: var(--text-dim); 
    font-size: 1rem; 
}

.sig-price-block { 
    text-align: right; 
    min-width: 120px;
}

.price-final {
    display: block;
    font-size: 3rem;
    font-weight: 800;
    color: var(--neon);
    line-height: 1;
    text-shadow: 0 0 20px rgba(226, 248, 43, 0.3);
}

.price-note {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 6px;
    display: block;
}

.sig-value {
    display: flex;
    gap: 16px;
    margin: 28px 0;
    padding: 24px 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.value-item {
    flex: 1;
    text-align: center;
    padding: 8px;
    background: rgba(255,255,255,0.02);
    border-radius: 8px;
}

.value-item strong {
    display: block;
    font-size: 1rem;
    color: var(--neon);
    margin-bottom: 4px;
    font-weight: 700;
}

.value-item span {
    font-size: 0.85rem;
    color: var(--text-dim);
}

.checklist {
    list-style: none;
    margin-bottom: 28px;
}

.checklist li {
    padding: 12px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    font-size: 1rem;
    color: var(--text-dim);
    display: flex;
    align-items: center;
    gap: 12px;
}

.checklist li:last-child { border-bottom: none; }

.checklist li:before {
    content: "✓";
    color: var(--success);
    font-weight: bold;
    font-size: 1.2rem;
}

.btn-main {
    width: 100%;
    background: var(--neon);
    color: var(--bg);
    border: none;
    padding: 20px;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 800;
    cursor: pointer;
    margin-bottom: 16px;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 20px rgba(226, 248, 43, 0.3);
}

.btn-main:hover {
    background: var(--neon-dim);
    box-shadow: 0 8px 30px rgba(226, 248, 43, 0.5);
    transform: translateY(-2px);
}

.guarantee {
    text-align: center;
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 8px;
}

.payment-note {
    text-align: center;
    font-size: 0.9rem;
    color: var(--warning);
    font-weight: 600;
    margin-top: 12px;
    background: rgba(245, 158, 11, 0.1);
    padding: 8px;
    border-radius: 6px;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

/* QUICK */
.alternative-section {
    padding: 0 0 40px;
    background: var(--bg);
}

.alt-label {
    text-align: center;
    font-size: 0.95rem;
    color: var(--text-muted);
    margin-bottom: 20px;
    font-style: italic;
}

.quick-option {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    opacity: 0.9;
    transition: all 0.3s;
    gap: 16px;
}

.quick-option:hover {
    opacity: 1;
    border-color: var(--text-muted);
    background: rgba(255,255,255,0.03);
}

.quick-info { flex: 1; }

.quick-info h4 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text);
}

.quick-tag {
    font-size: 0.7rem;
    background: var(--bg-elevated);
    color: var(--text-muted);
    padding: 4px 10px;
    border-radius: 4px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.quick-info p {
    font-size: 0.9rem;
    color: var(--text-dim);
    margin-bottom: 10px;
    line-height: 1.4;
}

.quick-info ul {
    list-style: none;
    font-size: 0.85rem;
    color: var(--text-muted);
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.quick-info ul li {
    display: flex;
    align-items: center;
    gap: 6px;
}

.quick-info ul li:before {
    content: "•";
    color: var(--neon);
    font-weight: bold;
}

.quick-action {
    text-align: right;
    min-width: 100px;
}

.quick-price {
    display: block;
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--text);
    margin-bottom: 10px;
}

.btn-secondary {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-dim);
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    width: 100%;
}

.btn-secondary:hover { 
    border-color: var(--neon); 
    color: var(--neon); 
    background: rgba(226, 248, 43, 0.05);
}

/* ELITE */
.elite-section {
    padding: 40px 0;
    background: var(--bg-card);
    border-top: 1px solid var(--border);
}

.elite-banner {
    background: linear-gradient(135deg, var(--bg) 0%, rgba(59, 130, 246, 0.1) 100%);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 32px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
}

.elite-banner:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
}

.elite-banner:hover { 
    border-color: var(--accent); 
    box-shadow: 0 10px 40px rgba(59, 130, 246, 0.1);
}

.elite-badge {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 800;
    color: var(--accent);
    border: 1px solid var(--accent);
    padding: 6px 16px;
    border-radius: 20px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

h3 { 
    font-size: 1.8rem; 
    font-weight: 800; 
    margin-bottom: 10px;
    color: var(--text);
}

.elite-desc { 
    color: var(--text-dim); 
    margin-bottom: 28px; 
    font-size: 1rem; 
}

.elite-math {
    background: rgba(0,0,0,0.3);
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 24px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgba(255,255,255,0.05);
}

.math-line {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    color: var(--text-muted);
    margin-bottom: 10px;
    text-decoration: line-through;
    opacity: 0.6;
}

.math-line.final {
    text-decoration: none;
    opacity: 1;
    font-size: 1.3rem;
    border-top: 1px solid var(--border);
    padding-top: 12px;
    margin-top: 12px;
    color: var(--accent);
    font-weight: 700;
}

.math-line.final strong { 
    font-size: 1.8rem; 
    color: var(--text);
}

.savings {
    display: inline-block;
    background: var(--success);
    color: var(--bg);
    font-size: 0.9rem;
    font-weight: 800;
    padding: 6px 16px;
    border-radius: 20px;
    margin-top: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.elite-perks {
    list-style: none;
    font-size: 0.95rem;
    color: var(--text-dim);
    margin-bottom: 28px;
    text-align: left;
    display: inline-block;
    max-width: 280px;
}

.elite-perks li { 
    margin-bottom: 10px; 
    display: flex;
    align-items: flex-start;
    gap: 10px;
    line-height: 1.4;
}

.elite-perks li:before {
    content: "✓";
    color: var(--success);
    font-weight: bold;
    flex-shrink: 0;
}

.btn-elite {
    background: transparent;
    border: 2px solid var(--accent);
    color: var(--accent);
    padding: 16px 40px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-elite:hover {
    background: var(--accent);
    color: white;
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
}

.elite-note {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 20px;
    font-style: italic;
}

/* TERMS */
.terms-section {
    padding: 48px 0;
    background: var(--bg);
    border-top: 2px solid var(--border);
    margin-top: 20px;
}

.terms-section h3 {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 32px;
    color: var(--neon);
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 12px;
}

.terms-section h3:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 25%;
    right: 25%;
    height: 2px;
    background: var(--neon);
    opacity: 0.5;
}

.terms-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 32px;
}

.term-item {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    transition: all 0.3s;
}

.term-item:hover {
    border-color: var(--neon-dim);
    background: rgba(226, 248, 43, 0.02);
    transform: translateY(-2px);
}

.term-item h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--neon);
    display: flex;
    align-items: center;
    gap: 10px;
}

.term-item ul {
    list-style: none;
    font-size: 0.9rem;
    color: var(--text-dim);
    line-height: 1.7;
}

.term-item li {
    margin-bottom: 10px;
    padding-left: 16px;
    position: relative;
}

.term-item li:before {
    content: "•";
    color: var(--neon);
    position: absolute;
    left: 0;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.2;
}

.term-item strong {
    color: var(--text);
    font-weight: 600;
}

.terms-footer {
    text-align: center;
    font-size: 0.85rem;
    color: var(--text-muted);
    padding-top: 24px;
    border-top: 1px solid var(--border);
    margin-top: 20px;
    line-height: 1.5;
}

/* STICKY */
.sticky-cta {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.98);
    border-top: 1px solid var(--border);
    padding: 16px 20px;
    z-index: 1000;
    display: none;
    backdrop-filter: blur(10px);
    box-shadow: 0 -10px 40px rgba(0,0,0,0.5);
}

.sticky-btn {
    display: block;
    background: var(--neon);
    color: var(--bg);
    text-align: center;
    padding: 18px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.1rem;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 20px rgba(226, 248, 43, 0.3);
}

.sticky-btn:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 30px rgba(226, 248, 43, 0.5);
}

/* FOOTER */
footer {
    padding: 48px 0 100px;
    text-align: center;
    border-top: 1px solid var(--border);
    color: var(--text-dim);
    font-size: 0.95rem;
    background: var(--bg-card);
}

footer strong { 
    color: var(--neon); 
    display: block; 
    margin-bottom: 16px;
    font-size: 1.2rem;
    letter-spacing: 2px;
}

footer p {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.footer-email, .footer-wa {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 12px;
    color: var(--neon);
    text-decoration: none;
    font-weight: 600;
    padding: 10px 20px;
    border: 1px solid rgba(226, 248, 43, 0.3);
    border-radius: 8px;
    transition: all 0.3s;
    margin: 12px auto 0;
    width: fit-content;
}

.footer-email:hover, .footer-wa:hover {
    background: rgba(226, 248, 43, 0.1);
    border-color: var(--neon);
}

.footer-wa {
    margin-top: 12px;
    display: flex;
}

/* RESPONSIVE */
@media (max-width: 640px) {
    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.6rem; }
    .price-final { font-size: 2.5rem; }
    
    .size-tabs { 
        grid-template-columns: 1fr; 
        gap: 10px;
    }
    
    .size-tab { 
        flex-direction: row; 
        text-align: left; 
        justify-content: space-between;
        padding: 16px 20px;
    }
    
    .size-tab > * { margin: 0; }
    
    .size-icon { 
        position: absolute; 
        right: 20px; 
        opacity: 0.3;
        font-size: 2rem;
    }
    
    .size-ex { display: none; }
    
    .sig-header { 
        flex-direction: column; 
        gap: 20px; 
        align-items: center;
        text-align: center;
    }
    
    .sig-price-block { text-align: center; }
    
    .terms-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    
    .quick-option { 
        flex-direction: column; 
        gap: 20px; 
        text-align: center; 
        padding: 28px 20px;
    }
    
    .quick-action { 
        text-align: center; 
        width: 100%;
    }
    
    .quick-price { 
        display: inline-block; 
        margin-right: 20px;
        margin-bottom: 0;
    }
    
    .btn-secondary {
        display: inline-block;
        width: auto;
        min-width: 120px;
    }
    
    .elite-math { padding: 20px; }
    
    .quick-info ul {
        justify-content: center;
    }
    
    .term-item {
        padding: 20px;
    }
}

@media (max-width: 400px) {
    .header-info { font-size: 0.7rem; }
    .price-final { font-size: 2rem; }
    h2 { font-size: 1.4rem; }
    .logo-img { max-width: 150px; }
}

/* SMOOTH SCROLLING */
html {
    scroll-behavior: smooth;
}

/* SELECTION */
::selection {
    background: var(--neon);
    color: var(--bg);
}
