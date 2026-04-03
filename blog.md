---
layout: default
title: Blog
permalink: /blog/
---

<div class="blog-page">

  <!-- FEATURED -->
  <section class="blog-hero fade-in">
    {% assign featured = site.posts.first %}
    {% if featured %}
      <a href="{{ featured.url | relative_url }}" class="featured-post">
        {% if featured.image %}
          <img src="{{ featured.image }}" alt="{{ featured.title }}">
        {% endif %}

        <div class="featured-overlay">
          <span class="featured-label">Featured</span>
          <h1>{{ featured.title }}</h1>
        </div>
      </a>
    {% endif %}
  </section>

  <!-- TITLE -->
  <section class="container fade-in blog-intro">
    <h2>Latest Stories</h2>
  </section>

  <!-- 🔥 FILTER BUTTONS -->
  <section class="container fade-in">
    <div class="filters blog-filters">

      <button onclick="filterPosts('all', event)" class="active">All</button>
      <button onclick="filterPosts('travel', event)">Travel</button>
      <button onclick="filterPosts('tips', event)">Tips</button>
      <button onclick="filterPosts('city', event)">City</button>
      <button onclick="filterPosts('photography', event)">Photography</button>
      <button onclick="filterPosts('photography-tips', event)">Photography Tips</button>
      <button onclick="filterPosts('gear', event)">Gear</button>
      <button onclick="filterPosts('stories', event)">Stories</button>
      <button onclick="filterPosts('other', event)">Other</button>

    </div>
  </section>

  <!-- BLOG GRID -->
  <section class="container fade-in">
    <div class="cards blog-grid">

      {% for post in site.posts offset:1 %}
        <div 
          class="card blog-post-card fade-in"
          data-category="{{ post.category | default: 'other' | downcase }}"
        >

          <a href="{{ post.url | relative_url }}" class="blog-post-link">

            {% if post.image %}
              <img src="{{ post.image }}" alt="{{ post.title }}">
            {% endif %}

            <div class="blog-card-content">
              <div class="blog-meta">
                <span class="blog-tag">
                  {{ post.category | default: 'other' }}
                </span>

                <span class="blog-date">
                  {{ post.date | date: "%d %b %Y" }}
                </span>
              </div>

              <h3>{{ post.title }}</h3>

            </div>

          </a>

        </div>
      {% endfor %}

    </div>
  </section>

</div>
