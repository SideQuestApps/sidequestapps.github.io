class ProjectsRenderer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
  }

  projects = [
    {
      name: "SportFit: Cricket Training",
      description:
        "Train smarter with expert drills for Cricket, Football, Badminton & Volleyball. Build skills, track progress, prepare for matches and perform like a pro.",
      link: "https://apps.apple.com/us/app/id6794868577",
      icon: "/assets/sportsfit_logo.png",
    },
    {
      name: "ADHD Focus Timer: Pomodoro",
      description:
        "A simple ADHD-friendly focus timer for work, study, reading, and everyday tasks. No complicated productivity system required.",
      link: "https://apps.apple.com/us/app/id6756427873",
      icon: "/assets/focusportal_logo.png",
    },
    {
      name: "TapOut Reflex Games : DashTap",
      description:
        "DashTap Mania is a reflex game designed around one simple idea: speed decides everything.",
      link: "https://apps.apple.com/us/app/id6753695725",
      icon: "/assets/dashtap_logo.png",
    },
    {
      name: "BrainSprint: Memory Match, Quick Match, Pattern Puzzle",
      description:
        "Challenge yourself with quick puzzles, mind skills games, and logic challenges designed to boost focus, speed, and problem-solving skills.",
      link: "https://apps.apple.com/us/app/id6753343626",
      icon: "/assets/brainsprint_logo.png",
    }
  ];

  render() {
    const section = document.createElement("section");
    section.className = "projects";

    section.innerHTML = `
      <h2>Apps</h2>
      <ul>
        ${this.projects
          .map(
            (app) => `
          <li class="project-card">
          <div class="project-header">
            <img 
              src="${app.icon}" 
              alt="${app.name} app icon" 
              class="app-icon"
              loading="lazy"
            />
            <div>
              <strong>${app.name}</strong>
              <p>${app.description}</p>
            </div>
          </div>

          <a 
            href="${app.link}" 
            target="_blank" 
            rel="noopener"
            class="appstore-link"
          >
            <img 
              src="/assets/appstore-badge.svg"
              alt="Download on the App Store"
            />
          </a>
        </li>
        `
          )
          .join("")}
      </ul>
    `;

    this.container.appendChild(section);
  }
}
