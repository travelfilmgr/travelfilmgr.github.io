---
layout: default
title: Home
---

<section class="hero">
<div class="overlay">
<h1>Travel • Photography • Stories</h1>
<p>Explore the world through my lens</p>
</div>
</section>

<section>
<h2>Latest Posts</h2>
<div class="cards">
{% for post in site.posts limit:3 %}
<div class="card">
<img src="{{ post.image }}">
<h3>{{ post.title }}</h3>
</div>
{% endfor %}
</div>
</section>
