/**
 * SideQuest Apps — site renderer.
 *
 * The `apps` array below is the single source of truth: the hero shelf,
 * the spotlight and the filterable grid are all built from it.
 */
class SiteRenderer {
  apps = [
    {
      name: "Pawdoku",
      description:
        "Meet Pawdoku, a cozy Sudoku puzzle game made for puzzle lovers and dog lovers. Solve satisfying number puzzles, collect adorable dogs, build your daily streak, and unlock rewards as you play.",
      link: "https://apps.apple.com/us/app/id6810373279",
      icon: "/assets/icons/pawdoku.jpg",
      category: "Games",
      featured: true,
      screenshots: [
        {
          src: "/assets/screenshots/pawdoku-1.jpg",
          alt: "Pawdoku title screen — a puppy leaning over a sudoku board of dog faces, captioned “Sudoku, but adorable”",
        },
        {
          src: "/assets/screenshots/pawdoku-2.jpg",
          alt: "Four ways to play: Classic Sudoku, Logic Puzzle, Irregular Sudoku and Ice Breaker",
        },
        {
          src: "/assets/screenshots/pawdoku-3.jpg",
          alt: "The dog collection screen — 18 pups to unlock, with Corgi, Husky, Shiba Inu and others already collected",
        },
      ],
    },
    {
      name: "Workout Planner",
      description:
        "Workout Planner: Gym Routine makes it easy to plan your workouts, follow a weekly routine, and stay consistent without feeling overwhelmed.",
      link: "https://apps.apple.com/us/app/id6801083419",
      icon: "/assets/icons/workoutplanner.jpg",
      category: "Health",
    },
    {
      name: "SportFit: Cricket Training",
      description:
        "Train smarter with expert drills for Cricket, Football, Badminton & Volleyball. Build skills, track progress, prepare for matches and perform like a pro.",
      link: "https://apps.apple.com/us/app/id6794868577",
      icon: "/assets/icons/sportsfit.jpg",
      category: "Health",
    },
    {
      name: "ADHD Focus Timer: Pomodoro",
      description:
        "A simple ADHD-friendly focus timer for work, study, reading, and everyday tasks. No complicated productivity system required.",
      link: "https://apps.apple.com/us/app/id6756427873",
      icon: "/assets/icons/focusportal.jpg",
      category: "Focus",
    },
    {
      name: "TapOut Reflex Games : DashTap",
      description:
        "DashTap Mania is a reflex game designed around one simple idea: speed decides everything.",
      link: "https://apps.apple.com/us/app/id6753695725",
      icon: "/assets/icons/dashtap.jpg",
      category: "Games",
    },
    {
      name: "BrainSprint: Memory Match, Quick Match, Pattern Puzzle",
      description:
        "Challenge yourself with quick puzzles, mind skills games, and logic challenges designed to boost focus, speed, and problem-solving skills.",
      link: "https://apps.apple.com/us/app/id6753343626",
      icon: "/assets/icons/brainsprint.jpg",
      category: "Games",
    },
  ];

  /** Longer names for categories whose bare name reads too narrow. */
  filterLabels = {
    Health: "Health & training",
  };

  activeFilter = "all";

  /* ---------- derived from the data ---------- */

  /** Unique categories, in the order the apps are listed. */
  get categories() {
    return [...new Set(this.apps.map((app) => app.category))];
  }

  /** "All apps" plus one entry per category actually present. */
  get filters() {
    return [
      { id: "all", label: "All apps" },
      ...this.categories.map((c) => ({ id: c, label: this.filterLabels[c] || c })),
    ];
  }

  countFor(id) {
    return id === "all"
      ? this.apps.length
      : this.apps.filter((app) => app.category === id).length;
  }

  /* ---------- helpers ---------- */

  word(n) {
    const words = [
      "zero", "one", "two", "three", "four", "five", "six",
      "seven", "eight", "nine", "ten", "eleven", "twelve",
    ];
    const w = words[n] || String(n);
    return w.charAt(0).toUpperCase() + w.slice(1);
  }

  /**
   * Counts that appear as prose or figures in the static markup. Keeping them
   * here means adding a seventh app updates the heading and the stat strip
   * too, instead of leaving "Six apps" behind.
   */
  renderCounts() {
    const n = this.apps.length;
    const cats = this.categories;

    const set = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    set("apps-title", `${this.word(n)} app${n === 1 ? "" : "s"} on the App Store`);
    set("stat-app-count", String(n).padStart(2, "0"));
    set("stat-category-count", String(cats.length).padStart(2, "0"));
    set("stat-category-label", `Categories: ${cats.map((c) => c.toLowerCase()).join(", ")}`);
  }

  badge(app, height) {
    return `
      <a
        href="${app.link}"
        target="_blank"
        rel="noopener"
        class="appstore-link"
        aria-label="Download ${app.name} on the App Store"
      >
        <img
          src="/assets/appstore-badge.svg"
          alt="Download on the App Store"
          style="height: ${height}px"
        />
      </a>`;
  }

  /* ---------- hero shelf ---------- */

  renderShelf() {
    const root = document.getElementById("shelf-root");
    if (!root) return;

    const rows = this.apps
      .slice(0, 3)
      .map(
        (app) => `
        <div class="shelf-row">
          <img src="${app.icon}" alt="" loading="lazy" />
          <div class="shelf-text">
            <div class="shelf-name">${app.name}</div>
            <div class="shelf-tagline">${app.category}</div>
          </div>
        </div>`
      )
      .join("");

    root.innerHTML = `
      <div class="shelf-head">
        <h2>On the App Store</h2>
        <span class="shelf-count">${this.apps.length} live</span>
      </div>
      ${rows}
      <a href="#apps" class="shelf-more">See all ${this.apps.length} apps</a>
    `;
  }

  /**
   * Spotlight screenshots. The middle one is wider, so with the row
   * bottom-aligned it stands taller without any fixed heights.
   */
  shots(app) {
    if (!app.screenshots || !app.screenshots.length) return "";

    const frames = app.screenshots
      .map(
        (shot, i) => `
        <div class="shot${i === 1 ? " shot-tall" : ""}">
          <img
            src="${shot.src}"
            alt="${shot.alt}"
            width="560"
            height="1212"
            loading="lazy"
          />
        </div>`
      )
      .join("");

    return `<div class="shots">${frames}</div>`;
  }

  /* ---------- spotlight ---------- */

  renderSpotlight() {
    const root = document.getElementById("spotlight-root");
    if (!root) return;

    const app = this.apps.find((a) => a.featured) || this.apps[0];

    root.innerHTML = `
      <div class="rule"><span class="kicker">Latest release</span></div>

      <div class="spotlight glass">
        <div class="spotlight-copy">
          <img
            src="${app.icon}"
            alt="${app.name} app icon"
            class="spotlight-icon"
            loading="lazy"
          />
          <h2>${app.name}</h2>
          <p class="body">${app.description}</p>

          <div class="spotlight-actions">
            ${this.badge(app, 46)}
          </div>
        </div>

        ${this.shots(app)}
      </div>
    `;
  }

  /* ---------- filterable grid ---------- */

  card(app) {
    return `
      <li class="project-card glass">
        <div class="card-top">
          <img
            src="${app.icon}"
            alt="${app.name} app icon"
            class="app-icon"
            loading="lazy"
          />
          <span class="category">${app.category}</span>
        </div>

        <h3 class="card-title">${app.name}</h3>
        <p class="card-desc">${app.description}</p>

        <div class="card-spacer"></div>

        <div class="card-foot">
          ${this.badge(app, 40)}
        </div>
      </li>
    `;
  }

  renderGrid() {
    const grid = document.getElementById("app-grid");
    if (!grid) return;

    const visible = this.apps.filter(
      (app) => this.activeFilter === "all" || app.category === this.activeFilter
    );

    grid.innerHTML = visible.map((app) => this.card(app)).join("");
  }

  renderApps() {
    const root = document.getElementById("projects-root");
    if (!root) return;

    const chips = this.filters
      .map(
        (f) => `
        <button
          type="button"
          class="filter"
          data-filter="${f.id}"
          aria-pressed="${f.id === this.activeFilter}"
        >
          ${f.label}
          <span class="filter-count">${this.countFor(f.id)}</span>
        </button>`
      )
      .join("");

    root.innerHTML = `
      <div class="filters" role="group" aria-label="Filter apps by category">
        ${chips}
      </div>
      <ul class="project-grid" id="app-grid"></ul>
    `;

    root.querySelectorAll(".filter").forEach((button) => {
      button.addEventListener("click", () => {
        this.activeFilter = button.dataset.filter;

        root.querySelectorAll(".filter").forEach((b) => {
          b.setAttribute("aria-pressed", String(b.dataset.filter === this.activeFilter));
        });

        this.renderGrid();
      });
    });

    this.renderGrid();
  }

  /* ---------- entry point ---------- */

  render() {
    this.renderCounts();
    this.renderShelf();
    this.renderSpotlight();
    this.renderApps();

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }
}
