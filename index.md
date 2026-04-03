---
layout: default
title: Home
---

<!-- HERO -->
<section class="hero fade-in">
  <div class="overlay">
    <h1>Travel • Photography • Stories</h1>
    <p>Explore the world through my lens</p>

    <a href="/gallery" class="btn">View Gallery</a>
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

<!-- GALLERY PREVIEW (NO FILTERS - CLEAN) -->
<section class="container fade-in">
  <h2>Latest Shots</h2>

  <div class="grid">
    {% for post in site.posts limit:6 %}
      {% if post.image %}
        <img
          src="{{ post.image }}"
          alt="{{ post.title }}"
          class="fade-in"
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
   <a href="/about/" class="btn">Contact Me</a>
  </div>
</section>
