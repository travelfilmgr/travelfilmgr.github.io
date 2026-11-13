---
layout: default
title: Fishing Gallery
permalink: /fishing/gallery/
---

<style>
body:has(.fishing-gallery-page) {
  --primary: #55b9ee;
  --muted: #a9bfd0;
  background: #06111d;
  color: #eef7ff;
}

.fishing-gallery-page {
  --blue: #55b9ee;
  --muted: #a9bfd0;
  color: #eef7ff;
}

.fishing-gallery-page .wrap {
  width: min(1100px, calc(100% - 36px));
  margin: 0 auto;
  padding: 36px 0;
}

.fishing-gallery-page h1,
.fishing-gallery-page h2 {
  color: #fff;
}

.fishing-gallery-page p {
  color: var(--muted);
  line-height: 1.8;
}

.fishing-gallery-page .kicker {
  color: var(--blue);
  text-transform: uppercase;
  letter-spacing: .16em;
  font-size: .78rem;
  font-weight: 700;
}

.fishing-gallery-page .grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 280px), 320px)
  );
  justify-content: center;
  gap: 22px;
  margin-top: 30px;
}

.fishing-gallery-page .item {
  display: block;
  overflow: hidden;
  border-radius: 15px;
  background: #0b1d2d;
  border: 1px solid rgba(85,185,238,.18);
  text-decoration: none;
}

.fishing-gallery-page img {
  width: 100%;
  display: block;
  aspect-ratio: 4/3;
  object-fit: contain;
  background: #091522;
  transition: transform .25s ease;
}

.fishing-gallery-page .item:hover img {
  transform: scale(1.035);
}

.fishing-gallery-page .caption {
  padding: 12px 14px;
  color: #eef7ff;
}

.fishing-gallery-page .back {
  display: inline-block;
  color: var(--blue);
  text-decoration: none;
  font-weight: 700;
  margin-top: 14px;
}
</style>

<div class="fishing-gallery-page">

  <main class="wrap">

    <div class="kicker">
      Travelfilm_gr Bite time
    </div>

    <h1>Fishing Gallery</h1>

    <p>
      Ψαρευτικές στιγμές, εξορμήσεις και εικόνες από το νερό.
    </p>

    <a class="back" href="/fishing/">
      ← Back to Fishing
    </a>

    <div class="grid">

      {% assign fishing_count = 0 %}

      {% for shot in site.data.fishing_gallery reversed %}

        {% assign image_filename = shot.image | split: '/' | last %}

        {% assign thumbnail_filename =
          image_filename
          | replace: '.jpg', '.webp'
          | replace: '.JPG', '.webp'
          | replace: '.jpeg', '.webp'
          | replace: '.JPEG', '.webp'
        %}

        <a
          class="item"
          href="{{ shot.image | relative_url }}"
        >

          <img
            src="{{ '/assets/images/gallery-thumbs/' | append: thumbnail_filename | relative_url }}"
            alt="{{ shot.alt | escape }}"
            loading="lazy"
            decoding="async"
          >

          <div class="caption">
            {{ shot.alt | escape }}
          </div>

        </a>

        {% assign fishing_count = fishing_count | plus: 1 %}

      {% endfor %}

      {% if fishing_count == 0 %}

        <p>
          Δεν έχουν προστεθεί ακόμη φωτογραφίες ψαρέματος.
          Πρόσθεσε τις φωτογραφίες στο
          _data/fishing_gallery.yml.
        </p>

      {% endif %}

    </div>

  </main>

</div>
