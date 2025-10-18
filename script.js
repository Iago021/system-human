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
  const items = document.querySelectorAll('.timeline-item');
  items.forEach(item => {
    if (isInViewport(item)) item.classList.add('visible');
    else item.classList.remove('visible');
  });
}

window.addEventListener('scroll', () => {
  revealSections();
  handleTimelineAnimation();
});

window.addEventListener('load', () => {
  revealSections();
  handleTimelineAnimation();
});
