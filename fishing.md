---
layout: default
title: "TravelFilmGR Bite Time"
permalink: /fishing/
---

<style>
/* ============================================
   TRAVELFILMGR BITE TIME — FISHING HOME
   Independent styling: does not change the
   Roadtrips, Blog or main Gallery pages.
============================================ */

body:has(.bite-page) {
  --primary: #65a0d0;
  --accent: #285e91;
  --muted: #aec7dd;
  background:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(40, 94, 145, .22),
      transparent 48%
    ),
    linear-gradient(
      180deg,
      #06101b 0%,
      #081a2c 48%,
      #06101b 100%
    );
  color: #f5f8fc;
}

.bite-page {
  --bite-bg: #06101b;
  --bite-panel: #0b2135;
  --bite-panel-2: #10355a;
  --bite-blue: #65a0d0;
  --bite-blue-dark: #285e91;
  --bite-text: #f5f8fc;
  --bite-muted: #aec7dd;
  --bite-border: rgba(101, 160, 208, .23);

  color: var(--bite-text);
  min-height: 100vh;
  padding: 126px 0 80px;
}

.bite-page *,
.bite-page *::before,
.bite-page *::after {
  box-sizing: border-box;
}

.bite-page .bite-wrap {
  width: min(1160px, calc(100% - 36px));
  margin-inline: auto;
}

/* ============================================
   BRAND / LOGO
============================================ */

.bite-page .bite-brand {
  text-align: center;
  padding: 15px 0 30px;
}

.bite-page .bite-logo {
  width: min(300px, 78vw);
  height: auto;
  display: block;
  margin: 0 auto 22px;
  border-radius: 22px;
  border: 1px solid var(--bite-border);
  box-shadow:
    0 22px 70px rgba(0, 0, 0, .35),
    0 0 45px rgba(101, 160, 208, .09);
}

.bite-page h1,
.bite-page h2,
.bite-page h3 {
  color: var(--bite-text);
}

.bite-page .bite-brand h1 {
  font-size: clamp(2rem, 5vw, 3.4rem);
  line-height: 1.13;
  margin-bottom: 13px;
}

.bite-page .bite-brand h1 span {
  color: var(--bite-blue);
}

.bite-page .bite-eyebrow {
  color: var(--bite-blue);
  font-size: .76rem;
  font-weight: 800;
  letter-spacing: .19em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.bite-page .bite-lead {
  color: var(--bite-muted);
  font-size: clamp(.95rem, 2vw, 1.1rem);
  line-height: 1.75;
  max-width: 640px;
  margin: 0 auto;
}

/* ============================================
   SEPARATE FISHING GALLERY BUTTON
============================================ */

.bite-page .bite-gallery-action {
  text-align: center;
  margin: 26px auto 44px;
}

.bite-page .bite-gallery-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  min-height: 48px;
  padding: 13px 25px;

  border-radius: 999px;
  text-decoration: none;

  background: linear-gradient(
    135deg,
    #65a0d0,
    #8fc2e6
  );

  color: #06101b;
  font-weight: 800;

  box-shadow:
    0 12px 32px rgba(32, 105, 167, .23);

  transition:
    transform .2s ease,
    box-shadow .2s ease,
    filter .2s ease;
}

.bite-page .bite-gallery-btn:hover,
.bite-page .bite-gallery-btn:focus-visible {
  transform: translateY(-2px);

  box-shadow:
    0 16px 36px rgba(32, 105, 167, .35);

  filter: brightness(1.06);
}

/* ============================================
   FISHING BLOG / TIPS HEADER
============================================ */

.bite-page .bite-section-head {
  text-align: center;
  margin: 0 auto 25px;
}

.bite-page .bite-section-head h2 {
  font-size: clamp(1.65rem, 3.5vw, 2.45rem);
  margin-bottom: 10px;
}

.bite-page .bite-section-head p {
  color: var(--bite-muted);
  line-height: 1.7;
  max-width: 650px;
  margin-inline: auto;
}

/* ============================================
   FEATURED FISHING ARTICLE
============================================ */

.bite-page .bite-featured {
  position: relative;
  display: block;
  min-height: 340px;

  border: 1px solid var(--bite-border);
  border-radius: 24px;
  overflow: hidden;

  text-decoration: none;
  color: var(--bite-text);
  background: var(--bite-panel);

  margin-bottom: 30px;

  box-shadow:
    0 22px 50px rgba(0, 0, 0, .24);
}

.bite-page .bite-featured img {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform .45s ease;
}

.bite-page .bite-featured:hover img {
  transform: scale(1.035);
}

.bite-page .bite-featured::after {
  content: "";
  position: absolute;
  inset: 0;

  background: linear-gradient(
    180deg,
    rgba(3, 11, 21, .28),
    rgba(3, 11, 21, .95)
  );
}

.bite-page .bite-featured-content {
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  min-height: 340px;
  padding: clamp(22px, 5vw, 38px);
}

.bite-page .bite-label {
  display: inline-block;
  align-self: flex-start;

  color: #071321;
  background: var(--bite-blue);

  padding: 6px 12px;
  border-radius: 999px;

  font-weight: 800;
  font-size: .73rem;
  margin-bottom: 14px;
}

.bite-page .bite-featured h3 {
  font-size: clamp(1.5rem, 3vw, 2.45rem);
  line-height: 1.22;
  max-width: 730px;
  margin-bottom: 10px;
}

.bite-page .bite-featured p {
  color: #e0e9f2;
  max-width: 720px;
  line-height: 1.7;
}

/* ============================================
   SEARCH AND CATEGORY FILTERS
============================================ */

.bite-page .bite-controls {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 17px;
  margin: 10px auto 27px;
}

.bite-page .bite-search {
  width: min(420px, 100%);
  min-height: 45px;

  border-radius: 999px;
  border: 1px solid var(--bite-border);
  outline: none;

  padding: 12px 18px;

  background: #0b2135;
  color: #ffffff;
  font: inherit;
}

.bite-page .bite-search::placeholder {
  color: #aec7dd;
}

.bite-page .bite-search:focus {
  border-color: var(--bite-blue);
}

.bite-page .bite-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 9px;
}

.bite-page .bite-filter {
  border-radius: 999px;
  border: 1px solid var(--bite-border);

  padding: 9px 15px;

  background: #0b2135;
  color: var(--bite-muted);

  cursor: pointer;
  font: inherit;
  font-size: .85rem;
  font-weight: 700;

  transition:
    background .2s ease,
    color .2s ease,
    border-color .2s ease;
}

.bite-page .bite-filter:hover,
.bite-page .bite-filter[aria-pressed="true"] {
  background: var(--bite-blue);
  border-color: var(--bite-blue);
  color: #06101b;
}

/* ============================================
   FISHING ARTICLE CARDS
============================================ */

.bite-page .bite-grid {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(min(100%, 270px), 1fr));

  gap: 22px;
}

.bite-page .bite-card {
  min-width: 0;
  overflow: hidden;

  border-radius: 20px;
  border: 1px solid var(--bite-border);

  background: linear-gradient(
    180deg,
    #10304b,
    #0b2135
  );

  transition:
    transform .23s ease,
    border-color .23s ease;
}

.bite-page .bite-card:hover {
  transform: translateY(-4px);
  border-color: var(--bite-blue);
}

.bite-page .bite-card a {
  display: block;
  color: inherit;
  text-decoration: none;
  height: 100%;
}

.bite-page .bite-card img,
.bite-page .bite-card-placeholder {
  width: 100%;
  height: 215px;
  display: block;
  object-fit: cover;
}

.bite-page .bite-card-placeholder {
  display: grid;
  place-items: center;

  background: radial-gradient(
    circle,
    #285e91,
    #06101b
  );

  color: #cce8fa;
  font-size: 3rem;
}

.bite-page .bite-card-body {
  padding: 19px 20px 22px;
}

.bite-page .bite-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 8px 12px;
  margin-bottom: 12px;

  font-size: .78rem;
  color: var(--bite-muted);
}

.bite-page .bite-category {
  color: var(--bite-blue);
  font-weight: 800;
  text-transform: capitalize;
}

.bite-page .bite-card h3 {
  line-height: 1.35;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.bite-page .bite-card p {
  color: var(--bite-muted);
  font-size: .93rem;
  line-height: 1.7;
}

/* ============================================
   EMPTY STATES
============================================ */

.bite-page .bite-empty {
  text-align: center;
  padding: 35px 20px;

  color: var(--bite-muted);

  border: 1px dashed var(--bite-border);
  border-radius: 18px;

  background: rgba(11, 33, 53, .5);
}

.bite-page [hidden] {
  display: none !important;
}

/* ============================================
   MOBILE RESPONSIVE
============================================ */

@media (max-width: 768px) {
  .bite-page {
    padding-top: 135px;
  }

  .bite-page .bite-featured,
  .bite-page .bite-featured-content {
    min-height: 285px;
  }

  .bite-page .bite-gallery-action {
    margin-bottom: 38px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bite-page *,
  .bite-page *::before,
  .bite-page *::after {
    transition-duration: .01ms !important;
  }
}
</style>

{% comment %}
FISHING ARTICLES:

1. Pages inside fishing/
   Example: fishing/my-first-trip.md

2. Posts inside _posts/
   Must have category: fishing
   OR tags containing fishing.

For filtering:
Use category: sea, shore, spinning,
freshwater or other for fishing pages.

For _posts articles, use tags containing
fishing and set their category to the
specific fishing topic.
{% endcomment %}

{% assign bite_posts = site.posts | where_exp: "post", "post.categories contains 'fishing' or post.tags contains 'fishing'" %}

{% assign bite_pages = site.pages | where_exp: "item", "item.path contains 'fishing/'" %}

{% assign bite_articles = bite_posts | concat: bite_pages | sort: 'date' | reverse %}

{% assign bite_featured = nil %}
{% assign bite_count = 0 %}

{% for article in bite_articles %}
  {% unless article.name == 'gallery.md' or article.url == '/fishing/gallery/' %}
    {% assign bite_count = bite_count | plus: 1 %}

    {% if bite_featured == nil %}
      {% assign bite_featured = article %}
    {% endif %}
  {% endunless %}
{% endfor %}

<!-- ==========================================
     TRAVELFILMGR BITE TIME HOMEPAGE
=========================================== -->

<div class="bite-page">

  <div class="bite-wrap">

    <!-- OFFICIAL BITE TIME LOGO -->

    <section class="bite-brand">

      <img
        class="bite-logo"
        src="{{ '/assets/bite-time-logo.png' | relative_url }}"
        alt="TravelFilmGR Bite Time logo"
        width="300"
        height="300"
        fetchpriority="high"
      >

      <p class="bite-eyebrow">
        Fishing • Adventures • Moments
      </p>

      <h1>
        TravelFilmGR <span>Bite Time</span>
      </h1>

      <p
        class="bite-lead"
        data-en="Fishing stories, practical tips, techniques and moments by the water."
        data-el="Ψαρευτικές ιστορίες, χρήσιμες συμβουλές, τεχνικές και στιγμές δίπλα στο νερό."
      >
        Fishing stories, practical tips, techniques and moments by the water.
      </p>

    </section>

    <!-- =====================================
         SEPARATE FISHING PHOTO GALLERY
    ====================================== -->

    <div class="bite-gallery-action">

      <a
        class="bite-gallery-btn"
        href="{{ '/fishing/gallery/' | relative_url }}"
      >

        <span aria-hidden="true">📷</span>

        <span
          data-en="View Fishing Gallery"
          data-el="Δες τη Fishing Gallery"
        >
          View Fishing Gallery
        </span>

      </a>

    </div>

    <!-- =====================================
         MAIN FISHING BLOG AND TIPS
    ====================================== -->

    <section aria-labelledby="bite-blog-title">

      <div class="bite-section-head">

        <p class="bite-eyebrow">
          Bite Time Journal
        </p>

        <h2
          id="bite-blog-title"
          data-en="Fishing Blog & Tips"
          data-el="Άρθρα & Συμβουλές Ψαρέματος"
        >
          Fishing Blog & Tips
        </h2>

        <p
          data-en="Experiences, techniques and useful ideas from every fishing trip."
          data-el="Εμπειρίες, τεχνικές και χρήσιμες ιδέες από κάθε ψαρευτική εξόρμηση."
        >
          Experiences, techniques and useful ideas from every fishing trip.
        </p>

      </div>

      {% if bite_count > 0 %}

        <!-- MOST RECENT FISHING ARTICLE -->

        <a
          class="bite-featured"
          data-bite-post
          data-category="{{ bite_featured.category | default: 'other' | downcase | escape }}"
          data-tags="{{ bite_featured.tags | join: ' ' | downcase | escape }}"
          href="{{ bite_featured.url | relative_url }}"
        >

          {% if bite_featured.image %}

            <img
              src="{{ bite_featured.image | relative_url }}"
              alt="{{ bite_featured.title | escape }}"
              width="1200"
              height="700"
              loading="eager"
            >

          {% endif %}

          <div class="bite-featured-content">

            <span
              class="bite-label"
              data-en="Latest Fishing Article"
              data-el="Τελευταίο Άρθρο Ψαρέματος"
            >
              Latest Fishing Article
            </span>

            <h3>
              {{ bite_featured.title | escape }}
            </h3>

            {% if bite_featured.excerpt %}

              <p>
                {{ bite_featured.excerpt | strip_html | strip_newlines | truncate: 180 }}
              </p>

            {% endif %}

          </div>

        </a>

        <!-- =================================
             SEARCH AND FILTER CONTROLS
        ================================== -->

        <div class="bite-controls">

          <input
            class="bite-search"
            type="search"
            id="bite-search"
            aria-label="Search fishing articles"
            data-en-placeholder="Search articles and fishing tips..."
            data-el-placeholder="Αναζήτηση άρθρων και συμβουλών..."
            placeholder="Search articles and fishing tips..."
          >

          <div
            class="bite-filters"
            role="group"
            aria-label="Fishing categories"
          >

            <button
              type="button"
              class="bite-filter"
              data-bite-filter="all"
              aria-pressed="true"
              data-en="All"
              data-el="Όλα"
            >
              All
            </button>

            <button
              type="button"
              class="bite-filter"
              data-bite-filter="sea"
              aria-pressed="false"
              data-en="Sea"
              data-el="Θάλασσα"
            >
              Sea
            </button>

            <button
              type="button"
              class="bite-filter"
              data-bite-filter="shore"
              aria-pressed="false"
              data-en="Shore"
              data-el="Ακτή"
            >
              Shore
            </button>

            <button
              type="button"
              class="bite-filter"
              data-bite-filter="spinning"
              aria-pressed="false"
            >
              Spinning
            </button>

            <button
              type="button"
              class="bite-filter"
              data-bite-filter="freshwater"
              aria-pressed="false"
              data-en="Freshwater"
              data-el="Γλυκά Νερά"
            >
              Freshwater
            </button>

            <button
              type="button"
              class="bite-filter"
              data-bite-filter="other"
              aria-pressed="false"
              data-en="Other"
              data-el="Άλλα"
            >
              Other
            </button>

          </div>

        </div>

        <!-- =================================
             ALL OTHER FISHING POSTS
        ================================== -->

        {% if bite_count > 1 %}

          <div
            class="bite-grid"
            id="bite-posts"
          >

            {% for article in bite_articles %}

              {% unless article.name == 'gallery.md' or article.url == '/fishing/gallery/' or article.url == bite_featured.url %}

                <article
                  class="bite-card"
                  data-bite-post
                  data-category="{{ article.category | default: 'other' | downcase | escape }}"
                  data-tags="{{ article.tags | join: ' ' | downcase | escape }}"
                >

                  <a href="{{ article.url | relative_url }}">

                    {% if article.image %}

                      <img
                        src="{{ article.image | relative_url }}"
                        alt="{{ article.title | escape }}"
                        width="600"
                        height="400"
                        loading="lazy"
                        decoding="async"
                      >

                    {% else %}

                      <div
                        class="bite-card-placeholder"
                        aria-hidden="true"
                      >
                        🎣
                      </div>

                    {% endif %}

                    <div class="bite-card-body">

                      <div class="bite-meta">

                        <span class="bite-category">
                          {{ article.category | default: 'Fishing' | escape }}
                        </span>

                        {% if article.date %}

                          <time
                            datetime="{{ article.date | date: '%Y-%m-%d' }}"
                          >
                            {{ article.date | date: '%d/%m/%Y' }}
                          </time>

                        {% endif %}

                      </div>

                      <h3>
                        {{ article.title | escape }}
                      </h3>

                      {% if article.excerpt %}

                        <p>
                          {{ article.excerpt | strip_html | strip_newlines | truncate: 145 }}
                        </p>

                      {% endif %}

                    </div>

                  </a>

                </article>

              {% endunless %}

            {% endfor %}

          </div>

        {% endif %}

        <!-- NO SEARCH RESULTS -->

        <p
          class="bite-empty"
          id="bite-no-results"
          hidden
          data-en="No articles match your search or category."
          data-el="Δεν βρέθηκαν άρθρα για αυτή την αναζήτηση ή κατηγορία."
        >
          No articles match your search or category.
        </p>

      {% else %}

        <!-- NO FISHING ARTICLES YET -->

        <div class="bite-empty">

          <p
            data-en="Fishing articles and tips are coming soon. The photo gallery is already available through the button above."
            data-el="Σύντομα θα προστεθούν άρθρα και συμβουλές ψαρέματος. Η φωτογραφική Gallery ανοίγει από το κουμπί παραπάνω."
          >
            Fishing articles and tips are coming soon.
            The photo gallery is already available
            through the button above.
          </p>

        </div>

      {% endif %}

    </section>

  </div>

</div>

<!-- ==========================================
     INDEPENDENT FISHING FILTER SCRIPT
=========================================== -->

<script>
(function () {

  const root = document.querySelector('.bite-page');

  if (!root) return;

  const search = root.querySelector('#bite-search');

  const buttons = Array.from(
    root.querySelectorAll('[data-bite-filter]')
  );

  const articles = Array.from(
    root.querySelectorAll('[data-bite-post]')
  );

  const noResults = root.querySelector('#bite-no-results');

  if (!search || !articles.length) return;

  const knownCategories = [
    'sea',
    'shore',
    'spinning',
    'freshwater'
  ];

  let activeCategory = 'all';

  function refresh() {

    const query = search.value
      .trim()
      .toLocaleLowerCase();

    let visibleCount = 0;

    articles.forEach(function (article) {

      const category = (
        article.dataset.category || 'other'
      ).toLowerCase();

      const tags = (
        article.dataset.tags || ''
      ).toLowerCase().split(/\s+/);

      const hasKnownCategory = knownCategories.some(
        function (name) {
          return (
            category === name ||
            tags.includes(name)
          );
        }
      );

      const categoryMatches =
        activeCategory === 'all' ||
        (
          activeCategory === 'other'
            ? !hasKnownCategory
            : (
                category === activeCategory ||
                tags.includes(activeCategory)
              )
        );

      const textMatches =
        !query ||
        article.textContent
          .toLocaleLowerCase()
          .includes(query);

      const visible =
        categoryMatches && textMatches;

      article.hidden = !visible;

      if (visible) {
        visibleCount += 1;
      }

    });

    if (noResults) {
      noResults.hidden = visibleCount > 0;
    }

  }

  buttons.forEach(function (button) {

    button.addEventListener('click', function () {

      activeCategory =
        button.dataset.biteFilter || 'all';

      buttons.forEach(function (item) {

        item.setAttribute(
          'aria-pressed',
          String(item === button)
        );

      });

      refresh();

    });

  });

  search.addEventListener('input', refresh);

})();
</script>
