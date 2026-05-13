/* ============================================
   INTERNET BABY CLUB — main.js
============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- CURSOR PERSONALIZADO ---- */
  const cursor    = document.querySelector('.cursor');
  const cursorDot = document.querySelector('.cursor-dot');

  document.addEventListener('mousemove', e => {
    cursor.style.left    = e.clientX + 'px';
    cursor.style.top     = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top  = e.clientY + 'px';
  });

  document.querySelectorAll('a, button, .cat-card, .product-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  /* ---- NAVBAR SCROLLED ---- */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  /* ---- CARRINHO: contador simples ---- */
  let cartCount = 0;
  document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount++;
      const badge = document.querySelector('.cart-count');
      if (badge) badge.textContent = cartCount;
      btn.textContent = '✓ adicionado';
      btn.style.background = 'var(--green)';
      btn.style.color = 'var(--black)';
      setTimeout(() => {
        btn.innerHTML = `<svg viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>+`;        btn.style.background = '';
        btn.style.color = '';
      }, 1500);
    });
  });

  /* ---- LINK ATIVO NA NAV ---- */
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
  if (navLinks.length) navLinks[0].classList.add('active');

  /* ---- SCROLL CATEGORIAS ---- */
  window.scrollCats = function(dir) {
    const scroll = document.getElementById('catScroll');
    scroll.scrollBy({ left: dir * 250, behavior: 'smooth' });
  };

  /* ---- MENU HAMBÚRGUER ---- */
  const hamburger = document.querySelector('.hamburger');
  const navMenu   = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      navMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      // mantém o cursor visível
      cursor.style.zIndex = isOpen ? '99999' : '';
      cursorDot.style.zIndex = isOpen ? '99999' : '';
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
        cursor.style.zIndex = '';
        cursorDot.style.zIndex = '';
      });
    });
  }

  /* ---- MODAL AUTH ---- */
  const authOverlay  = document.getElementById('authOverlay');
  const openAuthBtn  = document.getElementById('openAuth');
  const authClose    = document.getElementById('authClose');
  const authTabs     = document.querySelectorAll('.auth-tab');
  const authPanels   = document.querySelectorAll('.auth-panel');
  const tabIndicator = document.querySelector('.auth-tab-indicator');

  function openModal(tab = 'login') {
    authOverlay.classList.add('open');
    authOverlay.setAttribute('aria-hidden', false);
    document.body.style.overflow = 'hidden';
    switchTab(tab);
  }

  function closeModal() {
    authOverlay.classList.remove('open');
    authOverlay.setAttribute('aria-hidden', true);
    document.body.style.overflow = '';
  }

  function switchTab(tab) {
    authTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    authPanels.forEach(p => p.classList.toggle('active', p.id === `panel-${tab}`));
    tabIndicator.classList.toggle('right', tab === 'login');  }

if (openAuthBtn) openAuthBtn.addEventListener('click', () => openModal('cadastro'));
  authTabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  document.querySelectorAll('.auth-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.goto));
  });

  authClose.addEventListener('click', closeModal);

  // fecha ao clicar fora do modal
  authOverlay.addEventListener('click', e => {
    if (e.target === authOverlay) closeModal();
  });

  // fecha com ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});