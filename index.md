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
      data-en="Travel • Photography • Stories"
      data-el="Ταξίδια • Φωτογραφία • Ιστορίες"
      style="
        font-size:clamp(2.15rem, 4vw, 3.6rem);
        line-height:1.08;
        white-space:normal;
      "
    >
      Travel • Photography • Stories
    </h1>

    <p
      data-en="Explore places, moods, and moments through a cinematic visual journey."
      data-el="Εξερεύνησε μέρη, ατμόσφαιρες και στιγμές μέσα από ένα κινηματογραφικό οπτικό ταξίδι."
      style="margin-top:14px;"
    >
      Explore places, moods, and moments through a cinematic visual journey.
    </p>

    <p
      data-en="live in freadome"
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
      live in freadome
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
      data-en="A visual journey through landscapes, people, cities, and fleeting moments captured along the way. For me, photography is more than an image — it is atmosphere, emotion, light, and the story a place leaves behind."
      data-el="Ένα οπτικό ταξίδι μέσα από τοπία, ανθρώπους, πόλεις και φευγαλέες στιγμές που αποτυπώνονται στη διαδρομή. Για μένα, η φωτογραφία είναι κάτι περισσότερο από μια εικόνα — είναι ατμόσφαιρα, συναίσθημα, φως και η ιστορία που αφήνει πίσω του ένας τόπος."
      style="color: var(--muted); max-width: 800px; line-height:1.8;"
    >
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
      <h2 data-en="Latest Posts" data-el="Τελευταία Άρθρα" style="margin-bottom:10px;">Latest Posts</h2>
      <p
        data-en="Recent travel notes, visual stories, and photography-inspired moments from the road."
        data-el="Πρόσφατες ταξιδιωτικές σημειώσεις, οπτικές ιστορίες και φωτογραφικές στιγμές από τη διαδρομή."
        style="color:var(--muted); max-width:680px; line-height:1.7;"
      >
        Recent travel notes, visual stories, and photography-inspired moments from the road.
      </p>
    </div>

    <a href="/blog/" style="
      color:var(--primary);
      text-decoration:none;
      font-weight:600;
    ">
      <span data-en="View all posts →" data-el="Δες όλα τα άρθρα →">View all posts →</span>
    </a>
  </div>

  <div class="cards">
    {% if site.posts.size > 0 %}
      {% for post in site.posts limit:3 %}
        <div class="card">
          <a href="{{ post.url | relative_url }}" style="text-decoration:none; color:inherit; display:block;">
            {% if post.image %}
              <img src="{{ post.image }}" alt="{{ post.title }}" loading="lazy">
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
      <p data-en="No posts yet." data-el="Δεν υπάρχουν άρθρα ακόμα." style="color: var(--muted);">No posts yet.</p>
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
          class="gallery-link gallery-item fade-in"
          data-category="{{ shot.category | downcase }}"
          data-title="{{ shot.alt }}"
          data-tags="{{ shot.category }} {{ shot.alt }}"
          aria-label="{{ shot.alt }}"
        >
          <img
            src="{{ shot.image }}"
            alt="{{ shot.alt }}"
            class="fade-in {{ shot.category | downcase }}"
            data-title="{{ shot.alt | escape }}"
            data-description="{{ shot.description | default: '' | escape }}"
            data-location="{{ shot.location | default: '' | escape }}"
            data-date="{{ shot.date | default: '' }}"
            data-camera="{{ shot.camera | default: '' | escape }}"
            loading="lazy"
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
      data-en="Travel, photography, visual storytelling, and creative collaborations — this space reflects the work, passion, and atmosphere behind every frame."
      data-el="Ταξίδια, φωτογραφία, οπτική αφήγηση και δημιουργικές συνεργασίες — αυτός ο χώρος αντικατοπτρίζει τη δουλειά, το πάθος και την ατμόσφαιρα πίσω από κάθε καρέ."
      style="color: var(--muted); max-width:700px; margin:0 auto; line-height:1.8;"
    >
      Travel, photography, visual storytelling, and creative collaborations — this space reflects the work, passion, and atmosphere behind every frame.
    </p>

    <a href="/about/" class="btn">
      <span data-en="Contact Me" data-el="Επικοινώνησε Μαζί Μου">Contact Me</span>
    </a>
  </div>
</section>
