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
  document.querySelectorAll('.fade-in').forEach((el) => {
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

  body.style.transition = 'background 0.8s ease';
}

/* =========================
   GALLERY FILTER SYSTEM
========================= */
function filterImages(cat, event) {
  const gallery = document.querySelector('.gallery-page');
  if (!gallery) return;

  const images = gallery.querySelectorAll('.grid img');
  const buttons = gallery.querySelectorAll('.filters button');

  buttons.forEach((btn) => btn.classList.remove('active'));

  if (event && event.target) {
    event.target.classList.add('active');
  }

  setGalleryTheme(cat);

  images.forEach((img, i) => {
    const match = cat === 'all' || img.classList.contains(cat);

    if (match) {
      img.style.display = 'block';
      img.style.opacity = '0';
      img.style.transform = 'translateY(10px) scale(0.98)';

      setTimeout(() => {
        img.style.transition = 'all 0.5s ease';
        img.style.opacity = '1';
        img.style.transform = 'translateY(0) scale(1)';
      }, i * 20);
    } else {
      img.style.transition = 'all 0.25s ease';
      img.style.opacity = '0';
      img.style.transform = 'scale(0.96)';

      setTimeout(() => {
        img.style.display = 'none';
      }, 250);
    }
  });
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

  body.style.transition = 'background 0.8s ease';
}

/* =========================
   BLOG FILTER SYSTEM
========================= */
function filterPosts(cat, event) {
  const blog = document.querySelector('.blog-page');
  if (!blog) return;

  const posts = blog.querySelectorAll('.blog-post-card');
  const buttons = blog.querySelectorAll('.blog-filters button');

  buttons.forEach((btn) => btn.classList.remove('active'));

  if (event && event.target) {
    event.target.classList.add('active');
  }

  setBlogTheme(cat);

  posts.forEach((post, i) => {
    const postCat = (post.dataset.category || 'other').toLowerCase();
    const match = cat === 'all' || postCat === cat;

    if (match) {
      post.style.display = 'block';
      post.style.opacity = '0';
      post.style.transform = 'translateY(10px) scale(0.98)';

      setTimeout(() => {
        post.style.transition = 'all 0.5s ease';
        post.style.opacity = '1';
        post.style.transform = 'translateY(0) scale(1)';
      }, i * 20);
    } else {
      post.style.transition = 'all 0.25s ease';
      post.style.opacity = '0';
      post.style.transform = 'scale(0.96)';

      setTimeout(() => {
        post.style.display = 'none';
      }, 250);
    }
  });
}

/* =========================
   GALLERY LIGHTBOX
========================= */
function initGalleryLightbox() {
  const gallery = document.querySelector('.gallery-page');
  if (!gallery) return;

  const galleryImages = gallery.querySelectorAll('.grid img');
  if (!galleryImages.length) return;

  let lightbox = document.querySelector('.lightbox');

  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close">×</button>
      <img src="" alt="">
    `;
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('lightbox') ||
        e.target.classList.contains('lightbox-close')
      ) {
        lightbox.classList.remove('show');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        lightbox.classList.remove('show');
      }
    });
  }

  const lightboxImg = lightbox.querySelector('img');

  galleryImages.forEach((img) => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || '';
      lightbox.classList.add('show');
    });
  });
}

/* =========================
   INIT
========================= */
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  initGalleryLightbox();
});
