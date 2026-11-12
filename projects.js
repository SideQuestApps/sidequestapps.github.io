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
      slug: "pawdoku",
      stats: { downloads: "1K", rating: "5.0" },
      reviews: [
        { name: "Emily R.", place: "Austin, USA", text: "I downloaded this for my daughter and ended up playing it myself every night. The dogs are SO cute!" },
        { name: "Oliver T.", place: "London, UK", text: "Finally a Sudoku app that feels relaxing instead of stressful. The Corgi is my favourite." },
        { name: "Aarav S.", place: "Mumbai, India", text: "Irregular Sudoku mode is a great challenge. Clean design and no annoying clutter." },
        { name: "Sofía M.", place: "Madrid, Spain", text: "Me encanta coleccionar los perritos. Mi racha diaria ya va por más de un mes." },
        { name: "Yuki H.", place: "Tokyo, Japan", text: "The Shiba Inu made my day. Gentle, charming and perfect for my commute." },
        { name: "Lukas B.", place: "Berlin, Germany", text: "Four modes keep it fresh. Ice Breaker is surprisingly addictive." },
        { name: "Chloé D.", place: "Lyon, France", text: "Un jeu apaisant et très mignon. Je recommande à tous les amoureux de chiens !" },
        { name: "Mateus P.", place: "São Paulo, Brazil", text: "Easy to start, hard to put down. Unlocking new pups keeps me coming back." },
        { name: "Hannah W.", place: "Sydney, Australia", text: "Best puzzle game I've installed this year. Daily streak rewards are a nice touch." },
        { name: "Thandi N.", place: "Cape Town, South Africa", text: "Beautiful art and smooth gameplay. My whole family is now competing for the streak." },
      ],
      tagline: "Sudoku, but adorable.",
      features: [
        { title: "Four ways to play", text: "Classic Sudoku, Logic Puzzle, Irregular Sudoku and Ice Breaker — there is always a fresh way to solve." },
        { title: "Collect 18 dogs", text: "Every puzzle you finish brings you closer to unlocking new pups, from Corgi and Husky to Shiba Inu." },
        { title: "Daily streaks", text: "Come back each day to keep your streak alive and earn rewards for staying consistent." },
        { title: "Cozy by design", text: "Soft visuals and a calm pace make it the easy kind of brain game to unwind with." },
      ],
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
      name: "Dayspan",
      description:
        "Dayspan answers every date question in a tap. Type it the way you would say it: \"days until Dec 25\", \"90 days from today\" or \"business days between two dates\".",
      link: "https://apps.apple.com/us/app/date-calculator-dayspan/id6833092347",
      icon: "/assets/icons/dayspan.jpg",
      category: "Utilities",
      slug: "dayspan",
      screenshots: [
        { src: "/assets/screenshots/dayspan-1.png", alt: "Dayspan calculator showing 44 days until Dec 25, typed in plain language" },
        { src: "/assets/screenshots/dayspan-2.png", alt: "Dayspan date detail for a birthday — age in years, months, days, weeks, hours and seconds" },
        { src: "/assets/screenshots/dayspan-3.png", alt: "Dayspan home screen widgets counting down to birthdays, anniversaries and trips" },
      ],
      tagline: "Any date. Answered in a tap.",
      features: [
        { title: "Type it your way", text: "Write \"days until Dec 25\" or \"90 days from today\" and get the answer instantly." },
        { title: "Business days too", text: "Count working days between two dates, with the option to include the end date." },
        { title: "Every unit on one screen", text: "See any span in days, weeks, months, hours and even seconds." },
        { title: "Always in view", text: "Home screen and lock screen widgets keep birthdays, anniversaries and trips counting down." },
      ],
    },
    {
      name: "ID Photo Booth",
      description:
        "Make a passport, visa or ID photo for any country in about a minute, right on your iPhone. Exact sizes, a plain background, and your photos stay on your phone.",
      link: "https://apps.apple.com/us/app/id6829430828",
      icon: "/assets/icons/photo_booth_logo.png",
      category: "Productivity",
      slug: "id-photo-booth",
      screenshots: [
        { src: "/assets/screenshots/id-photo-booth-1.jpg", alt: "ID Photo Booth app screenshot 1" },
        { src: "/assets/screenshots/id-photo-booth-2.jpg", alt: "ID Photo Booth app screenshot 2" },
        { src: "/assets/screenshots/id-photo-booth-3.jpg", alt: "ID Photo Booth app screenshot 3" },
      ],
      tagline: "Passport photos, done in a minute.",
      features: [
        { title: "Any country, exact size", text: "Pick the country and document and get the right dimensions automatically." },
        { title: "Plain background", text: "Get a clean, even background without a trip to the photo studio." },
        { title: "Private by design", text: "Your photos stay on your phone — nothing is uploaded." },
        { title: "Fast and simple", text: "From selfie to print-ready photo in about a minute." },
      ],
      // PLACEHOLDER stats and reviews — replace with real figures before launch.
      stats: { downloads: "1K", rating: "5.0" },
      reviews: [
        { name: "Oliver T.", place: "London, UK", text: "Renewed my passport without leaving the house. The size was spot on." },
        { name: "Aarav S.", place: "Mumbai, India", text: "Saved me a trip to the photo shop and the fees. Brilliant idea." },
        { name: "Sofía M.", place: "Madrid, Spain", text: "Needed a visa photo in a hurry and this nailed it in minutes." },
        { name: "Yuki H.", place: "Tokyo, Japan", text: "Me gusta que las fotos se quedan en mi teléfono. Muy fácil de usar." },
        { name: "Lukas B.", place: "Berlin, Germany", text: "Simple, quick and the background came out perfectly white." },
        { name: "Chloé D.", place: "Lyon, France", text: "The country presets are a lifesaver — no more guessing the dimensions." },
        { name: "Mateus P.", place: "São Paulo, Brazil", text: "Très pratique pour mes photos d'identité. Résultat impeccable." },
        { name: "Hannah W.", place: "Sydney, Australia", text: "Fiz a foto do meu visto em casa e foi aceita de primeira." },
        { name: "Thandi N.", place: "Cape Town, South Africa", text: "Used it for the whole family's applications. Worked every time." },
        { name: "Emily R.", place: "Austin, USA", text: "Clean interface and no sign-ups. Exactly what I needed." },
      ],
    },
    {
      name: "Workout Planner",
      description:
        "Workout Planner: Gym Routine makes it easy to plan your workouts, follow a weekly routine, and stay consistent without feeling overwhelmed.",
      link: "https://apps.apple.com/us/app/id6801083419",
      icon: "/assets/icons/workoutplanner.jpg",
      category: "Health",
      slug: "workout-planner",
      screenshots: [
        { src: "/assets/screenshots/workout-planner-1.png", alt: "Workout Planner app screenshot 1" },
        { src: "/assets/screenshots/workout-planner-2.png", alt: "Workout Planner app screenshot 2" },
        { src: "/assets/screenshots/workout-planner-3.png", alt: "Workout Planner app screenshot 3" },
      ],
      tagline: "Plan it. Follow it. Stay consistent.",
      features: [
        { title: "Weekly routines", text: "Lay out your week once and follow the plan day by day." },
        { title: "Gym-ready plans", text: "Build a gym routine that fits your schedule and goals." },
        { title: "Stay consistent", text: "A simple flow that keeps you showing up without feeling overwhelmed." },
        { title: "Clear and uncluttered", text: "Open the app, see today's workout, get moving." },
      ],
      // PLACEHOLDER stats and reviews — replace with real figures before launch.
      stats: { downloads: "1K", rating: "5.0" },
      reviews: [
        { name: "Aarav S.", place: "Mumbai, India", text: "Finally a planner that's simple enough that I actually use it." },
        { name: "Sofía M.", place: "Madrid, Spain", text: "My weekly routine is sorted and I haven't skipped a gym day in a month." },
        { name: "Yuki H.", place: "Tokyo, Japan", text: "Clean, quick and no overwhelming menus. Love it." },
        { name: "Lukas B.", place: "Berlin, Germany", text: "Me ayuda a mantenerme constante. Muy fácil de seguir." },
        { name: "Chloé D.", place: "Lyon, France", text: "Great for planning my split. Looks great too." },
        { name: "Mateus P.", place: "São Paulo, Brazil", text: "I was always winging my workouts. Not anymore." },
        { name: "Hannah W.", place: "Sydney, Australia", text: "Une appli claire qui m'aide à rester régulier à la salle." },
        { name: "Thandi N.", place: "Cape Town, South Africa", text: "Organizar meus treinos ficou muito mais fácil." },
        { name: "Emily R.", place: "Austin, USA", text: "Perfect for a beginner like me. Not intimidating at all." },
        { name: "Oliver T.", place: "London, UK", text: "Simple, focused and it works. Exactly what a workout planner should be." },
      ],
    },
    {
      name: "SportFit: Cricket Training",
      description:
        "Train smarter with expert drills for Cricket, Football, Badminton & Volleyball. Build skills, track progress, prepare for matches and perform like a pro.",
      link: "https://apps.apple.com/us/app/id6794868577",
      icon: "/assets/icons/sportsfit.jpg",
      category: "Health",
      slug: "sportfit",
      screenshots: [
        { src: "/assets/screenshots/sportfit-1.jpg", alt: "SportFit app screenshot 1" },
        { src: "/assets/screenshots/sportfit-2.jpg", alt: "SportFit app screenshot 2" },
        { src: "/assets/screenshots/sportfit-3.jpg", alt: "SportFit app screenshot 3" },
      ],
      tagline: "Train like a pro.",
      features: [
        { title: "Expert drills", text: "Skill drills for Cricket, Football, Badminton and Volleyball." },
        { title: "Track progress", text: "See how far you've come and keep pushing." },
        { title: "Match preparation", text: "Get ready for the big day with focused practice." },
        { title: "Four sports, one app", text: "Switch between sports without switching apps." },
      ],
      // PLACEHOLDER stats and reviews — replace with real figures before launch.
      stats: { downloads: "1K", rating: "5.0" },
      reviews: [
        { name: "Sofía M.", place: "Madrid, Spain", text: "The cricket drills are exactly what my academy practises. Superb." },
        { name: "Yuki H.", place: "Tokyo, Japan", text: "Great for off-season training. Easy to follow." },
        { name: "Lukas B.", place: "Berlin, Germany", text: "My batting improved after a few weeks of the drills." },
        { name: "Chloé D.", place: "Lyon, France", text: "Los ejercicios de fútbol son muy buenos para entrenar en casa." },
        { name: "Mateus P.", place: "São Paulo, Brazil", text: "Used it to prep for the club trials and it really helped." },
        { name: "Hannah W.", place: "Sydney, Australia", text: "Badminton drills are clear and well explained." },
        { name: "Thandi N.", place: "Cape Town, South Africa", text: "Super appli pour s'entraîner avant les matchs de volley." },
        { name: "Emily R.", place: "Austin, USA", text: "Treino de futebol muito bem organizado. Recomendo." },
        { name: "Oliver T.", place: "London, UK", text: "Love that one app covers all four of my sports." },
        { name: "Aarav S.", place: "Mumbai, India", text: "Progress tracking keeps me motivated. Five stars." },
      ],
    },
    {
      name: "ADHD Focus Timer: Pomodoro",
      description:
        "A simple ADHD-friendly focus timer for work, study, reading, and everyday tasks. No complicated productivity system required.",
      link: "https://apps.apple.com/us/app/id6756427873",
      icon: "/assets/icons/focusportal.jpg",
      category: "Focus",
      slug: "adhd-focus-timer",
      screenshots: [
        { src: "/assets/screenshots/adhd-focus-timer-1.jpg", alt: "ADHD Focus Timer app screenshot 1" },
        { src: "/assets/screenshots/adhd-focus-timer-2.jpg", alt: "ADHD Focus Timer app screenshot 2" },
        { src: "/assets/screenshots/adhd-focus-timer-3.jpg", alt: "ADHD Focus Timer app screenshot 3" },
      ],
      tagline: "Focus in short, doable bursts.",
      features: [
        { title: "Pomodoro sessions", text: "Work in focused intervals with built-in breaks." },
        { title: "Made for wandering minds", text: "A calm, low-friction timer that helps you start." },
        { title: "No clutter", text: "One clear screen, so nothing pulls you away from the task." },
        { title: "Build a rhythm", text: "Small wins add up to a steady daily focus habit." },
      ],
      // PLACEHOLDER stats and reviews — replace with real figures before launch.
      stats: { downloads: "1K", rating: "5.0" },
      reviews: [
        { name: "Yuki H.", place: "Tokyo, Japan", text: "Starting is the hardest part for me and this makes it easy." },
        { name: "Lukas B.", place: "Berlin, Germany", text: "Short sprints are the only thing that work for my brain. Love it." },
        { name: "Chloé D.", place: "Lyon, France", text: "Simple and calm. No noise, just focus." },
        { name: "Mateus P.", place: "São Paulo, Brazil", text: "Por fin un temporizador que no me abruma. Me ayuda mucho." },
        { name: "Hannah W.", place: "Sydney, Australia", text: "I get more done in an hour with this than a whole afternoon before." },
        { name: "Thandi N.", place: "Cape Town, South Africa", text: "The break reminders actually keep me from burning out." },
        { name: "Emily R.", place: "Austin, USA", text: "Très utile pour mes révisions. Interface apaisante." },
        { name: "Oliver T.", place: "London, UK", text: "Uso todos os dias para estudar. Faz muita diferença." },
        { name: "Aarav S.", place: "Mumbai, India", text: "Clean design and it does exactly what it says." },
        { name: "Sofía M.", place: "Madrid, Spain", text: "Helped me finish my thesis. Can't recommend it enough." },
      ],
    },
    {
      name: "TapOut Reflex Games : DashTap",
      description:
        "DashTap Mania is a reflex game designed around one simple idea: speed decides everything.",
      link: "https://apps.apple.com/us/app/id6753695725",
      icon: "/assets/icons/dashtap.jpg",
      category: "Games",
      slug: "dashtap",
      screenshots: [
        { src: "/assets/screenshots/dashtap-1.jpg", alt: "DashTap app screenshot 1" },
        { src: "/assets/screenshots/dashtap-2.jpg", alt: "DashTap app screenshot 2" },
        { src: "/assets/screenshots/dashtap-3.jpg", alt: "DashTap app screenshot 3" },
      ],
      tagline: "Speed decides everything.",
      features: [
        { title: "Pure reflex", text: "Simple rules, quick rounds, and nothing but your reaction speed." },
        { title: "One more try", text: "Short games that make it hard to put the phone down." },
        { title: "Beat your best", text: "Chase faster times and sharper reflexes." },
        { title: "Pick up and play", text: "No tutorials needed — just tap." },
      ],
      // PLACEHOLDER stats and reviews — replace with real figures before launch.
      stats: { downloads: "1K", rating: "5.0" },
      reviews: [
        { name: "Lukas B.", place: "Berlin, Germany", text: "Super addictive. I keep trying to beat my best time." },
        { name: "Chloé D.", place: "Lyon, France", text: "Perfect for a quick break. Fast and fun." },
        { name: "Mateus P.", place: "São Paulo, Brazil", text: "Challenged my friends and now we're all hooked." },
        { name: "Hannah W.", place: "Sydney, Australia", text: "Muy adictivo, ideal para jugar un rato en el bus." },
        { name: "Thandi N.", place: "Cape Town, South Africa", text: "Smooth, responsive and genuinely tests your reflexes." },
        { name: "Emily R.", place: "Austin, USA", text: "Easy to learn and really hard to master." },
        { name: "Oliver T.", place: "London, UK", text: "Un jeu de réflexes très fun. Je n'arrête plus d'y jouer." },
        { name: "Aarav S.", place: "Mumbai, India", text: "Jogo rápido e viciante. Adorei!" },
        { name: "Sofía M.", place: "Madrid, Spain", text: "Great for killing five minutes. Simple but so good." },
        { name: "Yuki H.", place: "Tokyo, Japan", text: "The pace is perfect. Just one more round, every time." },
      ],
    },
    {
      name: "BrainSprint: Memory Match, Quick Match, Pattern Puzzle",
      description:
        "Challenge yourself with quick puzzles, mind skills games, and logic challenges designed to boost focus, speed, and problem-solving skills.",
      link: "https://apps.apple.com/us/app/id6753343626",
      icon: "/assets/icons/brainsprint.jpg",
      category: "Games",
      slug: "brainsprint",
      screenshots: [
        { src: "/assets/screenshots/brainsprint-1.jpg", alt: "BrainSprint app screenshot 1" },
        { src: "/assets/screenshots/brainsprint-2.jpg", alt: "BrainSprint app screenshot 2" },
        { src: "/assets/screenshots/brainsprint-3.jpg", alt: "BrainSprint app screenshot 3" },
      ],
      tagline: "Quick puzzles for a sharper mind.",
      features: [
        { title: "Memory Match", text: "Train your recall with satisfying matching challenges." },
        { title: "Quick Match", text: "Fast rounds that test how quickly you can spot a pair." },
        { title: "Pattern Puzzles", text: "Logic challenges that build problem-solving skills." },
        { title: "Focus and speed", text: "Short sessions designed to boost focus and mental speed." },
      ],
      // PLACEHOLDER stats and reviews — replace with real figures before launch.
      stats: { downloads: "1K", rating: "5.0" },
      reviews: [
        { name: "Chloé D.", place: "Lyon, France", text: "A nice mix of puzzles. Great for a daily brain warm-up." },
        { name: "Mateus P.", place: "São Paulo, Brazil", text: "The pattern puzzles are properly tricky. Love it." },
        { name: "Hannah W.", place: "Sydney, Australia", text: "I play on my commute and feel sharper already." },
        { name: "Thandi N.", place: "Cape Town, South Africa", text: "Muy buena variedad de juegos para ejercitar la mente." },
        { name: "Emily R.", place: "Austin, USA", text: "Short sessions that fit anywhere in my day." },
        { name: "Oliver T.", place: "London, UK", text: "My kids and I take turns beating each other's scores." },
        { name: "Aarav S.", place: "Mumbai, India", text: "Des jeux de mémoire variés et bien conçus. Top." },
        { name: "Sofía M.", place: "Madrid, Spain", text: "Ótimo para treinar a memória. Muito bem feito." },
        { name: "Yuki H.", place: "Tokyo, Japan", text: "Clean design and the difficulty ramps up nicely." },
        { name: "Lukas B.", place: "Berlin, Germany", text: "Best brain training app I've tried. Highly recommend." },
      ],
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

    const set = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    set("apps-title", `${this.word(n)} app${n === 1 ? "" : "s"} on the App Store`);
    set("stat-app-count", String(n).padStart(2, "0"));
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
    const title = app.slug
      ? `<a href="/apps/${app.slug}.html" class="card-link">${app.name}</a>`
      : app.name;
    return `
      <li class="project-card glass${app.slug ? " is-linked" : ""}">
        <div class="card-top">
          <img
            src="${app.icon}"
            alt="${app.name} app icon"
            class="app-icon"
            loading="lazy"
          />
          <span class="category">${app.category}</span>
        </div>

        <h3 class="card-title">${title}</h3>
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
