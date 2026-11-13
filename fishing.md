---
layout: default
title: "TravelFilmGR Bite Time"
permalink: /fishing/
---

<style>
/* =========================================
   TRAVELFILMGR BITE TIME
   FISHING PAGE ONLY
========================================= */

body:has(.fishing-page) {
  --primary: #65a0d0;
  --muted: #aec7dd;

  background: linear-gradient(
    180deg,
    #06101b 0%,
    #10355a 48%,
    #06101b 100%
  );

  color: #f5f8fc;
}

.fishing-page {
  --primary: #65a0d0;
  --muted: #aec7dd;

  color: #f5f8fc;
  min-height: 100vh;
}

.fishing-page h1,
.fishing-page h2,
.fishing-page h3 {
  color: #f5f8fc;
}

/* =========================================
   LOGO AND INTRO
========================================= */

.fishing-page .fish-brand {
  padding-top: 145px;
  padding-bottom: 24px;
  text-align: center;
}

.fishing-page .fish-logo {
  display: block;

  width: min(280px, 82%);
  height: auto;

  margin: 0 auto 24px;

  border-radius: 20px;

  border: 1px solid rgba(101,160,208,.25);

  box-shadow:
    0 20px 55px rgba(0,0,0,.28);
}

.fishing-page .fish-brand h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 12px;
}

.fishing-page .fish-brand h1 span {
  color: #65a0d0;
}

.fishing-page .fish-brand p {
  max-width: 660px;
  margin: 0 auto;

  color: #aec7dd;
  line-height: 1.75;
}

/* =========================================
   SEPARATE FISHING GALLERY BUTTON
========================================= */

.fishing-page .fish-gallery-link {
  padding-top: 0;
  padding-bottom: 30px;
  text-align: center;
}

.fishing-page .fish-gallery-link a {
  display: inline-block;

  padding: 13px 28px;
  border-radius: 999px;

  background: linear-gradient(
    135deg,
    #65a0d0,
    #92c6ea
  );

  color: #06101b;

  font-weight: 800;
  text-decoration: none;

  transition:
    transform .2s ease,
    box-shadow .2s ease;
}

.fishing-page .fish-gallery-link a:hover {
  transform: translateY(-2px);

  box-shadow:
    0 12px 30px rgba(101,160,208,.24);
}

/* =========================================
   FEATURED FISHING ARTICLE
========================================= */

.fishing-page .blog-hero {
  padding: 10px 20px 22px;
}

.fishing-page .featured-post {
  min-height: 320px;

  background: linear-gradient(
    135deg,
    #10355a,
    #06101b
  );

  border: 1px solid rgba(101,160,208,.25);
}

.fishing-page .featured-post img {
  height: 400px;
}

.fishing-page .featured-post:not(:has(img)) {
  min-height: 300px;
}

.fishing-page .featured-post:not(:has(img))
.featured-overlay {
  position: relative;

  padding: 55px 10px;

  left: auto;
  right: auto;
  bottom: auto;
}

.fishing-page .featured-label {
  background: #65a0d0;
  color: #06101b;
  border-color: #65a0d0;
}

.fishing-page .featured-overlay h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1.2;
  margin-bottom: 12px;
}

.fishing-page .featured-overlay p {
  color: #e0edf7;
}

/* =========================================
   BLOG INTRO AND SEARCH
========================================= */

.fishing-page .blog-intro {
  padding-top: 28px;
  padding-bottom: 18px;
}

.fishing-page .blog-intro p {
  color: #aec7dd;
}

.fishing-page .search-input {
  color: #fff;

  background: #0b2135;

  border-color: rgba(101,160,208,.30);
}

.fishing-page .search-input::placeholder {
  color: #aec7dd;
}

/* =========================================
   CATEGORY FILTERS
========================================= */

.fishing-page .filters button {
  background: #0b2135;
  color: #d2e4f2;

  border-color: rgba(101,160,208,.3);
}

.fishing-page .filters button:hover,
.fishing-page .filters button.active {
  background: #65a0d0;
  color: #06101b;
  border-color: #65a0d0;
}

/* =========================================
   ARTICLE CARDS
========================================= */

.fishing-page .card {
  background: linear-gradient(
    180deg,
    #10355a,
    #0b2135
  );

  border-color: rgba(101,160,208,.24);
}

.fishing-page .blog-post-card img {
  display: block;

  width: 100%;
  height: 230px;

  object-fit: cover;
}

.fishing-page .fish-no-photo {
  display: grid;
  place-items: center;

  height: 230px;

  background: linear-gradient(
    135deg,
    #285e91,
    #06101b
  );

  font-size: 3rem;
}

.fishing-page .blog-tag {
  color: #65a0d0;

  background: rgba(101,160,208,.12);

  border-color: rgba(101,160,208,.25);
}

.fishing-page .blog-post-card p,
.fishing-page .blog-date {
  color: #aec7dd;
}

.fishing-page .blog-post-card h3 {
  color: #fff;
}

.fishing-page .fish-empty {
  padding: 40px 20px;
  text-align: center;
  color: #aec7dd;
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 768px) {

  .fishing-page .fish-brand {
    padding-top: 155px;
  }

  .fishing-page .featured-post img {
    height: 320px;
  }

  .fishing-page .featured-overlay {
    left: 18px;
    right: 18px;
    bottom: 18px;
  }

}

</style>

{% comment %}
Fishing articles can be created inside fishing/
Example: fishing/my-tips.md

Use category:
tips, sea, shore, spinning,
freshwater or other.

You can also use _posts with:
category: fishing
fishing_category: tips
{% endcomment %}

{% assign fishing_pages = site.pages | where_exp: "item", "item.path contains 'fishing/'" %}

{% assign fishing_blog_posts = site.posts | where: "category", "fishing" %}

{% assign fishing_articles = fishing_pages | concat: fishing_blog_posts | sort: "date" | reverse %}

{% assign featured = nil %}
{% assign fishing_count = 0 %}

{% for entry in fishing_articles %}

  {% unless entry.name == 'gallery.md' %}

    {% assign fishing_count = fishing_count | plus: 1 %}

    {% if featured == nil %}
      {% assign featured = entry %}
    {% endif %}

  {% endunless %}

{% endfor %}


<div class="blog-page fishing-page">

  <!-- =====================================
       BITE TIME BRAND
  ====================================== -->

  <section class="container fish-brand fade-in">

    <img
      class="fish-logo"
      src="{{ '/assets/bite-time-logo.png' | relative_url }}"
      alt="TravelFilmGR Bite Time"
      width="280"
      height="280"
    >

    <h1>
      TravelFilmGR <span>Bite Time</span>
    </h1>

    <p
      data-en="Fishing stories, practical tips, techniques and adventures by the water."
      data-el="Ψαρευτικές ιστορίες, συμβουλές, τεχνικές και εξορμήσεις δίπλα στο νερό."
    >
      Fishing stories, practical tips, techniques and adventures by the water.
    </p>

  </section>


  <!-- =====================================
       SEPARATE FISHING GALLERY
  ====================================== -->

  <section class="container fish-gallery-link fade-in">

    <a href="{{ '/fishing/gallery/' | relative_url }}">

      <span
        data-en="📷 Explore Fishing Gallery"
        data-el="📷 Δες τη Fishing Gallery"
      >
        📷 Explore Fishing Gallery
      </span>

    </a>

  </section>


  <!-- =====================================
       LATEST FISHING ARTICLE
  ====================================== -->

  {% if featured %}

    <section class="blog-hero fade-in">

      <a
        href="{{ featured.url | relative_url }}"
        class="featured-post"
      >

        {% if featured.image %}

          <img
            src="{{ featured.image | relative_url }}"
            alt="{{ featured.title | escape }}"
            loading="eager"
            width="1200"
            height="700"
          >

        {% endif %}

        <div class="featured-overlay">

          <span
            class="featured-label"
            data-en="Latest Fishing Article"
            data-el="Τελευταίο Άρθρο Ψαρέματος"
          >
            Latest Fishing Article
          </span>

          <h2>
            {{ featured.title | escape }}
          </h2>

          {% if featured.excerpt %}

            <p>
              {{ featured.excerpt | strip_html | truncate: 160 }}
            </p>

          {% endif %}

        </div>

      </a>

    </section>

  {% endif %}


  <!-- =====================================
       BLOG AND TIPS TITLE
  ====================================== -->

  <section class="container fade-in blog-intro">

    <h2
      data-en="Fishing Blog & Tips"
      data-el="Άρθρα & Tips Ψαρέματος"
    >
      Fishing Blog & Tips
    </h2>

    <p
      data-en="My fishing experiences, guides and useful tips — newest first."
      data-el="Οι εμπειρίες, οι οδηγοί και τα χρήσιμα tips μου για το ψάρεμα — πρώτα τα νεότερα."
    >
      My fishing experiences, guides and useful tips — newest first.
    </p>

  </section>


  {% if fishing_count > 0 %}

    <!-- =====================================
         SEARCH
    ====================================== -->

    <section
      class="container fade-in"
      style="padding-top:0;padding-bottom:10px;"
    >

      <div class="search-wrap">

        <input
          type="search"
          class="search-input"
          data-blog-search
          data-en-placeholder="Search fishing articles..."
          data-el-placeholder="Αναζήτηση άρθρων ψαρέματος..."
          placeholder="Search fishing articles..."
          aria-label="Search fishing articles"
        >

      </div>

    </section>


    <!-- =====================================
         ARTICLE FILTERS
    ====================================== -->

    <section
      class="container fade-in"
      style="padding-top:10px;padding-bottom:10px;"
    >

      <div class="filters blog-filters">

        <button
          type="button"
          class="active"
          onclick="filterPosts('all', event)"
          data-en="All"
          data-el="Όλα"
        >
          All
        </button>

        <button
          type="button"
          onclick="filterPosts('tips', event)"
          data-en="Tips"
          data-el="Συμβουλές"
        >
          Tips
        </button>

        <button
          type="button"
          onclick="filterPosts('sea', event)"
          data-en="Sea"
          data-el="Θάλασσα"
        >
          Sea
        </button>

        <button
          type="button"
          onclick="filterPosts('shore', event)"
          data-en="Shore"
          data-el="Ακτή"
        >
          Shore
        </button>

        <button
          type="button"
          onclick="filterPosts('spinning', event)"
        >
          Spinning
        </button>

        <button
          type="button"
          onclick="filterPosts('freshwater', event)"
          data-en="Freshwater"
          data-el="Γλυκά Νερά"
        >
          Freshwater
        </button>

        <button
          type="button"
          onclick="filterPosts('other', event)"
          data-en="Other"
          data-el="Άλλα"
        >
          Other
        </button>

      </div>

    </section>


    <!-- =====================================
         ALL FISHING ARTICLES AND TIPS
    ====================================== -->

    <section
      class="container fade-in"
      style="padding-top:18px;"
    >

      <div class="cards blog-grid">

        {% for entry in fishing_articles %}

          {% unless entry.name == 'gallery.md' %}

            {% assign entry_type = entry.fishing_category | default: entry.category | default: 'other' | downcase %}

            <div
              class="card blog-post-card fade-in"
              data-category="{{ entry_type | escape }}"
              data-title="{{ entry.title | escape }}"
              data-tags="{{ entry.tags | join: ' ' | escape }} {{ entry.excerpt | strip_html | escape }}"
            >

              <a
                href="{{ entry.url | relative_url }}"
                class="blog-post-link"
              >

                {% if entry.image %}

                  <img
                    src="{{ entry.image | relative_url }}"
                    alt="{{ entry.title | escape }}"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="400"
                  >

                {% else %}

                  <div
                    class="fish-no-photo"
                    aria-hidden="true"
                  >
                    🎣
                  </div>

                {% endif %}

                <div class="blog-card-content">

                  <div class="blog-meta">

                    <span class="blog-tag">
                      {{ entry_type | escape }}
                    </span>

                    {% if entry.date %}

                      <span class="blog-date">
                        {{ entry.date | date: '%d %b %Y' }}
                      </span>

                    {% endif %}

                  </div>

                  <h3>
                    {{ entry.title | escape }}
                  </h3>

                  {% if entry.excerpt %}

                    <p>
                      {{ entry.excerpt | strip_html | truncate: 130 }}
                    </p>

                  {% endif %}

                </div>

              </a>

            </div>

          {% endunless %}

        {% endfor %}

      </div>

    </section>


  {% else %}

    <!-- =====================================
         NO ARTICLES YET
    ====================================== -->

    <section
      class="container fade-in"
      style="padding-top:10px;"
    >

      <p
        class="fish-empty"
        data-en="Fishing articles and tips are coming soon. Meanwhile, explore the Fishing Gallery above."
        data-el="Σύντομα θα ανεβάσω άρθρα και tips ψαρέματος. Μέχρι τότε, δες τη Fishing Gallery από το κουμπί παραπάνω."
      >
        Fishing articles and tips are coming soon.
        Meanwhile, explore the Fishing Gallery above.
      </p>

    </section>

  {% endif %}

</div>
