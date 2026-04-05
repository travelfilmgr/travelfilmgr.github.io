---
layout: default
title: Blog
permalink: /blog/
---

<div class="blog-page">

  {% assign featured = site.posts.first %}

  <!-- HERO FEATURED POST -->
  <section class="blog-hero fade-in">
    {% if featured %}
      <a href="{{ featured.url | relative_url }}" class="featured-post">
        {% if featured.image %}
          <img src="{{ featured.image }}" alt="{{ featured.title }}" loading="lazy">
        {% endif %}

        <div class="featured-overlay">
          <span class="featured-label" data-en="Featured Story" data-el="Προτεινόμενη Ιστορία">Featured Story</span>
          <h1>{{ featured.title }}</h1>

          {% if featured.excerpt %}
            <p>
              {{ featured.excerpt | strip_html | truncate: 160 }}
            </p>
          {% endif %}
        </div>
      </a>
    {% endif %}
  </section>

  <!-- TITLE / INTRO -->
  <section class="container fade-in blog-intro">
    <span
      data-en="Journal"
      data-el="Ημερολόγιο"
      style="
        display:inline-block;
        margin-bottom:12px;
        padding:6px 12px;
        border-radius:999px;
        background:rgba(255,255,255,0.06);
        border:1px solid rgba(255,255,255,0.1);
        font-size:12px;
        letter-spacing:0.08em;
        text-transform:uppercase;
        color:var(--primary);
      "
    >
      Journal
    </span>

    <h2 data-en="Latest Stories" data-el="Τελευταίες Ιστορίες">Latest Stories</h2>

    <p
      data-en="Notes, travel moments, photography thoughts, and stories gathered along the way."
      data-el="Σημειώσεις, ταξιδιωτικές στιγμές, φωτογραφικές σκέψεις και ιστορίες που μαζεύτηκαν στη διαδρομή."
      style="max-width:720px; margin:12px auto 0; color:var(--muted); line-height:1.8;"
    >
      Notes, travel moments, photography thoughts, and stories gathered along the way.
    </p>
  </section>

  <!-- SEARCH -->
  <section class="container fade-in" style="padding-top:0; padding-bottom:10px;">
    <div class="search-wrap">
      <input
        type="text"
        class="search-input"
        data-blog-search
        data-placeholder-en="Search posts..."
        data-placeholder-el="Αναζήτηση άρθρων..."
        placeholder="Search posts..."
        aria-label="Search blog posts"
      >
    </div>
  </section>

  <!-- FILTER BUTTONS -->
  <section class="container fade-in">
    <div class="filters blog-filters">
      <button onclick="filterPosts('all', event)" class="active" data-en="All" data-el="Όλα">All</button>
      <button onclick="filterPosts('travel', event)" data-en="Travel" data-el="Ταξίδια">Travel</button>
      <button onclick="filterPosts('tips', event)" data-en="Tips" data-el="Συμβουλές">Tips</button>
      <button onclick="filterPosts('city', event)" data-en="City" data-el="Πόλη">City</button>
      <button onclick="filterPosts('photography', event)" data-en="Photography" data-el="Φωτογραφία">Photography</button>
      <button onclick="filterPosts('photography-tips', event)" data-en="Photography Tips" data-el="Συμβουλές Φωτογραφίας">Photography Tips</button>
      <button onclick="filterPosts('gear', event)" data-en="Gear" data-el="Εξοπλισμός">Gear</button>
      <button onclick="filterPosts('stories', event)" data-en="Stories" data-el="Ιστορίες">Stories</button>
      <button onclick="filterPosts('other', event)" data-en="Other" data-el="Άλλο">Other</button>
    </div>
  </section>

  <!-- BLOG GRID -->
  <section class="container fade-in">
    <div class="cards blog-grid">

      {% for post in site.posts %}
        <div
          class="card blog-post-card fade-in"
          data-category="{{ post.category | default: 'other' | downcase }}"
          data-title="{{ post.title | escape }}"
          data-tags="{{ post.category | default: 'other' }} {{ post.title | escape }} {{ post.excerpt | strip_html | escape }}"
        >
          <a href="{{ post.url | relative_url }}" class="blog-post-link">

            {% if post.image %}
              <img src="{{ post.image }}" alt="{{ post.title }}" loading="lazy">
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

              {% if post.excerpt %}
                <p>
                  {{ post.excerpt | strip_html | truncate: 130 }}
                </p>
              {% endif %}
            </div>

          </a>
        </div>
      {% endfor %}

    </div>
  </section>

</div>
