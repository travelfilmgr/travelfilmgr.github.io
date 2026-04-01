---
layout: default
title: Blog
permalink: /blog/
---

<h1>Blog</h1>
<div class="posts">
{% for post in site.posts %}
<div class="card">
<a href="{{ post.url }}">
<img src="{{ post.image }}">
<h3>{{ post.title }}</h3>
</a>
</div>
{% endfor %}
</div>
