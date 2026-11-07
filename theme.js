
const root = document.documentElement;
const storageKey = "theme";

const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  updateThemeIcon(theme); // ✅ added
}

// Initial load
const savedTheme = localStorage.getItem(storageKey);

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme(systemPrefersLight.matches ? "light" : "dark");
}

// Listen for system changes ONLY if user hasn’t chosen
systemPrefersLight.addEventListener("change", (e) => {
  if (!localStorage.getItem(storageKey)) {
    applyTheme(e.matches ? "light" : "dark");
  }
});

function toggleTheme() {
  const current = root.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";

  applyTheme(next);
  localStorage.setItem(storageKey, next);
}

// ✅ NEW: icon handling (non-breaking)
function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;

  icon.textContent = theme === "light" ? "🌙" : "☀️";
}

// Mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  if (!nav || !toggle) return;

  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));

  // Close after choosing a link, on Escape, or when tapping outside
  nav.querySelectorAll(".nav-link, .nav-links .btn").forEach((a) =>
    a.addEventListener("click", () => setOpen(false))
  );
  document.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));
  document.addEventListener("click", (e) => !nav.contains(e.target) && setOpen(false));
});
