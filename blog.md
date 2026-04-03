---
layout: default
title: Blog
permalink: /blog/
---

<div class="blog-page">

<!-- HERO FEATURED -->
<section class="blog-hero fade-in">
  {% assign featured = site.posts.first %}
  {% if featured.image %}
    <div class="hero-card">
      <img src="{{ featured.image }}">
      <div class="hero-overlay">
        <h2>{{ featured.title }}</h2>
      </div>
    </div>
  {% endif %}
</section>

<!-- BLOG GRID -->
<section class="container fade-in">

  <h2>Latest Stories</h2>

  <div class="cards blog-grid">
    {% for post in site.posts offset:1 %}
    <div class="card">
      {% if post.image %}
        <img src="{{ post.image }}">
      {% endif %}
      <h3>{{ post.title }}</h3>
    </div>
    {% endfor %}
  </div>

</section>

</div>
