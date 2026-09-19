---
layout: default
title: Roadtrips
permalink: /roadtrips/
---

<div class="blog-page">

  {% assign roadtrips = site.pages | where_exp: "item", "item.path contains 'roadtrips/'" | sort: "date" | reverse %}
  {% assign featured = roadtrips.first %}

  <!-- HERO FEATURED ROADTRIP -->
  <section class="blog-hero fade-in">
    {% if featured %}
      <a href="{{ featured.url | relative_url }}" class="featured-post">
        {% if featured.image %}
          <img src="{{ featured.image }}" alt="{{ featured.title }}" loading="lazy">
        {% endif %}

        <div class="featured-overlay">
          <span class="featured-label" data-en="Featured Roadtrip" data-el="Προτεινόμενο Roadtrip">Featured Roadtrip</span>
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

  <!-- TITLE / INTRO -->
  <section class="container fade-in blog-intro">
    <span
      data-en="In Situ"
      data-el="In Situ"
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
      In Situ
    </span>

    <h2 data-en="Roadtrips & Routes" data-el="Roadtrips & Διαδρομές">Roadtrips & Routes</h2>

    <p
      data-en="Visual stories, routes, and notes from my roadtrips."
      data-el="Οπτικές ιστορίες, διαδρομές και σημειώσεις από τις εξορμήσεις μου."
      style="max-width:720px; margin:12px auto 0; color:var(--muted); line-height:1.8;"
    >
      Visual stories, routes, and notes from my roadtrips.
    </p>
  </section>

  <!-- SEARCH -->
  <section class="container fade-in" style="padding-top:0; padding-bottom:10px;">
    <div class="search-wrap">
      <input
        type="text"
        class="search-input"
        data-blog-search
        data-placeholder-en="Search roadtrips..."
        data-placeholder-el="Αναζήτηση roadtrips..."
        placeholder="Search roadtrips..."
        aria-label="Search roadtrips"
      >
    </div>
  </section>

  <!-- FILTER BUTTONS -->
  <section class="container fade-in">
    <div class="filters blog-filters">
      <button onclick="filterPosts('all', event)" class="active" data-en="All" data-el="Όλα">All</button>
      <button onclick="filterPosts('mountain', event)" data-en="Mountain" data-el="Βουνό">Mountain</button>
      <button onclick="filterPosts('forest', event)" data-en="Forest" data-el="Δάσος">Forest</button>
      <button onclick="filterPosts('seaside', event)" data-en="Seaside" data-el="Θάλασσα">Seaside</button>
      <button onclick="filterPosts('villages', event)" data-en="Villages" data-el="Χωριά">Villages</button>
      <button onclick="filterPosts('off-road', event)" data-en="Off-Road" data-el="Off-Road">Off-Road</button>
    </div>
  </section>

  <!-- ROADTRIPS GRID -->
  <section class="container fade-in">
    <div class="cards blog-grid">

      {% for trip in roadtrips %}
        <div
          class="card blog-post-card fade-in"
          data-category="{{ trip.category | default: 'other' | downcase }}"
          data-title="{{ trip.title | escape }}"
          data-tags="{{ trip.category | default: 'other' }} {{ trip.title | escape }} {{ trip.excerpt | strip_html | escape }}"
        >
          <a href="{{ trip.url | relative_url }}" class="blog-post-link">

            {% if trip.image %}
              <img src="{{ trip.image }}" alt="{{ trip.title }}" loading="lazy">
            {% endif %}

            <div class="blog-card-content">
              <div class="blog-meta">
                <span class="blog-tag">
                  {{ trip.category | default: 'other' }}
                </span>

                {% if trip.date %}
                  <span class="blog-date">
                    {{ trip.date | date: "%d %b %Y" }}
                  </span>
                {% endif %}
              </div>

              <h3>{{ trip.title }}</h3>

              {% if trip.excerpt %}
                <p>
                  {{ trip.excerpt | strip_html | truncate: 130 }}
                </p>
              {% endif %}
            </div>

          </a>
        </div>
      {% endfor %}

    </div>
  </section>

</div>
