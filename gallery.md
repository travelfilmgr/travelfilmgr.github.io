---
layout: default
title: Gallery
permalink: /gallery/
---

<div class="gallery-page">

  <style>
    .search-wrap {
      max-width: 680px;
      margin: 0 auto;
    }

    .search-input {
      width: 100%;
      padding: 14px 18px;
      border-radius: 14px;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.04);
      color: #fff;
      outline: none;
      font-size: 15px;
    }

    .search-input::placeholder {
      color: var(--muted);
    }

    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      margin: 10px 0 30px 0;
    }

    .filters button {
      padding: 10px 16px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.04);
      color: #fff;
      cursor: pointer;
      transition: 0.3s ease;
      font-size: 14px;
    }

    .filters button:hover,
    .filters button.active {
      background: var(--primary);
      color: #000;
      border-color: var(--primary);
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      padding-bottom: 60px;
    }

    .gallery-item {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 18px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .gallery-item:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.18);
    }

    .gallery-item img {
      width: 100%;
      height: 240px;
      object-fit: cover;
      display: block;
    }

    .gallery-info {
      padding: 16px;
    }

    .gallery-info h3 {
      margin: 0 0 10px 0;
      font-size: 1.1rem;
      color: #fff;
    }

    .gallery-info p {
      margin: 6px 0;
      line-height: 1.6;
      color: var(--muted);
      font-size: 0.95rem;
    }

    .gallery-info p strong {
      color: #fff;
    }

    .gallery-category {
      display: inline-block;
      margin-bottom: 10px;
      padding: 4px 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      color: var(--primary);
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .no-results {
      display: none;
      text-align: center;
      color: var(--muted);
      padding: 30px 0 50px 0;
      font-size: 1rem;
    }
  </style>

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
      <button onclick="filterImages('nature', event)">Nature</button>
      <button onclick="filterImages('landscape', event)">Landscape</button>
      <button onclick="filterImages('travel', event)">Travel</button>
      <button onclick="filterImages('street', event)">Street</button>
      <button onclick="filterImages('portrait', event)">Portrait</button>
    </div>
  </section>

  <!-- GALLERY -->
  <section class="container fade-in" style="padding-top:10px; padding-bottom:60px;">
    <div class="gallery-grid" id="galleryGrid">
      {% for item in site.data.gallery %}
        <div
          class="gallery-item"
          data-category="{{ item.category | downcase }}"
          data-search="{{ item.alt | downcase }} {{ item.category | downcase }} {{ item.description | downcase }} {{ item.location | downcase }} {{ item.camera | downcase }} {{ item.date }}"
        >
          <img src="{{ item.image }}" alt="{{ item.alt }}">

          <div class="gallery-info">
            {% if item.category %}
              <span class="gallery-category">{{ item.category }}</span>
            {% endif %}

            <h3>{{ item.alt }}</h3>

            {% if item.description %}
              <p>{{ item.description }}</p>
            {% endif %}

            {% if item.location %}
              <p><strong>Location:</strong> {{ item.location }}</p>
            {% endif %}

            {% if item.camera %}
              <p><strong>Camera:</strong> {{ item.camera }}</p>
            {% endif %}

            {% if item.date %}
              <p><strong>Date:</strong> {{ item.date }}</p>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>

    <div class="no-results" id="noResults">No photos found.</div>
  </section>

</div>

<script>
  let activeCategory = 'all';

  function applyGalleryFilters() {
    const searchInput = document.querySelector('[data-gallery-search]');
    const cards = document.querySelectorAll('.gallery-item');
    const noResults = document.getElementById('noResults');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;

    cards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const searchText = card.getAttribute('data-search') || '';

      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      const matchesSearch = searchText.includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  function filterImages(category, event) {
    activeCategory = category;

    document.querySelectorAll('.filters button').forEach(button => {
      button.classList.remove('active');
    });

    if (event && event.target) {
      event.target.classList.add('active');
    }

    applyGalleryFilters();
  }

  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('[data-gallery-search]');

    if (searchInput) {
      searchInput.addEventListener('input', applyGalleryFilters);
    }

    applyGalleryFilters();
  });
</script>
