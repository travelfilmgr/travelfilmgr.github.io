---
layout: default
title: Gallery
permalink: /gallery/
---

<div class="gallery-page">

  <!-- HERO -->
  <section class="container fade-in" style="text-align:center; padding-top:130px; padding-bottom:40px;">
    <div style="max-width:800px; margin:auto;">

      <span
        data-en="Visual Stories"
        data-el="Οπτικές Ιστορίες"
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
        Visual Stories
      </span>

      <h1
        data-en="Photography Gallery"
        data-el="Φωτογραφική Συλλογή"
        style="font-size:2.8rem; margin-bottom:12px;"
      >
        Photography Gallery
      </h1>

      <p
        data-en="A curated collection of moments captured through travel, light, and emotion."
        data-el="Μια επιλεγμένη συλλογή στιγμών μέσα από ταξίδια, φως και συναίσθημα."
        style="color: var(--muted); max-width:680px; margin:auto; line-height:1.7;"
      >
        A curated collection of moments captured through travel, light, and emotion.
      </p>

    </div>
  </section>

  <!-- 🔍 SEARCH BAR -->
  <div class="search-wrap">
    <input
      type="text"
      id="gallerySearch"
      class="search-input"
      placeholder="Search photos..."
      data-en-placeholder="Search photos..."
      data-el-placeholder="Αναζήτηση φωτογραφιών..."
    >
  </div>

  <!-- FILTERS -->
  <section class="container fade-in" style="padding-top:0;">
    <div class="filters">
      <button onclick="filterImages('all', event)" class="active">All</button>
      <button onclick="filterImages('nature', event)">Nature</button>
      <button onclick="filterImages('city', event)">City</button>
      <button onclick="filterImages('landscape', event)">Landscape</button>
      <button onclick="filterImages('portrait', event)">Portrait</button>
      <button onclick="filterImages('street', event)">Street</button>
      <button onclick="filterImages('food', event)">Food</button>
      <button onclick="filterImages('architecture', event)">Architecture</button>
      <button onclick="filterImages('fashion', event)">Fashion</button>
      <button onclick="filterImages('macro', event)">Macro</button>
      <button onclick="filterImages('pet', event)">Pet</button>
      <button onclick="filterImages('realestate', event)">Real Estate</button>
      <button onclick="filterImages('others', event)">Others</button>
    </div>
  </section>

  <!-- GALLERY GRID -->
  <section class="container fade-in">
    <div class="grid" id="galleryGrid">

      {% for shot in site.data.gallery %}
        <div class="gallery-link gallery-item">
          <img 
            src="{{ shot.image }}" 
            class="fade-in {{ shot.category }}" 
            alt="{{ shot.alt }}"
            data-title="{{ shot.alt | downcase }}"
          >

          <!-- caption -->
          <div class="gallery-caption">
            {{ shot.alt }}
          </div>
        </div>
      {% endfor %}

    </div>
  </section>

  <!-- FOOTER TEXT -->
  <section class="container fade-in" style="text-align:center;">
    <p
      data-en="Every image tells a story — captured, not created."
      data-el="Κάθε εικόνα λέει μια ιστορία — αποτυπωμένη, όχι δημιουργημένη."
      style="
        color: var(--muted);
        margin-top:50px;
        font-size:0.95rem;
        letter-spacing:0.02em;
      "
    >
      Every image tells a story — captured, not created.
    </p>
  </section>

</div>

<!-- 🔍 SEARCH SCRIPT -->
<script>
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("gallerySearch");
  const items = document.querySelectorAll(".gallery-item");

  if (!input) return;

  input.addEventListener("input", function () {
    const value = this.value.toLowerCase();

    items.forEach(item => {
      const img = item.querySelector("img");
      const title = img.getAttribute("data-title") || "";

      if (title.includes(value)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  // language placeholder switch
  function updatePlaceholder() {
    const lang = document.documentElement.lang || "en";
    input.placeholder = input.getAttribute(`data-${lang}-placeholder`);
  }

  updatePlaceholder();

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", updatePlaceholder);
  });
});
</script>
