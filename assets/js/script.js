/* =========================
   DARK MODE
========================= */
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

/* =========================
   FILTER SYSTEM (PREMIUM)
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

  images.forEach(img => {
    const match = cat === 'all' || img.classList.contains(cat);

    if (match) {
      img.style.display = "block";
      requestAnimationFrame(() => {
        img.style.opacity = "1";
        img.style.transform = "scale(1)";
        img.style.filter = "brightness(0.9)";
      });
    } else {
      img.style.opacity = "0";
      img.style.transform = "scale(0.9)";

      setTimeout(() => {
        img.style.display = "none";
      }, 250);
    }
  });
}

/* =========================
   SCROLL ANIMATION
========================= */
function revealOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('show');
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
