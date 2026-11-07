/**
 * SideQuest Apps — blog page.
 *
 * The posts live on Medium; this page only shows previews that link out.
 * Two ways to fill it:
 *
 *   1. Set MEDIUM_PROFILE below (e.g. "https://medium.com/@yourname").
 *      The page will pull your latest stories from Medium's public RSS feed.
 *   2. Or add entries to MANUAL_POSTS by hand. These are used if the feed
 *      is not configured, or if it can't be reached.
 *
 * Until one of those is filled in, the page shows a friendly empty state.
 */

const MEDIUM_PROFILE = "https://medium.com/@avineetgupta"; // e.g. "https://medium.com/@yourname"

const MANUAL_POSTS = [
  // {
  //   title: "Post title as it appears on Medium",
  //   excerpt: "One or two sentences that make someone want to click.",
  //   url: "https://medium.com/@yourname/your-post-slug",
  //   date: "2026-11-01",        // YYYY-MM-DD
  //   readTime: "6 min read",    // optional
  //   tags: ["iOS", "Indie"],    // optional
  //   image: "/assets/blog/your-cover.jpg", // optional
  // },
];

class BlogRenderer {
  constructor() {
    this.root = document.getElementById("posts-root");
    this.followLinks = document.querySelectorAll("[data-medium-link]");
  }

  /* ---------- helpers ---------- */

  escape(text) {
    const el = document.createElement("div");
    el.textContent = text ?? "";
    return el.innerHTML;
  }

  formatDate(iso) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }

  stripHtml(html) {
    const el = document.createElement("div");
    el.innerHTML = html;
    return (el.textContent || "").replace(/\s+/g, " ").trim();
  }

  shorten(text, max = 170) {
    if (text.length <= max) return text;
    return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
  }

  readTime(html) {
    const words = this.stripHtml(html).split(" ").length;
    return `${Math.max(1, Math.round(words / 220))} min read`;
  }

  /* ---------- data ---------- */

  async loadFromMedium() {
    const match = MEDIUM_PROFILE.match(/medium\.com\/(@[^/?#]+|[^/?#]+)/i);
    if (!match) return [];

    const feed = `https://medium.com/feed/${match[1]}`;
    const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`;

    const res = await fetch(api);
    if (!res.ok) throw new Error("Feed request failed");
    const data = await res.json();

    return (data.items || []).map((item) => {
      const html = item.content || item.description || "";
      const doc = new DOMParser().parseFromString(html, "text/html");
      const firstPara = doc.querySelector("p");
      const img = item.thumbnail || doc.querySelector("img")?.src || "";

      return {
        title: item.title,
        // Medium puts the subtitle in the first paragraph; fall back to the opening text.
        excerpt: this.shorten(firstPara ? firstPara.textContent.trim() : this.stripHtml(html)),
        url: item.link.split("?")[0],
        date: item.pubDate ? item.pubDate.replace(" ", "T") + "Z" : "",
        readTime: this.readTime(html),
        tags: (item.categories || []).slice(0, 3),
        image: img,
      };
    });
  }

  async loadPosts() {
    if (MEDIUM_PROFILE) {
      try {
        const posts = await this.loadFromMedium();
        if (posts.length) return posts;
      } catch (err) {
        console.warn("Could not load the Medium feed, using manual posts.", err);
      }
    }
    return [...MANUAL_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  /* ---------- markup ---------- */

  arrow() {
    return `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M6 4h6v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`;
  }

  metaLine(post) {
    const bits = [this.formatDate(post.date), post.readTime].filter(Boolean);
    return bits.map((b) => `<span>${this.escape(b)}</span>`).join('<span class="dot" aria-hidden="true">·</span>');
  }

  tagList(post) {
    if (!post.tags || !post.tags.length) return "";
    return `<ul class="post-tags">${post.tags.map((t) => `<li>${this.escape(t)}</li>`).join("")}</ul>`;
  }

  cover(post) {
    if (!post.image) return "";
    return `<div class="post-cover"><img src="${this.escape(post.image)}" alt="" loading="lazy" /></div>`;
  }

  renderLatest(post) {
    return `
      <a class="post-latest glass glass-raised" href="${this.escape(post.url)}" target="_blank" rel="noopener">
        ${this.cover(post)}
        <div class="post-latest-body">
          <span class="kicker">Latest</span>
          <h2>${this.escape(post.title)}</h2>
          <p>${this.escape(post.excerpt)}</p>
          <div class="post-meta">${this.metaLine(post)}</div>
          ${this.tagList(post)}
          <span class="post-cta">Read on Medium ${this.arrow()}</span>
        </div>
      </a>`;
  }

  renderRow(post) {
    return `
      <li>
        <a class="post-row" href="${this.escape(post.url)}" target="_blank" rel="noopener">
          <div class="post-row-meta">${this.metaLine(post)}</div>
          <div class="post-row-main">
            <h3>${this.escape(post.title)}</h3>
            <p>${this.escape(post.excerpt)}</p>
            ${this.tagList(post)}
          </div>
          <span class="post-row-go" aria-hidden="true">${this.arrow()}</span>
        </a>
      </li>`;
  }

  renderEmpty() {
    const follow = MEDIUM_PROFILE
      ? `<a href="${this.escape(MEDIUM_PROFILE)}" class="btn btn-sm" target="_blank" rel="noopener">Visit my Medium profile</a>`
      : "";
    return `
      <div class="posts-empty glass">
        <h2>The first posts are on their way</h2>
        <p>I'm still writing them up. They'll show up here as soon as they're live on Medium.</p>
        ${follow}
      </div>`;
  }

  /* ---------- entry point ---------- */

  async render() {
    this.followLinks.forEach((link) => {
      if (MEDIUM_PROFILE) {
        link.href = MEDIUM_PROFILE;
      } else {
        link.hidden = true;
      }
    });

    const countEl = document.getElementById("post-count");

    if (this.root) {
      const posts = await this.loadPosts();

      if (!posts.length) {
        this.root.innerHTML = this.renderEmpty();
      } else {
        const [latest, ...rest] = posts;
        this.root.innerHTML = `
          ${this.renderLatest(latest)}
          ${
            rest.length
              ? `<div class="posts-head"><h2 class="posts-title">Earlier posts</h2></div>
                 <ul class="post-list">${rest.map((p) => this.renderRow(p)).join("")}</ul>`
              : ""
          }`;
      }

      if (countEl) {
        countEl.textContent = posts.length
          ? `${posts.length} ${posts.length === 1 ? "post" : "posts"}`
          : "Coming soon";
      }
    }

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new BlogRenderer().render();
});
