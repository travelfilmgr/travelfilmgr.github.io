---
layout: default
title: Blog
permalink: /blog/
---

<h1>Blog</h1>
<div class="cards">
{% for post in site.posts %}
<div class="card">
<img src="{{ post.image }}">
<h3>{{ post.title }}</h3>
</div>
{% endfor %}
</div>
