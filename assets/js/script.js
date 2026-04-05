/* =========================
   THEME SYSTEM
========================= */
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
  updateThemeToggleIcon();
}

function updateThemeToggleIcon() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  themeToggle.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
  themeToggle.setAttribute(
    'aria-label',
    currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  );
}

/* =========================
   LANGUAGE SYSTEM
========================= */
function applyTranslations(lang) {
  document.documentElement.setAttribute('lang', lang);

  const elements = document.querySelectorAll('[data-en][data-el]');
  elements.forEach((el) => {
    const value = el.getAttribute(`data-${lang}`);
    if (value !== null) {
      el.textContent = value;
    }
  });

  const placeholders = document.querySelectorAll('[data-placeholder-en][data-placeholder-el]');
  placeholders.forEach((el) => {
    const value = el.getAttribute(`data-placeholder-${lang}`);
    if (value !== null) {
      el.setAttribute('placeholder', value);
    }
  });

  localStorage.setItem('lang', lang);
  updateReadingTime(lang);
}

function setLang(lang) {
  applyTranslations(lang);
}

function applySavedLanguage() {
  const savedLang = localStorage.getItem('lang') || 'en';
  applyTranslations(savedLang);
}

/* =========================
   SCROLL REVEAL
========================= */
function revealOnScroll() {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach((el) => {
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

  const items = gallery.querySelectorAll('.gallery-link, .gallery-item');
  const buttons = gallery.querySelectorAll('.filters button');

  buttons.forEach((btn) => btn.classList.remove('active'));

  if (event && event.target) {
    event.target.classList.add('active');
  }

  setGalleryTheme(cat);

  items.forEach((item, i) => {
    const img = item.querySelector('img');
    if (!img) return;

    const match = cat === 'all' || img.classList.contains(cat) || item.dataset.category === cat;

    if (match) {
      item.style.display = '';
      item.style.opacity = '0';
      item.style.transform = 'translateY(14px) scale(0.98)';

      setTimeout(() => {
        item.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0) scale(1)';
      }, i * 25);
    } else {
      item.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      item.style.opacity = '0';
      item.style.transform = 'scale(0.96)';

      setTimeout(() => {
        item.style.display = 'none';
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
      post.style.display = '';
      post.style.opacity = '0';
      post.style.transform = 'translateY(14px) scale(0.98)';

      setTimeout(() => {
        post.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
        post.style.opacity = '1';
        post.style.transform = 'translateY(0) scale(1)';
      }, i * 25);
    } else {
      post.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      post.style.opacity = '0';
      post.style.transform = 'scale(0.96)';

      setTimeout(() => {
        post.style.display = 'none';
      }, 250);
    }
  });
}

/* =========================
   GALLERY SEARCH
========================= */
function initGallerySearch() {
  const searchInput = document.querySelector('[data-gallery-search]');
  const gallery = document.querySelector('.gallery-page');
  if (!searchInput || !gallery) return;

  const items = gallery.querySelectorAll('.gallery-link, .gallery-item');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    items.forEach((item) => {
      const text = [
        item.dataset.title || '',
        item.dataset.category || '',
        item.dataset.tags || '',
        item.getAttribute('aria-label') || '',
        item.querySelector('img')?.alt || ''
      ]
        .join(' ')
        .toLowerCase();

      item.style.display = text.includes(query) ? '' : 'none';
    });
  });
}

/* =========================
   BLOG SEARCH
========================= */
function initBlogSearch() {
  const searchInput = document.querySelector('[data-blog-search]');
  const blog = document.querySelector('.blog-page');
  if (!searchInput || !blog) return;

  const posts = blog.querySelectorAll('.blog-post-card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    posts.forEach((post) => {
      const text = [
        post.dataset.title || '',
        post.dataset.category || '',
        post.dataset.tags || '',
        post.textContent || ''
      ]
        .join(' ')
        .toLowerCase();

      post.style.display = text.includes(query) ? '' : 'none';
    });
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
  }

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt = '') {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
  }

  galleryImages.forEach((img) => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(img.src, img.alt || '');
    });
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('show')) {
      closeLightbox();
    }
  });
}

/* =========================
   READING TIME
========================= */
function updateReadingTime(lang = 'en') {
  const readingTimeEl = document.querySelector('.post-reading-time');
  const postContent = document.querySelector('.post-content');

  if (!readingTimeEl || !postContent) return;

  const words = postContent.innerText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  readingTimeEl.textContent =
    lang === 'el'
      ? `• ${minutes} λεπτό${minutes > 1 ? 'ά' : ''} ανάγνωση`
      : `• ${minutes} min read`;
}

/* =========================
   COPY LINK BUTTON
========================= */
function initCopyLinkButton() {
  const copyBtn = document.querySelector('.copy-link-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const originalHTML = copyBtn.innerHTML;

    try {
      await navigator.clipboard.writeText(window.location.href);

      const lang = document.documentElement.getAttribute('lang') || 'en';
      copyBtn.innerHTML =
        lang === 'el'
          ? '<i class="fa-solid fa-check"></i><span>Αντιγράφηκε</span>'
          : '<i class="fa-solid fa-check"></i><span>Copied</span>';

      setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
      }, 1600);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  });
}

/* =========================
   BACK TO TOP
========================= */
function createBackToTopButton() {
  if (document.querySelector('.back-to-top')) return;

  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('type', 'button');
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '↑';

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.body.appendChild(btn);
}

function handleBackToTopVisibility() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  if (window.scrollY > 320) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
}

/* =========================
   LAZY LOAD SAFETY
========================= */
function applyLazyLoadingToImages() {
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach((img) => {
    img.setAttribute('loading', 'lazy');
  });
}

/* =========================
   THEME BUTTON INIT
========================= */
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;

  updateThemeToggleIcon();
  themeToggle.addEventListener('click', toggleTheme);
}

/* =========================
   LANGUAGE BUTTON INIT
========================= */
function initLanguageButtons() {
  const langButtons = document.querySelectorAll('.lang-btn');
  if (!langButtons.length) return;

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang) {
        setLang(lang);
      }
    });
  });
}

/* =========================
   INIT
========================= */
window.addEventListener('scroll', () => {
  revealOnScroll();
  handleBackToTopVisibility();
});

window.addEventListener('load', () => {
  applySavedTheme();
  applySavedLanguage();
  revealOnScroll();
  handleBackToTopVisibility();
});

document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  applySavedLanguage();

  revealOnScroll();
  initGalleryLightbox();
  initGallerySearch();
  initBlogSearch();
  initCopyLinkButton();
  initThemeToggle();
  initLanguageButtons();
  createBackToTopButton();
  handleBackToTopVisibility();
  applyLazyLoadingToImages();
  updateThemeToggleIcon();
});
