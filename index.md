---
layout: default
title: Home
---

<!-- HERO -->
<section class="hero fade-in">
  <div class="overlay">
    <h1>Travel • Photography • Stories</h1>
    <p>Explore the world through my lens</p>

    <a href="#gallery" class="btn">Explore Gallery</a>
  </div>
</section>

<!-- INTRO -->
<section class="container fade-in">
  <h2>Welcome</h2>
  <p style="color: var(--muted); max-width: 800px; margin-top:10px;">
    A visual journey through landscapes, people, and moments captured around the world.
    Photography is not just images — it’s emotion, light, and story.
  </p>
</section>

<!-- BLOG POSTS -->
<section class="container fade-in">
  <h2>Latest Posts</h2>

  <div class="cards">
    {% for post in site.posts limit:3 %}
      <div class="card">
        {% if post.image %}
          <img src="{{ post.image }}" alt="{{ post.title }}">
        {% endif %}
        <h3>{{ post.title }}</h3>
      </div>
    {% endfor %}
  </div>
</section>

<!-- GALLERY + FILTERS -->
<section class="container fade-in" id="gallery">

  <h2>Photography Gallery</h2>

  <!-- FILTER BUTTONS -->
  <div class="filters">
    <button onclick="filterImages('all', event)" class="active">All</button>
    <button onclick="filterImages('nature', event)">Nature</button>
    <button onclick="filterImages('landscape', event)">Landscape</button>
    <button onclick="filterImages('astrophotography', event)">Astro</button>
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

  <!-- GRID -->
  <div class="grid">
    {% for post in site.posts limit:12 %}
      {% if post.image %}
        <img
          src="{{ post.image }}"
          alt="{{ post.title }}"
          class="fade-in {{ post.category | default: 'others' }}"
        >
      {% endif %}
    {% endfor %}
  </div>

</section>

<!-- CTA -->
<section class="container fade-in">
  <div class="card" style="text-align:center; padding:40px;">
    <h2>Let’s Create Together</h2>
    <p style="color: var(--muted);">
      Photography • Travel • Collaborations
    </p>
    <a href="#" class="btn">Contact Me</a>
  </div>
</section>
