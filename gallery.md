---
layout: default
title: Gallery
permalink: /gallery/
---

<!-- WRAPPER (gallery-only scope) -->
<div class="gallery-page">

  <!-- HERO TITLE -->
  <section class="container fade-in" style="text-align:center; padding-top:120px;">
    <h2>Photography Gallery</h2>
    <p style="color: var(--muted); max-width:700px; margin:10px auto;">
      A curated collection of moments captured through travel, light, and emotion.
    </p>
  </section>

  <!-- FILTERS -->
  <section class="container fade-in">
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

  <!-- GALLERY GRID -->
  <section class="container fade-in">
    <div class="grid">

      <div class="gallery-link">
        <img src="/assets/images/nature-mountain-landscape.jpg" class="fade-in landscape" alt="Mountain landscape">
        <img src="/assets/images/meadow.jpg" class="fade-in landscape Nature" alt="meadow.jpg">
      </div>

    </div>
  </section>

  <!-- FOOTER -->
  <section class="container fade-in" style="text-align:center;">
    <p style="color: var(--muted); margin-top:40px;">
      Every image tells a story — captured, not created.
    </p>
  </section>

</div>
