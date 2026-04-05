---
layout: default
title: Gallery
permalink: /gallery/
---

<div class="gallery-page">

  <!-- HERO -->
  <section class="container fade-in" style="text-align:center; padding-top:130px; padding-bottom:40px;">
    <div style="max-width:800px; margin:auto;">
      <span
        data-en="Visual Stories"
        data-el="Οπτικές Ιστορίες"
        style="
          display:inline-block;
          margin-bottom:12px;
          padding:6px 12px;
          border-radius:999px;
          background:rgba(255,255,255,0.06);
          border:1px solid rgba(255,255,255,0.1);
          font-size:12px;
          letter-spacing:0.08em;
          text-transform:uppercase;
          color:var(--primary);
        "
      >
        Visual Stories
      </span>

      <h1
        data-en="Photography Gallery"
        data-el="Φωτογραφική Συλλογή"
        style="font-size:2.8rem; margin-bottom:12px;"
      >
        Photography Gallery
      </h1>

      <p
        data-en="A curated collection of moments captured through travel, light, and emotion."
        data-el="Μια επιλεγμένη συλλογή στιγμών αποτυπωμένων μέσα από ταξίδια, φως και συναίσθημα."
        style="color: var(--muted); max-width:680px; margin:auto; line-height:1.7;"
      >
        A curated collection of moments captured through travel, light, and emotion.
      </p>
    </div>
  </section>

  <!-- SEARCH -->
  <section class="container fade-in" style="padding-top:0; padding-bottom:10px;">
    <div class="search-wrap">
      <input
        type="text"
        class="search-input"
        data-gallery-search
        data-placeholder-en="Search photos..."
        data-placeholder-el="Αναζήτηση φωτογραφιών..."
        placeholder="Search photos..."
        aria-label="Search gallery"
      >
    </div>
  </section>

  <!-- FILTERS -->
  <section class="container fade-in" style="padding-top:0;">
    <div class="filters">
      <button onclick="filterImages('all', event)" class="active" data-en="All" data-el="Όλα">All</button>
      <button onclick="filterImages('nature', event)" data-en="Nature" data-el="Φύση">Nature</button>
      <button onclick="filterImages('city', event)" data-en="City" data-el="Πόλη">City</button>
      <button onclick="filterImages('landscape', event)" data-en="Landscape" data-el="Τοπίο">Landscape</button>
      <button onclick="filterImages('portrait', event)" data-en="Portrait" data-el="Πορτρέτο">Portrait</button>
      <button onclick="filterImages('street', event)" data-en="Street" data-el="Δρόμος">Street</button>
      <button onclick="filterImages('food', event)" data-en="Food" data-el="Φαγητό">Food</button>
      <button onclick="filterImages('architecture', event)" data-en="Architecture" data-el="Αρχιτεκτονική">Architecture</button>
      <button onclick="filterImages('fashion', event)" data-en="Fashion" data-el="Μόδα">Fashion</button>
      <button onclick="filterImages('macro', event)" data-en="Macro" data-el="Macro">Macro</button>
      <button onclick="filterImages('pet', event)" data-en="Pet" data-el="Κατοικίδιο">Pet</button>
      <button onclick="filterImages('realestate', event)" data-en="Real Estate" data-el="Ακίνητα">Real Estate</button>
      <button onclick="filterImages('others', event)" data-en="Others" data-el="Άλλα">Others</button>
    </div>
  </section>

  <!-- GALLERY GRID (AUTO FROM YAML) -->
  <section class="container fade-in">
    <div class="grid">

      {% for shot in site.data.gallery %}
        <div
          class="gallery-link gallery-item"
          data-category="{{ shot.category | downcase }}"
          data-title="{{ shot.alt }}"
          data-tags="{{ shot.category }} {{ shot.alt }}"
          aria-label="{{ shot.alt }}"
        >
          <img
            src="{{ shot.image }}"
            class="fade-in {{ shot.category | downcase }}"
            alt="{{ shot.alt }}"
            loading="lazy"
          >
          <div class="gallery-caption">{{ shot.alt }}</div>
        </div>
      {% endfor %}

    </div>
  </section>

  <!-- FOOTER TEXT -->
  <section class="container fade-in" style="text-align:center;">
    <p
      data-en="Every image tells a story — captured, not created."
      data-el="Κάθε εικόνα λέει μια ιστορία — αποτυπωμένη, όχι κατασκευασμένη."
      style="
        color: var(--muted);
        margin-top:50px;
        font-size:0.95rem;
        letter-spacing:0.02em;
      "
    >
      Every image tells a story — captured, not created.
    </p>
  </section>

</div>
