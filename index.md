---
layout: default
title: Home
---

<!-- HERO -->
<section class="hero">
  <div class="overlay">
    <h1>Travel • Photography • Stories</h1>
    <p>Explore the world through my lens</p>
  </div>
</section>

<!-- BLOG POSTS -->
<section class="container">
  <h2>Latest Posts</h2>

  <div class="cards">
    {% for post in site.posts limit:3 %}
      <div class="card">
        <img src="{{ post.image }}" alt="{{ post.title }}">
        <h3>{{ post.title }}</h3>
      </div>
    {% endfor %}
  </div>
</section>

<!-- GALLERY -->
<section class="container">
  <h2>Latest Shots</h2>

  <div class="grid">
    {% for post in site.posts limit:6 %}
      {% if post.image %}
        <img src="{{ post.image }}" alt="{{ post.title }}">
      {% endif %}
    {% endfor %}
  </div>
</section>
