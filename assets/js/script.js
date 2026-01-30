/* RESET & BASE */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg: #0a0a0a;
    --bg-card: #111111;
    --bg-elevated: #1a1a1a;
    --neon: #e2f82b;
    --neon-dim: #c5db20;
    --text: #ffffff;
    --text-dim: #888888;
    --text-muted: #555555;
    --border: #222222;
    --success: #4ade80;
    --warning: #fb923c;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 640px;
    margin: 0 auto;
    padding: 24px 20px;
}

/* TYPOGRAPHY */
h1, h2, h3 {
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.02em;
}

h3 {
    font-size: 1.5rem;
    margin-bottom: 8px;
    text-align: center;
}

.section-sub {
    text-align: center;
    color: var(--text-dim);
    margin-bottom: 32px;
    font-size: 0.95rem;
}

/* STICKY CTA */
.sticky-cta {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    border-top: 1px solid var(--border);
    padding: 12px 20px;
    z-index: 1000;
    transform: translateY(0);
    transition: transform 0.3s ease;
}

.sticky-btn {
    display: block;
    background: var(--neon);
    color: var(--bg);
    text-align: center;
    padding: 16px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 800;
    font-size: 1rem;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 20px rgba(226, 248, 43, 0.3);
    transition: all 0.3s ease;
}

.sticky-btn:active {
    transform: scale(0.98);
}

/* HERO SECTION */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 60px 0 40px;
    position: relative;
    background: radial-gradient(ellipse at top, var(--bg-elevated) 0%, var(--bg) 70%);
}

.brand {
    font-size: 0.8rem;
    font-weight: 900;
    letter-spacing: 0.4em;
    color: var(--neon);
    margin-bottom: 20px;
    display: inline-block;
    padding: 8px 16px;
    border: 1px solid rgba(226, 248, 43, 0.3);
    border-radius: 100px;
}

.hero h1 {
    font-size: clamp(2rem, 7vw, 3rem);
    margin-bottom: 16px;
    background: linear-gradient(to bottom, #fff, #aaa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.sub {
    color: var(--text-dim);
    font-size: 1.1rem;
    margin-bottom: 24px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}

.trust-badge {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 32px;
    font-size: 0.85rem;
    color: var(--text-dim);
    flex-wrap: wrap;
}

.trust-badge span {
    background: rgba(255,255,255,0.05);
    padding: 6px 12px;
    border-radius: 20px;
    border: 1px solid var(--border);
}

/* PACKAGE CARD */
.package-card {
    background: var(--bg-card);
    border: 2px solid var(--neon);
    border-radius: 16px;
    padding: 40px 24px;
    margin-bottom: 24px;
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 0 40px rgba(226, 248, 43, 0.1);
}

.package-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 50px rgba(226, 248, 43, 0.2);
}

.package-card:active {
    transform: translateY(-2px);
}

.badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--neon);
    color: var(--bg);
    font-size: 0.7rem;
    font-weight: 800;
    padding: 6px 16px;
    border-radius: 20px;
    letter-spacing: 0.1em;
}

.package-card h2 {
    font-size: 1.8rem;
    margin-bottom: 8px;
}

.price {
    font-size: 2rem;
    font-weight: 800;
    color: var(--neon);
    margin-bottom: 8px;
}

.desc {
    color: var(--text-dim);
    margin-bottom: 24px;
    font-size: 1rem;
}

.cta {
    display: block;
    width: 100%;
    background: var(--neon);
    color: var(--bg);
    border: none;
    padding: 18px;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 800;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    margin-bottom: 12px;
    box-shadow: 0 4px 20px rgba(226, 248, 43, 0.3);
}

.cta:hover {
    background: var(--neon-dim);
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(226, 248, 43, 0.4);
}

.guarantee {
    display: block;
    color: var(--text-dim);
    font-size: 0.85rem;
    margin-top: 8px;
}

.secondary-link {
    color: var(--text-dim);
    text-decoration: none;
    font-size: 0.95rem;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s;
    padding: 8px;
}

.secondary-link:hover {
    color: var(--neon);
}

/* BENEFITS */
.benefits {
    background: var(--bg-card);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 40px 0;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.benefit-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.9rem;
    color: var(--text-dim);
}

.icon {
    font-size: 1.3rem;
    filter: grayscale(100%) brightness(2);
}

/* SOCIAL PROOF / STATS */
.social-proof {
    padding: 48px 0;
    background: linear-gradient(to bottom, var(--bg), var(--bg-elevated));
}

.stats {
    display: flex;
    justify-content: space-around;
    text-align: center;
}

.stat strong {
    display: block;
    font-size: 2.5rem;
    color: var(--neon);
    font-weight: 800;
    line-height: 1;
}

.stat span {
    font-size: 0.85rem;
    color: var(--text-dim);
    margin-top: 4px;
    display: block;
}

/* OPTIONS SECTION */
.options {
    padding: 60px 0;
    background: var(--bg);
}

.option {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.option:hover {
    border-color: var(--text-muted);
    transform: translateX(4px);
}

.option.highlight {
    border-color: var(--neon);
    background: linear-gradient(135deg, var(--bg-card) 0%, rgba(226, 248, 43, 0.05) 100%);
    box-shadow: 0 4px 30px rgba(226, 248, 43, 0.1);
}

.option.highlight:hover {
    box-shadow: 0 8px 40px rgba(226, 248, 43, 0.2);
}

.opt-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
}

.opt-title {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.opt-title strong {
    font-size: 1.2rem;
    font-weight: 800;
}

.opt-tag {
    font-size: 0.7rem;
    background: rgba(255,255,255,0.1);
    color: var(--text-dim);
    padding: 2px 8px;
    border-radius: 4px;
    width: fit-content;
}

.opt-tag.hot {
    background: rgba(226, 248, 43, 0.2);
    color: var(--neon);
}

.opt-price {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text);
}

.opt-price.neon {
    color: var(--neon);
}

.opt-desc {
    color: var(--text-dim);
    font-size: 0.95rem;
    margin-bottom: 16px;
}

.opt-features {
    list-style: none;
    margin-bottom: 20px;
    font-size: 0.9rem;
    color: var(--text-dim);
}

.opt-features li {
    margin-bottom: 6px;
    padding-left: 0;
}

.opt-btn {
    width: 100%;
    padding: 14px;
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text);
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 0.95rem;
}

.opt-btn:hover {
    background: rgba(255,255,255,0.05);
    border-color: var(--text-dim);
}

.opt-btn.primary {
    background: var(--neon);
    color: var(--bg);
    border-color: var(--neon);
    font-weight: 800;
}

.opt-btn.primary:hover {
    background: var(--neon-dim);
}

.savings {
    position: absolute;
    top: 16px;
    right: 16px;
    background: var(--success);
    color: var(--bg);
    font-size: 0.75rem;
    font-weight: 800;
    padding: 4px 8px;
    border-radius: 4px;
    transform: rotate(3deg);
}

/* HOW IT WORKS */
.how-it-works {
    padding: 60px 0;
    background: var(--bg-card);
    border-top: 1px solid var(--border);
}

.steps {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-top: 32px;
}

.step {
    flex: 1;
    text-align: center;
    padding: 20px 10px;
}

.step-num {
    width: 40px;
    height: 40px;
    background: var(--neon);
    color: var(--bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    margin: 0 auto 12px;
    font-size: 1.1rem;
}

.step strong {
    display: block;
    margin-bottom: 4px;
    font-size: 0.95rem;
}

.step p {
    font-size: 0.85rem;
    color: var(--text-dim);
    line-height: 1.4;
}

/* COVERAGE */
.coverage {
    padding: 48px 0;
    background: var(--bg);
    text-align: center;
}

.areas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 24px 0;
}

.area {
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    color: var(--text-dim);
}

.area-note {
    font-size: 0.85rem;
    color: var(--text-muted);
    font-style: italic;
}

/* FAQ */
.faq {
    padding: 60px 0;
    background: var(--bg-card);
    border-top: 1px solid var(--border);
}

.faq-item {
    border-bottom: 1px solid var(--border);
    overflow: hidden;
}

.faq-q {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    cursor: pointer;
    user-select: none;
}

.faq-q strong {
    font-weight: 600;
    font-size: 1rem;
    padding-right: 16px;
}

.faq-icon {
    color: var(--neon);
    font-size: 1.5rem;
    font-weight: 300;
    transition: transform 0.3s;
    flex-shrink: 0;
}

.faq-item.active .faq-icon {
    transform: rotate(45deg);
}

.faq-a {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-item.active .faq-a {
    max-height: 200px;
    padding-bottom: 20px;
}

.faq-a p {
    color: var(--text-dim);
    font-size: 0.95rem;
    line-height: 1.6;
}

/* FINAL CTA */
.final-cta {
    padding: 80px 0;
    text-align: center;
    background: linear-gradient(to bottom, var(--bg-card), var(--bg));
}

.final-cta h3 {
    font-size: 1.8rem;
    margin-bottom: 8px;
}

.final-cta > p {
    color: var(--text-dim);
    margin-bottom: 32px;
}

.cta-large {
    display: inline-flex;
    flex-direction: column;
    background: #25D366;
    color: white;
    padding: 24px 48px;
    border-radius: 16px;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.3rem;
    box-shadow: 0 8px 30px rgba(37, 211, 102, 0.3);
    transition: all 0.3s;
    margin-bottom: 16px;
    min-width: 280px;
}

.cta-large:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(37, 211, 102, 0.4);
}

.cta-large .whatsapp-icon {
    font-size: 0.9rem;
    opacity: 0.9;
    margin-bottom: 4px;
    font-weight: 600;
}

.cta-large small {
    font-size: 0.8rem;
    opacity: 0.9;
    margin-top: 4px;
    font-weight: 500;
}

.urgency {
    color: var(--warning);
    font-size: 0.9rem;
    font-weight: 600;
}

/* FOOTER */
footer {
    background: var(--bg);
    border-top: 1px solid var(--border);
    padding: 40px 0 100px;
    text-align: center;
}

.footer-main {
    margin-bottom: 24px;
}

.footer-main strong {
    font-size: 1.2rem;
    letter-spacing: 0.2em;
    color: var(--neon);
}

.footer-main p {
    color: var(--text-dim);
    margin: 8px 0 20px;
    font-size: 0.95rem;
}

.contact-footer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 0.9rem;
}

.contact-footer a {
    color: var(--text);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
}

.contact-footer a:hover {
    color: var(--neon);
}

.footer-sub {
    font-size: 0.75rem;
    color: var(--text-muted);
    letter-spacing: 0.1em;
    padding-top: 20px;
    border-top: 1px solid var(--border);
    margin-top: 20px;
}

/* ANIMATIONS */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.option, .faq-item, .step {
    animation: slideIn 0.6s ease forwards;
}

/* RESPONSIVE */
@media (max-width: 480px) {
    .grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    
    .steps {
        flex-direction: column;
        gap: 24px;
    }
    
    .stats {
        flex-direction: column;
        gap: 24px;
    }
    
    .cta-large {
        width: 100%;
        padding: 20px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 700px;
    }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Utility */
.selected {
    border-color: var(--neon) !important;
    background: rgba(226, 248, 43, 0.05) !important;
}
