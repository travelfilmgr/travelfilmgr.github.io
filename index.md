---
layout: default
title: Home
---

<!-- HERO -->
<section class="hero fade-in">
  <div class="overlay">
    <span style="
      display:inline-block;
      margin-bottom:14px;
      padding:7px 14px;
      border-radius:999px;
      background:rgba(255,255,255,0.08);
      border:1px solid rgba(255,255,255,0.12);
      color:var(--primary);
      font-size:12px;
      letter-spacing:0.08em;
      text-transform:uppercase;
    ">
      TravelFilm GR
    </span>

    <h1>Travel • Photography • Stories</h1>

    <p>
      Explore places, moods, and moments through a cinematic visual journey.
    </p>

    <a href="/gallery/" class="btn">View Gallery</a>
  </div>
</section>

<!-- INTRO -->
<section class="container fade-in">
  <div style="max-width:900px;">
    <h2 style="margin-bottom:14px;">Welcome</h2>

    <p style="color: var(--muted); max-width: 800px; line-height:1.8;">
      A visual journey through landscapes, people, cities, and fleeting moments captured along the way.
      For me, photography is more than an image — it is atmosphere, emotion, light, and the story a place leaves behind.
    </p>
  </div>
</section>

<!-- BLOG POSTS -->
<section class="container fade-in">
  <div style="
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    gap:20px;
    flex-wrap:wrap;
    margin-bottom:18px;
  ">
    <div>
      <h2 style="margin-bottom:10px;">Latest Posts</h2>
      <p style="color:var(--muted); max-width:680px; line-height:1.7;">
        Recent travel notes, visual stories, and photography-inspired moments from the road.
      </p>
    </div>

    <a href="/blog/" style="
      color:var(--primary);
      text-decoration:none;
      font-weight:600;
    ">
      View all posts →
    </a>
  </div>

  <div class="cards">
    {% if site.posts.size > 0 %}
      {% for post in site.posts limit:3 %}
        <div class="card">
          <a href="{{ post.url | relative_url }}" style="text-decoration:none; color:inherit; display:block;">
            {% if post.image %}
              <img src="{{ post.image }}" alt="{{ post.title }}">
            {% endif %}

            <div style="padding:18px;">
              {% if post.category %}
                <span style="
                  display:inline-block;
                  margin-bottom:10px;
                  padding:5px 10px;
                  border-radius:999px;
                  background:rgba(255,204,0,0.10);
                  border:1px solid rgba(255,204,0,0.18);
                  color:var(--primary);
                  font-size:12px;
                  font-weight:600;
                  text-transform:uppercase;
                ">
                  {{ post.category }}
                </span>
              {% endif %}

              <h3 style="padding:0; margin-bottom:10px;">{{ post.title }}</h3>

              {% if post.excerpt %}
                <p style="color:var(--muted); line-height:1.7;">
                  {{ post.excerpt | strip_html | truncate: 110 }}
                </p>
              {% endif %}
            </div>
          </a>
        </div>
      {% endfor %}
    {% else %}
      <p style="color: var(--muted);">No posts yet.</p>
    {% endif %}
  </div>
</section>

<!-- GALLERY PREVIEW -->
<section class="container fade-in">
  <div style="
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    gap:20px;
    flex-wrap:wrap;
    margin-bottom:18px;
  ">
    <div>
      <h2 style="margin-bottom:10px;">Latest Shots</h2>
      <p style="color:var(--muted); max-width:680px; line-height:1.7;">
        A small selection of recent frames, moments, and visual highlights from my gallery.
      </p>
    </div>

    <a href="/gallery/" style="
      color:var(--primary);
      text-decoration:none;
      font-weight:600;
    ">
      Explore gallery →
    </a>
  </div>

  <div class="grid">
    {% if site.data.gallery.size > 0 %}
      {% for shot in site.data.gallery limit:6 %}
        <div class="gallery-link fade-in">
          <img
            src="{{ shot.image }}"
            alt="{{ shot.alt }}"
            class="fade-in {{ shot.category }}"
          >
        </div>
      {% endfor %}
    {% else %}
      <p style="color: var(--muted);">No shots yet.</p>
    {% endif %}
  </div>
</section>

<!-- CTA -->
<section class="container fade-in">
  <div class="card" style="text-align:center; padding:48px 30px;">
    <span style="
      display:inline-block;
      margin-bottom:14px;
      padding:6px 12px;
      border-radius:999px;
      background:rgba(255,255,255,0.06);
      border:1px solid rgba(255,255,255,0.1);
      color:var(--primary);
      font-size:12px;
      letter-spacing:0.08em;
      text-transform:uppercase;
    ">
      Let’s Connect
    </span>

    <h2 style="margin-bottom:12px;">Open to New Opportunities</h2>

    <p style="color: var(--muted); max-width:700px; margin:0 auto; line-height:1.8;">
      Travel, photography, visual storytelling, and creative collaborations — this space reflects the work, passion, and atmosphere behind every frame.
    </p>

    <a href="/about/" class="btn">Contact Me</a>
  </div>
</section>
