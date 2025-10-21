// Menu mobile
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      toggle.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        toggle.classList.remove('active');
      });
    });
  }
}

function shiftGallery(dir) {
  const g = document.getElementById('gallery');
  if (!g) return;
  const w = 300;
  g.scrollBy({ left: dir * w, behavior: 'smooth' });
}

// Aparecer seções com animação
function revealSections() {
  document.querySelectorAll('.fade-section').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      sec.classList.add('visible');
    }
  });
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
}

// Anima a timeline
function handleTimelineAnimation() {
  // Só anima em telas maiores
  if (window.innerWidth >= 768) {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  }
}

// Smooth scroll para links internos
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

window.addEventListener('scroll', () => {
  revealSections();
  handleTimelineAnimation();
});

window.addEventListener('load', () => {
  revealSections();
  handleTimelineAnimation();
  initMobileMenu();
  initSmoothScroll();
});

// Melhorar performance em mobile
window.addEventListener('resize', () => {
  handleTimelineAnimation();
});