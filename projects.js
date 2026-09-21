class ProjectsRenderer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
  }

  projects = [
    {
      name: "Pawdoku",
      tagline: "Cozy Sudoku, adorable dogs",
      description:
        "Meet Pawdoku, a cozy Sudoku puzzle game made for puzzle lovers and dog lovers. Solve satisfying number puzzles, collect adorable dogs, build your daily streak, and unlock rewards as you play.",
      link: "https://apps.apple.com/us/app/id6810373279",
      icon: "/assets/pawdoku_logo.png",
      tags: ["Puzzle", "Collect", "Daily Streak"],
    },
    {
      name: "Workout Planner",
      tagline: "Plan it. Track it. Repeat.",
      description:
        "Workout Planner: Gym Routine makes it easy to plan your workouts, follow a weekly routine, and stay consistent without feeling overwhelmed.",
      link: "https://apps.apple.com/us/app/id6801083419",
      icon: "/assets/workoutplanner_logo.png",
      tags: ["Fitness", "Routines", "Progress"],
    },
    {
      name: "SportFit",
      tagline: "Drills that build real skill",
      description:
        "Train smarter with expert drills for Cricket, Football, Badminton & Volleyball. Build skills, track progress, prepare for matches and perform like a pro.",
      link: "https://apps.apple.com/us/app/id6794868577",
      icon: "/assets/sportsfit_logo.png",
      tags: ["Training", "Sports", "Levels"],
    },
    {
      name: "ADHD Focus Timer: Pomodoro",
      tagline: "Focus without the setup",
      description:
        "A simple ADHD-friendly focus timer for work, study, reading, and everyday tasks. No complicated productivity system required.",
      link: "https://apps.apple.com/us/app/id6756427873",
      icon: "/assets/focusportal_logo.png",
      tags: ["Focus", "Pomodoro", "Habits"],
    },
    {
      name: "DashTap: Color Rush",
      tagline: "Speed decides everything",
      description:
        "DashTap Mania is a reflex game designed around one simple idea: speed decides everything.",
      link: "https://apps.apple.com/us/app/id6753695725",
      icon: "/assets/dashtap_2_logo.png",
      tags: ["Arcade", "Reflex", "High Score"],
    },
    {
      name: "BrainSprint",
      tagline: "Train your brain in sprints",
      description:
        "Challenge yourself with quick puzzles, mind skills games, and logic challenges designed to boost focus, speed, and problem-solving skills.",
      link: "https://apps.apple.com/us/app/id6753343626",
      icon: "/assets/brainsprint_2_logo.png",
      tags: ["Brain", "Memory", "Challenge"],
    },
  ];

  card(app) {
    return `
      <li class="project-card">
        <div class="card-glow" aria-hidden="true"></div>

        <div class="card-icon-wrap">
          <img
            src="${app.icon}"
            alt="${app.name} app icon"
            class="app-icon"
            loading="lazy"
          />
        </div>

        <h3 class="card-title">${app.name}</h3>
        <p class="card-tagline">${app.tagline}</p>
        <p class="card-desc">${app.description}</p>

        <ul class="tag-row">
          ${app.tags.map((t) => `<li class="tag">${t}</li>`).join("")}
        </ul>

        <a
          href="${app.link}"
          target="_blank"
          rel="noopener"
          class="appstore-link"
          aria-label="Download ${app.name} on the App Store"
        >
          <img src="/assets/appstore-badge.svg" alt="Download on the App Store" />
        </a>
      </li>
    `;
  }

  render() {
    const section = document.createElement("section");
    section.className = "projects";

    section.innerHTML = `
      <ul class="project-grid">
        ${this.projects.map((app) => this.card(app)).join("")}
      </ul>
    `;

    this.container.appendChild(section);
  }
}
