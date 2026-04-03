/* =========================
   DARK MODE
========================= */
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

/* =========================
   SCROLL REVEAL
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
   🎨 THEME SYSTEM (WORKING 100%)
========================= */
function setGalleryTheme(cat) {
  const body = document.body;

  const themes = [
    'theme-nature','theme-city','theme-landscape',
    'theme-portrait','theme-street','theme-food',
    'theme-architecture','theme-fashion','theme-macro',
    'theme-pet','theme-realestate','theme-others'
  ];

  // remove all themes first
  body.classList.remove(...themes);

  // apply new theme
  if (cat && cat !== 'all') {
    body.classList.add(`theme-${cat}`);
  }

  // smooth transition
  body.style.transition = "background 0.8s ease";
}

/* =========================
   FILTER SYSTEM (FINAL VERSION)
========================= */
function filterImages(cat, event) {
  const images = document.querySelectorAll('.grid img');
  const buttons = document.querySelectorAll('.filters button');

  // reset active button
  buttons.forEach(btn => btn.classList.remove('active'));

  if (event && event.target) {
    event.target.classList.add('active');
  }

  // change background theme
  setGalleryTheme(cat);

  // animate images
  images.forEach((img, i) => {

    const match = cat === 'all' || img.classList.contains(cat);

    if (match) {

      img.style.display = "block";
      img.style.opacity = "0";
      img.style.transform = "translateY(10px) scale(0.98)";

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
   INIT EVENTS
========================= */
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
});
