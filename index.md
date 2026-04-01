---
layout: default
title: Home
---

<div class="hero">
  <h1>Travel • Photography • Stories</h1>
  <h2>Explore the world through my lens</h2>
</div>


<div class="container">
  <h2>Latest Posts</h2>

  {% for post in site.posts limit:3 %}
    <div class="post-card">
      <h3>{{ post.title }}</h3>
    </div>
  {% endfor %}
</div>
