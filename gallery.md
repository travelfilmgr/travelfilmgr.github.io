---
layout: default
title: Gallery
permalink: /gallery/
---

<div class="gallery-page">

  <!-- HERO -->
  <section class="container fade-in" style="text-align:center; padding-top:130px; padding-bottom:40px;">
    <div style="max-width:800px; margin:auto;">
      <span style="
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
      ">
        Visual Stories
      </span>

      <h1 style="font-size:2.8rem; margin-bottom:12px;">
        Photography Gallery
      </h1>

      <p style="color: var(--muted); max-width:680px; margin:auto; line-height:1.7;">
        A curated collection of moments captured through travel, light, and emotion.
      </p>
    </div>
  </section>

  <!-- FILTERS -->
  <section class="container fade-in" style="padding-top:0;">
    <div class="filters">
      <button onclick="filterImages('all', event)" class="active">All</button>
      <button onclick="filterImages('nature', event)">Nature</button>
      <button onclick="filterImages('city', event)">City</button>
      <button onclick="filterImages('landscape', event)">Landscape</button>
      <button onclick="filterImages('portrait', event)">Portrait</button>
      <button onclick="filterImages('street', event)">Street</button>
      <button onclick="filterImages('food', event)">Food</button>
      <button onclick="filterImages('architecture', event)">Architecture</button>
      <button onclick="filterImages('fashion', event)">Fashion</button>
      <button onclick="filterImages('macro', event)">Macro</button>
      <button onclick="filterImages('pet', event)">Pet</button>
      <button onclick="filterImages('realestate', event)">Real Estate</button>
      <button onclick="filterImages('others', event)">Others</button>
    </div>
  </section>

  <!-- GALLERY GRID (AUTO FROM YAML) -->
  <section class="container fade-in">
    <div class="grid">

      {% for shot in site.data.gallery %}
        <div class="gallery-link">
          <img 
            src="{{ shot.image }}" 
            class="fade-in {{ shot.category }}" 
            alt="{{ shot.alt }}"
          >
        </div>
      {% endfor %}

    </div>
  </section>

  <!-- FOOTER TEXT -->
  <section class="container fade-in" style="text-align:center;">
    <p style="
      color: var(--muted);
      margin-top:50px;
      font-size:0.95rem;
      letter-spacing:0.02em;
    ">
      Every image tells a story — captured, not created.
    </p>
  </section>

</div>
