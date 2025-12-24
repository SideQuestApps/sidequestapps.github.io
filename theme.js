
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
