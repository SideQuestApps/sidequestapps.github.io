/**
 * SideQuest Apps — app landing page renderer.
 * Each /apps/<slug>.html sets <body data-app="<slug>">; everything shown
 * comes from the matching entry in projects.js.
 */
document.addEventListener("DOMContentLoaded", () => {
  const site = new SiteRenderer();
  const slug = document.body.dataset.app;
  const app = site.apps.find((a) => a.slug === slug);
  const root = document.getElementById("app-root");
  if (!app || !root) return;

  // Shown until real screenshots are added to the app's entry in projects.js.
  const placeholderShots = () => `<div class="shots">${[0, 1, 2]
    .map((i) => `<div class="shot shot-placeholder${i === 1 ? " shot-tall" : ""}"><span>Screenshot<br />coming soon</span></div>`)
    .join("")}</div>`;

  const features = (app.features || [])
    .map((f) => `<li class="feature glass"><h3>${f.title}</h3><p>${f.text}</p></li>`)
    .join("");

  const stats = app.stats
    ? `<section class="wrap app-section">
        <div class="stats stats-2">
          <div class="stat"><div class="stat-value">${app.stats.downloads}</div><div class="stat-label">Total downloads</div></div>
          <div class="stat"><div class="stat-value">${app.stats.rating}</div><div class="stat-label">Avg. rating</div></div>
        </div>
      </section>`
    : "";

  const reviews = (app.reviews || [])
    .map(
      (r) => `<li class="review glass">
        <div class="stars" role="img" aria-label="5 out of 5 stars">★★★★★</div>
        <p>“${r.text}”</p>
        <div class="reviewer"><strong>${r.name}</strong><span>${r.place}</span></div>
      </li>`
    )
    .join("");

  root.innerHTML = `
    <section class="wrap app-hero">
      <div class="app-hero-grid">
        <div class="app-hero-copy">
          <img src="${app.icon}" alt="${app.name} app icon" class="app-hero-icon" />
          <h1>${app.name}</h1>
          <p class="lede"><strong>${app.tagline || ""}</strong> ${app.description}</p>
          <div class="app-hero-actions">${site.badge(app, 52)}</div>
        </div>
        ${site.shots(app) || placeholderShots()}
      </div>
    </section>

    ${features ? `
    <section class="wrap app-section">
      <div class="rule"><span class="kicker">Features</span></div>
      <h2 class="section-title">Why you'll love ${app.name}</h2>
      <ul class="feature-grid">${features}</ul>
    </section>` : ""}

    ${stats}

    ${reviews ? `
    <section class="wrap app-section">
      <div class="rule"><span class="kicker">Testimonials</span></div>
      <div class="carousel-head">
        <h2 class="section-title">Loved by players around the world</h2>
        <div class="carousel-nav">
          <button type="button" class="carousel-btn" data-dir="-1" aria-label="Previous reviews">‹</button>
          <button type="button" class="carousel-btn" data-dir="1" aria-label="Next reviews">›</button>
        </div>
      </div>
      <ul class="review-track" id="review-track" tabindex="0" aria-label="Player reviews">${reviews}</ul>
    </section>` : ""}

    <section class="wrap app-section">
      <div class="app-cta glass glass-raised">
        <h2>Ready to play?</h2>
        <p>Download ${app.name} free on the App Store.</p>
        <div class="app-hero-actions">${site.badge(app, 52)}</div>
      </div>
    </section>`;

  const track = document.getElementById("review-track");
  if (track) {
    // Duplicate the cards so the row can wrap seamlessly.
    const originals = [...track.children];
    originals.forEach((el) => {
      const clone = el.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });

    const setWidth = () => track.children[originals.length].offsetLeft - track.children[0].offsetLeft;
    const step = () => track.children[1].offsetLeft - track.children[0].offsetLeft;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const SPEED = 0.6; // px per frame (~36px/s)

    let pos = 0;
    let holdUntil = 0;
    let hovering = false;
    let touching = false;

    const wrap = () => {
      const w = setWidth();
      if (track.scrollLeft >= w) track.scrollLeft -= w;
      else if (track.scrollLeft <= 0) track.scrollLeft += w;
      pos = track.scrollLeft;
    };

    const hold = (ms) => { holdUntil = performance.now() + ms; };

    const tick = (now) => {
      if (!reduced && !hovering && !touching && now > holdUntil && !document.hidden) {
        pos += SPEED;
        track.scrollLeft = pos;
        pos = track.scrollLeft;
        if (pos >= setWidth()) wrap();
      }
      requestAnimationFrame(tick);
    };

    track.scrollLeft = setWidth();
    pos = track.scrollLeft;

    track.addEventListener("scroll", () => { if (performance.now() < holdUntil || hovering || touching) wrap(); }, { passive: true });
    track.addEventListener("mouseenter", () => (hovering = true));
    track.addEventListener("mouseleave", () => { hovering = false; pos = track.scrollLeft; });
    track.addEventListener("focusin", () => (hovering = true));
    track.addEventListener("focusout", () => { hovering = false; pos = track.scrollLeft; });
    track.addEventListener("touchstart", () => (touching = true), { passive: true });
    track.addEventListener("touchend", () => { touching = false; hold(1500); pos = track.scrollLeft; }, { passive: true });
    track.addEventListener("wheel", () => hold(1500), { passive: true });

    root.querySelectorAll(".carousel-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        hold(2500);
        track.scrollBy({ left: Number(btn.dataset.dir) * step(), behavior: "smooth" });
      })
    );

    window.addEventListener("resize", wrap);
    requestAnimationFrame(tick);
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
