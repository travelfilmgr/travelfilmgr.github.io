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
  color: #eef7ff;
  transition:
    border-color .25s ease,
    transform .25s ease;
}

.fishing-gallery-page .item:hover {
  border-color: rgba(85,185,238,.55);
  transform: translateY(-3px);
}

.fishing-gallery-page .item img {
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

/* PHOTO INFORMATION */

.fishing-gallery-page .caption {
  padding: 16px;
}

.fishing-gallery-page .caption-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.45;
  color: #f5f8fc;
  margin-bottom: 10px;
}

.fishing-gallery-page .category-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(85,185,238,.12);
  border: 1px solid rgba(85,185,238,.25);
  color: #65c5f6;
  font-size: .73rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.fishing-gallery-page .caption-description {
  font-size: .87rem;
  line-height: 1.65;
  color: #b7cada;
  margin-bottom: 14px;
}

.fishing-gallery-page .caption-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  color: #9fb9ce;
  font-size: .8rem;
  margin-bottom: 12px;
}

.fishing-gallery-page .caption-credit {
  border-top: 1px solid rgba(85,185,238,.15);
  padding-top: 11px;
  color: #65a0d0;
  font-size: .78rem;
  font-weight: 600;
}

.fishing-gallery-page .back {
  display: inline-block;
  color: var(--blue);
  text-decoration: none;
  font-weight: 700;
  margin-top: 14px;
}

.fishing-gallery-page .back:hover {
  text-decoration: underline;
}
</style>

<div class="fishing-gallery-page">

  <div class="wrap">

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
          aria-label="{{ shot.alt | escape }}"
        >

          <img
            src="{{ '/assets/images/gallery-thumbs/' | append: thumbnail_filename | relative_url }}"
            alt="{{ shot.alt | escape }}"
            loading="lazy"
            decoding="async"
            width="600"
            height="450"
          >

          <div class="caption">

            <div class="caption-title">
              {{ shot.alt | escape }}
            </div>

            {% if shot.category %}
              <span class="category-tag">
                {{ shot.category | escape }}
              </span>
            {% endif %}

            {% if shot.description %}
              <p class="caption-description">
                {{ shot.description | escape }}
              </p>
            {% endif %}

            {% if shot.location or shot.date %}

              <div class="caption-meta">

                {% if shot.location %}
                  <span>
                    📍 {{ shot.location | escape }}
                  </span>
                {% endif %}

                {% if shot.date %}
                  <span>
                    📅 {{ shot.date | date: "%d/%m/%Y" }}
                  </span>
                {% endif %}

              </div>

            {% endif %}

            {% if shot.camera %}
              <div class="caption-credit">
                {{ shot.camera | escape }}
              </div>
            {% endif %}

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

  </div>

</div>
