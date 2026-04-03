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
   GALLERY THEME SYSTEM
========================= */
function setGalleryTheme(cat) {
  const body = document.body;

  const themes = [
    'theme-nature',
    'theme-city',
    'theme-landscape',
    'theme-portrait',
    'theme-street',
    'theme-food',
    'theme-architecture',
    'theme-fashion',
    'theme-macro',
    'theme-pet',
    'theme-realestate',
    'theme-others'
  ];

  body.classList.remove(...themes);

  if (cat && cat !== 'all') {
    body.classList.add(`theme-${cat}`);
  }

  body.style.transition = "background 0.8s ease";
}

/* =========================
   GALLERY FILTER SYSTEM
========================= */
function filterImages(cat, event) {
  const images = document.querySelectorAll('.grid img');
  const buttons = document.querySelectorAll('.filters button');

  if (!images.length) return;

  buttons.forEach(btn => btn.classList.remove('active'));

  if (event && event.target) {
    event.target.classList.add('active');
  }

  setGalleryTheme(cat);

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
   RESET GALLERY THEMES
========================= */
function resetGalleryThemeIfNoGallery() {
  const hasGalleryFilters = document.querySelector('.filters');
  const hasBlogFilters = document.querySelector('.blog-filters');

  if (hasGalleryFilters && !hasBlogFilters) return;

  document.body.classList.remove(
    'theme-nature',
    'theme-city',
    'theme-landscape',
    'theme-portrait',
    'theme-street',
    'theme-food',
    'theme-architecture',
    'theme-fashion',
    'theme-macro',
    'theme-pet',
    'theme-realestate',
    'theme-others'
  );
}

/* =========================
   BLOG THEME SYSTEM
========================= */
function setBlogTheme(cat) {
  const body = document.body;

  const blogThemes = [
    'blog-theme-travel',
    'blog-theme-tips',
    'blog-theme-city',
    'blog-theme-photography',
    'blog-theme-photography-tips',
    'blog-theme-gear',
    'blog-theme-stories',
    'blog-theme-other'
  ];

  body.classList.remove(...blogThemes);

  if (cat && cat !== 'all') {
    body.classList.add(`blog-theme-${cat}`);
  }

  body.style.transition = "background 0.8s ease";
}

/* =========================
   BLOG FILTER SYSTEM
========================= */
function filterPosts(cat, event) {
  const posts = document.querySelectorAll('.blog-post-card');
  const buttons = document.querySelectorAll('.blog-filters button');

  if (!posts.length) return;

  buttons.forEach(btn => btn.classList.remove('active'));

  if (event && event.target) {
    event.target.classList.add('active');
  }

  setBlogTheme(cat);

  posts.forEach((post, i) => {
    const postCat = (post.dataset.category || 'other').toLowerCase();
    const match = cat === 'all' || postCat === cat;

    if (match) {
      post.style.display = "block";
      post.style.opacity = "0";
      post.style.transform = "translateY(10px) scale(0.98)";

      setTimeout(() => {
        post.style.transition = "all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)";
        post.style.opacity = "1";
        post.style.transform = "translateY(0) scale(1)";
      }, i * 20);
    } else {
      post.style.transition = "all 0.25s ease";
      post.style.opacity = "0";
      post.style.transform = "scale(0.96)";

      setTimeout(() => {
        post.style.display = "none";
      }, 250);
    }
  });
}

/* =========================
   RESET BLOG THEMES
========================= */
function resetBlogThemeIfNoBlogFilters() {
  const hasBlogFilters = document.querySelector('.blog-filters');
  if (hasBlogFilters) return;

  document.body.classList.remove(
    'blog-theme-travel',
    'blog-theme-tips',
    'blog-theme-city',
    'blog-theme-photography',
    'blog-theme-photography-tips',
    'blog-theme-gear',
    'blog-theme-stories',
    'blog-theme-other'
  );
}

/* =========================
   INIT EVENTS
========================= */
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  resetGalleryThemeIfNoGallery();
  resetBlogThemeIfNoBlogFilters();
});
