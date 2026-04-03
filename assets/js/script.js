/* =========================
   DARK MODE
========================= */
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

/* =========================
   FILTER SYSTEM (SAFE PREMIUM)
========================= */
function filterImages(cat, event) {
  const images = document.querySelectorAll('.grid img');

  // active button highlight
  document.querySelectorAll('.filters button').forEach(btn => {
    btn.classList.remove('active');
  });

  if (event && event.target) {
    event.target.classList.add('active');
  }

  images.forEach((img, i) => {

    const match = cat === 'all' || img.classList.contains(cat);

    if (match) {

      img.style.display = "block";

      // reset safe animation state
      img.style.opacity = "0";
      img.style.transform = "translateY(10px) scale(0.98)";

      setTimeout(() => {
        img.style.transition = "all 0.4s ease";
        img.style.opacity = "1";
        img.style.transform = "translateY(0) scale(1)";
      }, i * 30); // stagger premium effect

    } else {

      img.style.transition = "all 0.25s ease";
      img.style.opacity = "0";
      img.style.transform = "scale(0.95)";

      setTimeout(() => {
        img.style.display = "none";
      }, 250);
    }
  });
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
   BACKGROUND INTERACTION (GALLERY ONLY SAFE)
========================= */
function setGalleryTheme(cat) {
  const gallery = document.querySelector('.gallery-page');
  if (!gallery) return;

  // remove old themes safely
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
}

/* =========================
   ENHANCED FILTER WRAPPER
========================= */
function filterImages(cat, event) {
  // run normal filter
  const images = document.querySelectorAll('.grid img');

  document.querySelectorAll('.filters button').forEach(btn => {
    btn.classList.remove('active');
  });

  if (event && event.target) {
    event.target.classList.add('active');
  }

  // gallery theme switch (SAFE)
  setGalleryTheme(cat);

  images.forEach((img, i) => {

    const match = cat === 'all' || img.classList.contains(cat);

    if (match) {

      img.style.display = "block";
      img.style.opacity = "0";
      img.style.transform = "translateY(10px) scale(0.98)";

      setTimeout(() => {
        img.style.transition = "all 0.5s ease";
        img.style.opacity = "1";
        img.style.transform = "translateY(0) scale(1)";
      }, i * 25);

    } else {

      img.style.transition = "all 0.25s ease";
      img.style.opacity = "0";
      img.style.transform = "scale(0.95)";

      setTimeout(() => {
        img.style.display = "none";
      }, 250);
    }
  });
}

/* =========================
   INIT SYSTEM
========================= */
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
});
