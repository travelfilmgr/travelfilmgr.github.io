/* =========================
   DARK MODE
========================= */
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

/* =========================
   SCROLL REVEAL SYSTEM
========================= */
function revealOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight - 80) {
      el.classList.add('show');
    }
  });
}

/* =========================
   BACKGROUND THEME SYSTEM
========================= */
function setGalleryTheme(cat) {
  const gallery = document.querySelector('.gallery-page');
  if (!gallery) return;

  const themes = [
    'theme-nature','theme-city','theme-landscape',
    'theme-portrait','theme-street','theme-food',
    'theme-architecture','theme-fashion','theme-macro',
    'theme-pet','theme-realestate','theme-others'
  ];

  gallery.classList.remove(...themes);

  if (cat && cat !== 'all') {
    gallery.classList.add(`theme-${cat}`);
  }

  // extra premium touch (smooth background shift)
  document.body.dataset.theme = cat;
}

/* =========================
   FILTER SYSTEM (FINAL PREMIUM VERSION)
========================= */
function filterImages(cat, event) {
  const images = document.querySelectorAll('.grid img');

  // active button UI
  document.querySelectorAll('.filters button').forEach(btn => {
    btn.classList.remove('active');
  });

  if (event && event.target) {
    event.target.classList.add('active');
  }

  // background theme change
  setGalleryTheme(cat);

  // stagger animation system
  images.forEach((img, i) => {

    const match = cat === 'all' || img.classList.contains(cat);

    if (match) {

      img.style.display = "block";
      img.style.opacity = "0";
      img.style.transform = "translateY(12px) scale(0.98)";

      setTimeout(() => {
        img.style.transition = "all 0.55s cubic-bezier(0.2, 0.8, 0.2, 1)";
        img.style.opacity = "1";
        img.style.transform = "translateY(0) scale(1)";
      }, i * 20);

    } else {

      img.style.transition = "all 0.25s ease";
      img.style.opacity = "0";
      img.style.transform = "scale(0.96)";

      setTimeout(() => {
        img.style.display = "none";
      }, 250);
    }
  });
}

/* =========================
   INIT
========================= */
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
});
