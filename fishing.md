
---
layout: default
title: Travelfilm_gr Bite time
permalink: /fishing/
---

<style>
/* =====================================
   TRAVELFILM_GR BITE TIME THEME
===================================== */

body:has(.fishing-page) {
  --primary: #55b9ee;
  --muted: #a9bfd0;
  background: #06111d;
  color: #eef7ff;
}

.fishing-page {
  --primary: #55b9ee;
  --muted: #a9bfd0;
  color: #eef7ff;
}

.fishing-page h1,
.fishing-page h2,
.fishing-page h3 {
  color: #ffffff;
}

.fishing-page .blog-intro p {
  color: #a9bfd0 !important;
}

/* BRAND HEADER */

.fishing-page .fish-brand {
  text-align: center;
  padding: 35px 20px 25px;
}

.fishing-page .fish-logo {
  display: block;
  width: min(280px, 80%);
  height: auto;
  margin: 0 auto 20px;
  border-radius: 14px;
}

.fishing-page .fish-brand h1 {
  font-size: clamp(28px, 5vw, 46px);
  margin: 10px 0;
  color: #ffffff;
}

.fishing-page .fish-brand p {
  color: #55b9ee;
  font-size: 12px;
  letter-spacing: .16em;
  text-transform: uppercase;
}

/* FEATURED ARTICLE */

.fishing-page .blog-hero {
  border: 1px solid rgba(85,185,238,.25);
  border-radius: 16px;
  overflow: hidden;
}

.fishing-page .featured-overlay {
  background: linear-gradient(
    to top,
    rgba(3,12,22,.96),
    rgba(3,12,22,.05)
  );
}

.fishing-page .featured-label {
  background: #55b9ee;
  color: #06111d;
}

/* INTRO */

.fishing-page .blog-intro {
  text-align: center;
}

.fishing-page .blog-intro h2 {
  color: #ffffff;
}

/* SEARCH */

.fishing-page .search-input {
  background: #0b1d2d;
  color: #ffffff;
  border: 1px solid rgba(85,185,238,.3);
}

.fishing-page .search-input::placeholder {
  color: #a9bfd0;
}

/* FILTERS */

.fishing-page .filters button {
  background: #0b1d2d;
  color: #c2d5e5;
  border: 1px solid rgba(85,185,238,.25);
  border-radius: 25px;
}

.fishing-page .filters button.active,
.fishing-page .filters button:hover {
  background: #55b9ee;
  color: #06111d;
  border-color: #55b9ee;
}

/* ARTICLE CARDS */

.fishing-page .card {
  background: #0b1d2d;
  border: 1px solid rgba(85,185,238,.2);
  border-radius: 15px;
  overflow: hidden;
  transition: transform .25s ease, border-color .25s ease;
}

.fishing-page .card:hover {
  transform: translateY(-5px);
  border-color: #55b9ee;
}

.fishing-page .blog-card-content h3 {
  color: #ffffff;
}

.fishing-page .blog-card-content p {
  color: #a9bfd0;
}

.fishing-page .blog-tag {
  background: rgba(85,185,238,.15);
  color: #55b9ee;
}

.fishing-page .blog-date {
  color: #a9bfd0;
}

/* GALLERY BUTTON */

.fishing-page .fish-gallery-link {
  text-align: center;
  padding: 25px 20px 35px;
}

.fishing-page .fish-gallery-link a {
  display: inline-block;
  padding: 13px 27px;
  background: #55b9ee;
  color: #06111d;
  text-decoration: none;
  font-weight: 800;
  border-radius: 30px;
  transition: .2s ease;
}

.fishing-page .fish-gallery-link a:hover {
  background: #ffffff;
  transform: translateY(-2px);
}

@media(max-width:600px) {
  .fishing-page .fish-brand {
    padding-top: 20px;
  }

  .fishing-page .fish-logo {
    width: min(230px, 85%);
  }
}
</style>

<div class="blog-page fishing-page">

  <!-- BITE TIME BRAND -->
  <section class="container fish-brand fade-in">

    <img
      src="/assets/bite-time-logo.png"
      alt="Travelfilm_gr Bite time"
      class="fish-logo"
    >

    <h1>Travelfilm_gr Bite time</h1>

    <p>
      Fishing • Adventures • Moments
    </p>

  </section>

  <!-- FIND FISHING ARTICLES -->

  {% assign fishing_posts = site.pages
    | where_exp: "item", "item.path contains 'fishing/'"
    | sort: "date"
    | reverse
  %}

  {% assign featured = nil %}

  {% for page in fishing_posts %}

    {% unless page.name == 'gallery.md' %}

      {% assign featured = page %}
      {% break %}

    {% endunless %}

  {% endfor %}

  <!-- FEATURED FISHING ARTICLE -->

  <section class="blog-hero fade-in">

    {% if featured %}

      {% assign featured_image_filename = featured.image | split: '/' | last %}

      {% assign featured_thumbnail_filename = featured_image_filename
        | replace: '.jpg', '.webp'
        | replace: '.JPG', '.webp'
        | replace: '.jpeg', '.webp'
        | replace: '.JPEG', '.webp'
      %}

      <a href="{{ featured.url | relative_url }}" class="featured-post">

        {% if featured.image %}

          <img
            src="/assets/images/gallery-thumbs/{{ featured_thumbnail_filename }}"
            data-full="{{ featured.image }}"
            alt="{{ featured.title }}"
            loading="lazy"
            decoding="async"
            width="1200"
            height="700"
          >

        {% endif %}

        <div class="featured-overlay">

          <span
            class="featured-label"
            data-en="Featured Fishing"
            data-el="Προτεινόμενο Ψάρεμα"
          >
            Featured Fishing
          </span>

          <h1>{{ featured.title }}</h1>

          {% if featured.excerpt %}

            <p>
              {{ featured.excerpt | strip_html | truncate: 160 }}
            </p>

          {% endif %}

        </div>

      </a>

    {% endif %}

  </section>

  <!-- INTRO -->

  <section class="container fade-in blog-intro">

    <span
      style="
        display:inline-block;
        margin-bottom:12px;
        padding:6px 12px;
        border-radius:999px;
        background:rgba(85,185,238,0.1);
        border:1px solid rgba(85,185,238,0.25);
        font-size:12px;
        letter-spacing:0.08em;
        text-transform:uppercase;
        color:var(--primary);
      "
    >
      Bite time
    </span>

    <h2
      data-en="Fishing Adventures"
      data-el="Ψαρευτικές Εξορμήσεις"
    >
      Fishing Adventures
    </h2>

    <p
      data-en="Fishing stories, outdoor adventures and moments captured by the water."
      data-el="Ψαρευτικές ιστορίες, εξορμήσεις στη φύση και στιγμές δίπλα στο νερό."
      style="
        max-width:720px;
        margin:12px auto 0;
        color:var(--muted);
        line-height:1.8;
      "
    >
      Fishing stories, outdoor adventures and moments captured by the water.
    </p>

  </section>

  <!-- GALLERY BUTTON -->

  <section class="container fish-gallery-link fade-in">

    <a href="/fishing/gallery/">

      <span
        data-en="Explore Fishing Gallery"
        data-el="Δείτε τη Φωτογραφική Gallery"
      >
        Explore Fishing Gallery
      </span>

    </a>

  </section>

  <!-- SEARCH -->

  <section
    class="container fade-in"
    style="padding-top:0; padding-bottom:10px;"
  >

    <div class="search-wrap">

      <input
        type="text"
        class="search-input"
        data-blog-search
        data-placeholder-en="Search fishing adventures..."
        data-placeholder-el="Αναζήτηση ψαρευτικών εξορμήσεων..."
        placeholder="Search fishing adventures..."
        aria-label="Search fishing adventures"
      >

    </div>

  </section>

  <!-- FILTERS -->

  <section class="container fade-in">

    <div class="filters blog-filters">

      <button
        onclick="filterPosts('all', event)"
        class="active"
        data-en="All"
        data-el="Όλα"
      >
        All
      </button>

      <button
        onclick="filterPosts('sea', event)"
        data-en="Sea"
        data-el="Θάλασσα"
      >
        Sea
      </button>

      <button
        onclick="filterPosts('shore', event)"
        data-en="Shore Fishing"
        data-el="Ακτή"
      >
        Shore Fishing
      </button>

      <button
        onclick="filterPosts('spinning', event)"
        data-en="Spinning"
        data-el="Spinning"
      >
        Spinning
      </button>

      <button
        onclick="filterPosts('freshwater', event)"
        data-en="Freshwater"
        data-el="Γλυκά Νερά"
      >
        Freshwater
      </button>

      <button
        onclick="filterPosts('other', event)"
        data-en="Other"
        data-el="Άλλα"
      >
        Other
      </button>

    </div>

  </section>

  <!-- FISHING ARTICLES GRID -->

  <section class="container fade-in">

    <div class="cards blog-grid">

      {% for fishing in fishing_posts %}

        {% unless fishing.name == 'gallery.md' %}

          {% assign fishing_image_filename = fishing.image | split: '/' | last %}

          {% assign fishing_thumbnail_filename = fishing_image_filename
            | replace: '.jpg', '.webp'
            | replace: '.JPG', '.webp'
            | replace: '.jpeg', '.webp'
            | replace: '.JPEG', '.webp'
          %}

          <div
            class="card blog-post-card fade-in"
            data-category="{{ fishing.category | default: 'other' | downcase }}"
            data-title="{{ fishing.title | escape }}"
            data-tags="{{ fishing.category | default: 'other' }} {{ fishing.title | escape }} {{ fishing.excerpt | strip_html | escape }}"
          >

            <!-- PHOTO -->

            {% if fishing.image %}

              <a
                href="{{ fishing.image }}"
                class="gallery-link"
                data-title="{{ fishing.title | escape }}"
                style="
                  display:block;
                  overflow:hidden;
                  cursor:zoom-in;
                "
              >

                <img
                  src="/assets/images/gallery-thumbs/{{ fishing_thumbnail_filename }}"
                  data-full="{{ fishing.image }}"
                  alt="{{ fishing.title }}"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                  style="width:100%;display:block;"
                >

              </a>

            {% endif %}

            <!-- ARTICLE CONTENT -->

            <div class="blog-card-content">

              <a
                href="{{ fishing.url | relative_url }}"
                class="blog-post-link"
                style="
                  text-decoration:none;
                  color:inherit;
                  display:block;
                "
              >

                <div class="blog-meta">

                  <span class="blog-tag">
                    {{ fishing.category | default: 'other' }}
                  </span>

                  {% if fishing.date %}

                    <span class="blog-date">
                      {{ fishing.date | date: "%d %b %Y" }}
                    </span>

                  {% endif %}

                </div>

                <h3>
                  {{ fishing.title }}
                </h3>

                {% if fishing.excerpt %}

                  <p>
                    {{ fishing.excerpt | strip_html | truncate: 130 }}
                  </p>

                {% endif %}

              </a>

            </div>

          </div>

        {% endunless %}

      {% endfor %}

    </div>

    {% assign article_count = 0 %}

    {% for fishing in fishing_posts %}

      {% unless fishing.name == 'gallery.md' %}
        {% assign article_count = article_count | plus: 1 %}
      {% endunless %}

    {% endfor %}

    {% if article_count == 0 %}

      <p style="text-align:center;color:var(--muted);padding:35px 10px;">
        New fishing adventures coming soon.
      </p>

    {% endif %}

  </section>

</div>
