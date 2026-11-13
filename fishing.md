
---
layout: default
title: Travelfilm_gr Bite time
permalink: /fishing/
---

<style>
/* FISHING THEME - ONLY FOR THIS PAGE */
body:has(.fishing-page) {
  --primary: #55b9ee;
  --muted: #a9bfd0;
  background: #06111d;
  color: #eef7ff;
}

.fishing-page {
  --fish-panel: #0b1d2d;
  --fish-panel-2: #10283b;
  --fish-blue: #55b9ee;
  --fish-text: #eef7ff;
  --fish-muted: #a9bfd0;
  color: var(--fish-text);
}

.fishing-page .fish-container {
  width: min(1100px, calc(100% - 36px));
  margin: 0 auto;
  padding: 34px 0;
}

.fishing-page .fish-hero {
  min-height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 22px;
  border-radius: 22px;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(3,12,22,.88), rgba(5,34,55,.76)),
    url('/assets/images/fishing-hero.jpg') center/cover no-repeat,
    #071a2b;
  border: 1px solid rgba(85,185,238,.25);
}

.fishing-page .fish-logo {
  display: block;
  width: min(260px, 70vw);
  height: auto;
  margin: 0 auto 22px;
  border-radius: 14px;
}

.fishing-page h1 {
  color: #fff;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
  margin: 0 0 12px;
}

.fishing-page h2 {
  color: #fff;
  margin: 0 0 12px;
}

.fishing-page p {
  color: var(--fish-muted);
  line-height: 1.8;
}

.fishing-page .fish-kicker {
  color: var(--fish-blue);
  text-transform: uppercase;
  letter-spacing: .16em;
  font-size: .78rem;
  font-weight: 700;
}

.fishing-page .fish-btn {
  display: inline-block;
  margin-top: 16px;
  padding: 12px 22px;
  border-radius: 999px;
  background: var(--fish-blue);
  color: #04111c;
  text-decoration: none;
  font-weight: 800;
  transition: transform .2s ease, filter .2s ease;
}

.fishing-page .fish-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.08);
}

.fishing-page .fish-section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}

.fishing-page .fish-link {
  color: var(--fish-blue);
  text-decoration: none;
  font-weight: 700;
}

.fishing-page .fish-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.fishing-page .fish-card {
  background: var(--fish-panel);
  border: 1px solid rgba(85,185,238,.16);
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
}

.fishing-page .fish-card img {
  display: block;
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
}

.fishing-page .fish-card-caption {
  padding: 13px 15px;
  color: #eaf6ff;
}

.fishing-page .fish-cta {
  text-align: center;
  padding: 38px 24px;
  border-radius: 18px;
  background: var(--fish-panel-2);
  border: 1px solid rgba(85,185,238,.2);
}

@media(max-width:600px) {
  .fishing-page .fish-hero {
    min-height: 360px;
  }

  .fishing-page .fish-container {
    width: calc(100% - 24px);
    padding: 24px 0;
  }
}
</style>

<div class="fishing-page">

  <!-- HERO -->
  <section class="fish-container">
    <div class="fish-hero">
      <div>

        <img
          class="fish-logo"
          src="/assets/bite-time-logo.png"
          alt="Travelfilm_gr Bite time logo"
        >

        <div class="fish-kicker">
          Fishing • Adventures • Moments
        </div>

        <h1>Travelfilm_gr Bite time</h1>

        <p style="max-width:680px;margin:0 auto;">
          Fishing stories, outdoor escapes and moments by the water — captured through my lens.
        </p>

        <a class="fish-btn" href="/fishing/gallery/">
          Explore Fishing Gallery
        </a>

      </div>
    </div>
  </section>

  <!-- INTRO -->
  <section class="fish-container">
    <div style="max-width:850px;">

      <div class="fish-kicker">Welcome to Bite time</div>

      <h2>A passion for fishing</h2>

      <p>
        Καλώς ήρθες στο Travelfilm_gr Bite time.
        Εδώ θα μοιράζομαι ψαρευτικές εξορμήσεις,
        στιγμές στη φύση, εικόνες και μικρές ιστορίες
        από τη θάλασσα και τα νερά που επισκέπτομαι.
      </p>

    </div>
  </section>

  <!-- LATEST FISHING PHOTOS -->
  <section class="fish-container">

    <div class="fish-section-head">
      <div>

        <div class="fish-kicker">From the water</div>

        <h2>Latest Fishing Shots</h2>

        <p style="max-width:650px;margin:0;">
          A selection of fishing moments and outdoor memories.
        </p>

      </div>

      <a class="fish-link" href="/fishing/gallery/">
        View all photos →
      </a>
    </div>

    <div class="fish-grid">

      {% assign fishing_count = 0 %}

      {% for shot in site.data.gallery reversed %}

        {% assign shot_category = shot.category | downcase %}

        {% if shot_category contains 'fishing' or shot_category contains 'ψαρε' %}

          {% assign image_filename = shot.image | split: '/' | last %}

          {% assign thumbnail_filename =
            image_filename
            | replace: '.jpg', '.webp'
            | replace: '.JPG', '.webp'
            | replace: '.jpeg', '.webp'
            | replace: '.JPEG', '.webp'
          %}

          <a
            class="fish-card"
            href="{{ shot.image | relative_url }}"
          >

            <img
              src="/assets/images/gallery-thumbs/{{ thumbnail_filename }}"
              alt="{{ shot.alt | escape }}"
              loading="lazy"
              decoding="async"
            >

            <div class="fish-card-caption">
              {{ shot.alt }}
            </div>

          </a>

          {% assign fishing_count = fishing_count | plus: 1 %}

          {% if fishing_count >= 6 %}
            {% break %}
          {% endif %}

        {% endif %}

      {% endfor %}

      {% if fishing_count == 0 %}

        <p>
          Οι φωτογραφίες ψαρέματος θα εμφανιστούν εδώ
          μόλις προστεθούν στο gallery data με category "Fishing".
        </p>

      {% endif %}

    </div>
  </section>

  <!-- CTA -->
  <section class="fish-container">

    <div class="fish-cta">

      <div class="fish-kicker">
        Keep the line tight
      </div>

      <h2>Every bite has a story.</h2>

      <p>
        Ακολούθησε τις εξορμήσεις και τις στιγμές
        του Travelfilm_gr Bite time.
      </p>

      <a class="fish-btn" href="/fishing/gallery/">
        View Fishing Gallery
      </a>

    </div>

  </section>

</div>
