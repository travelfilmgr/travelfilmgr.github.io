---
layout: default
title: Home
---

<!-- HERO -->
<section class="hero fade-in">
  <div class="overlay">
    <span
      data-en="TravelFilm GR"
      data-el="TravelFilm GR"
      style="
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
      "
    >
      TravelFilm GR
    </span>

    <h1
      data-en="Travel • Photography • Roadtrips • Moto Journeys • Fishing • Outdoor Activities"
      data-el="Ταξίδια • Φωτογραφία • Roadtrips • Ταξίδια με Μοτοσικλέτα • Ψάρεμα • Outdoor Δραστηριότητες"
      style="
        font-size: clamp(1.6rem, 3vw, 2.5rem);
        line-height: 1.2;
        max-width: 900px;
        margin: 0 auto;
        white-space: normal;
      "
    >
      Travel • Photography • Roadtrips • Moto Journeys • Fishing • Outdoor Activities
    </h1>

    <p
      data-en="Documenting roadtrips, moto life, fishing, and outdoor adventures through a cinematic lens."
      data-el="Καταγράφοντας roadtrips, ζωή με τη μηχανή, ψάρεμα και outdoor περιπέτειες μέσα από έναν κινηματογραφικό φακό."
      style="margin-top:14px;"
    >
      Documenting roadtrips, moto life, fishing, and outdoor adventures through a cinematic lens.
    </p>

    <p
      data-en="live in freedom"
      data-el="ζήσε ελεύθερα"
      style="
        margin-top:10px;
        color:var(--primary);
        font-size:0.96rem;
        letter-spacing:0.12em;
        text-transform:uppercase;
        font-weight:600;
      "
    >
      live in freedom
    </p>

    <a href="/gallery/" class="btn">
      <span data-en="View Gallery" data-el="Δες το Gallery">View Gallery</span>
    </a>
  </div>
</section>

<!-- INTRO -->
<section class="container fade-in">
  <div style="max-width:900px;">
    <h2 data-en="Welcome" data-el="Καλώς Ήρθες" style="margin-bottom:14px;">Welcome</h2>

    <p
      data-en="A visual journey through landscapes, roadtrips, motorcycle adventures, fishing, and fleeting moments captured along the way. For me, life outdoors is more than an image — it is atmosphere, emotion, light, and the story every adventure leaves behind."
      data-el="Ένα οπτικό ταξίδι μέσα από τοπία, roadtrips, περιπέτειες με τη μοτοσικλέτα, ψάρεμα και φευγαλέες στιγμές που αποτυπώνονται στη διαδρομή. Για μένα, η ζωή στη φύση είναι κάτι παραπάνω από μια εικόνα — είναι ατμόσφαιρα, συναίσθημα, φως και η ιστορία που αφήνει πίσω της η κάθε περιπέτεια."
      style="color: var(--muted); max-width: 800px; line-height:1.8;"
    >
      A visual journey through landscapes, roadtrips, motorcycle adventures, fishing, and fleeting moments captured along the way. 
      For me, life outdoors is more than an image — it is atmosphere, emotion, light, and the story every adventure leaves behind.
    </p>
  </div>
</section>

<!-- LATEST ROADTRIPS -->
<section class="container fade-in">
  {% assign my_roadtrips = site.pages | where_exp: "item", "item.path contains 'roadtrips/'" | sort: "date" | reverse %}

  <div style="
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    gap:20px;
    flex-wrap:wrap;
    margin-bottom:18px;
  ">
    <div>
      <h2 data-en="Latest Roadtrips" data-el="Τελευταία Roadtrips" style="margin-bottom:10px;">Latest Roadtrips</h2>
      <p
        data-en="Recent visual stories, routes, and notes from the road."
        data-el="Πρόσφατες οπτικές ιστορίες, διαδρομές και σημειώσεις από τον δρόμο."
        style="color:var(--muted); max-width:680px; line-height:1.7;"
      >
        Recent visual stories, routes, and notes from the road.
      </p>
    </div>

    <a href="/roadtrips/" style="
      color:var(--primary);
      text-decoration:none;
      font-weight:600;
    ">
      <span data-en="View all roadtrips →" data-el="Δες όλα τα roadtrips →">View all roadtrips →</span>
    </a>
  </div>

  <div class="cards">
    {% if my_roadtrips.size > 0 %}
      {% for trip in my_roadtrips limit:3 %}
        <div class="card">
          <a href="{{ trip.url | relative_url }}" style="text-decoration:none; color:inherit; display:block;">
            {% if trip.image %}
              <img src="{{ trip.image }}" alt="{{ trip.title }}" loading="lazy" decoding="async" width="600" height="400">
            {% endif %}

            <div style="padding:18px;">
              {% if trip.category %}
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
                  {{ trip.category }}
                </span>
              {% endif %}

              <h3 style="padding:0; margin-bottom:10px;">{{ trip.title }}</h3>

              {% if trip.excerpt %}
                <p style="color:var(--muted); line-height:1.7;">
                  {{ trip.excerpt | strip_html | truncate: 110 }}
                </p>
              {% endif %}
            </div>
          </a>
        </div>
      {% endfor %}
    {% else %}
      <p data-en="No roadtrips yet." data-el="Δεν υπάρχουν roadtrips ακόμα." style="color: var(--muted);">No roadtrips yet.</p>
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
      <h2 data-en="Latest Shots" data-el="Τελευταίες Λήψεις" style="margin-bottom:10px;">Latest Shots</h2>
      <p
        data-en="A small selection of recent frames, moments, and visual highlights from my gallery."
        data-el="Μια μικρή επιλογή από πρόσφατα καρέ, στιγμές και οπτικά highlights από το gallery μου."
        style="color:var(--muted); max-width:680px; line-height:1.7;"
      >
        A small selection of recent frames, moments, and visual highlights from my gallery.
      </p>
    </div>

    <a href="/gallery/" style="
      color:var(--primary);
      text-decoration:none;
      font-weight:600;
    ">
      <span data-en="Explore gallery →" data-el="Εξερεύνησε το gallery →">Explore gallery →</span>
    </a>
  </div>

  <div class="grid">
    {% if site.data.gallery.size > 0 %}
      {% for shot in site.data.gallery reversed limit:6 %}
        <div
          class="gallery-link gallery-item"
          data-category="{{ shot.category | downcase }}"
          data-title="{{ shot.alt }}"
          data-tags="{{ shot.category }} {{ shot.alt }}"
          aria-label="{{ shot.alt }}"
        >
          <img
            src="{{ shot.image }}"
            alt="{{ shot.alt }}"
            class="{{ shot.category | downcase }}"
            data-title="{{ shot.alt | escape }}"
            data-description="{{ shot.description | default: '' | escape }}"
            data-location="{{ shot.location | default: '' | escape }}"
            data-date="{{ shot.date | default: '' }}"
            data-camera="{{ shot.camera | default: '' | escape }}"
            loading="lazy"
            decoding="async"
            width="600"
            height="450"
          >
          <div class="gallery-caption">{{ shot.alt }}</div>
        </div>
      {% endfor %}
    {% else %}
      <p data-en="No shots yet." data-el="Δεν υπάρχουν λήψεις ακόμα." style="color: var(--muted);">No shots yet.</p>
    {% endif %}
  </div>
</section>

<!-- CTA -->
<section class="container fade-in">
  <div class="card" style="text-align:center; padding:48px 30px;">
    <span
      data-en="Let’s Connect"
      data-el="Ας Συνδεθούμε"
      style="
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
      "
    >
      Let’s Connect
    </span>

    <h2 data-en="Open to New Opportunities" data-el="Ανοιχτός σε Νέες Ευκαιρίες" style="margin-bottom:12px;">
      Open to New Opportunities
    </h2>

    <p
      data-en="Roadtrips, motorcycle adventures, fishing, photography, and creative collaborations — this space reflects the lifestyle, passion, and atmosphere behind every adventure."
      data-el="Roadtrips, περιπέτειες με τη μοτοσικλέτα, ψάρεμα, φωτογραφία και δημιουργικές συνεργασίες — αυτός ο χώρος αντικατοπτρίζει τον τρόπο ζωής, το πάθος και την ατμόσφαιρα πίσω από κάθε περιπέτεια."
      style="color: var(--muted); max-width:700px; margin:0 auto; line-height:1.8;"
    >
      Roadtrips, motorcycle adventures, fishing, photography, and creative collaborations — this space reflects the lifestyle, passion, and atmosphere behind every adventure.
    </p>

    <a href="/about/" class="btn">
      <span data-en="Contact Me" data-el="Επικοινώνησε Μαζί Μου">Contact Me</span>
    </a>
  </div>
</section>
