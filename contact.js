/**
 * SideQuest Apps — contact form.
 *
 * Submissions are emailed to RECIPIENT through FormSubmit (formsubmit.co),
 * which needs no account. The very first submission sends a one-time
 * activation email to RECIPIENT — click the link in it, and every message
 * after that arrives normally.
 */

const RECIPIENT = "mobileapps.avineet@gmail.com";
const ENDPOINT = `https://formsubmit.co/ajax/${RECIPIENT}`;

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("cf-status");
  const button = document.getElementById("cf-send");

  const say = (text, kind) => {
    status.textContent = text;
    status.dataset.kind = kind || "";
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    say("", "");

    // Clear old error marks, then check required fields
    form.querySelectorAll("[aria-invalid]").forEach((el) => el.removeAttribute("aria-invalid"));
    const missing = [...form.querySelectorAll("[required]")].filter((el) => !el.value.trim());
    const email = form.elements.email;
    const badEmail = email.value.trim() && !email.checkValidity();

    if (missing.length || badEmail) {
      missing.forEach((el) => el.setAttribute("aria-invalid", "true"));
      if (badEmail) email.setAttribute("aria-invalid", "true");
      (missing[0] || email).focus();
      say(badEmail && !missing.length ? "That email address doesn't look right." : "Please fill in the highlighted fields.", "error");
      return;
    }

    // Bots fill the hidden field; pretend it worked and drop it
    if (form.elements._honey.value) {
      say("Thanks, your message has been sent.", "ok");
      return;
    }

    const data = new FormData(form);
    data.append("_subject", `[SideQuest site] ${form.elements.subject.value.trim()}`);
    data.append("_template", "table");
    data.append("_captcha", "false");
    data.set("_replyto", form.elements.email.value.trim());

    button.disabled = true;
    button.textContent = "Sending…";

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || body.success === "false") throw new Error(body.message || "Request failed");

      form.reset();
      say("Thanks, your message is on its way. I'll reply by email.", "ok");
    } catch (err) {
      console.warn("Contact form failed", err);
      say(`That didn't send. Please email me directly at ${RECIPIENT}.`, "error");
    } finally {
      button.disabled = false;
      button.textContent = "Send message";
    }
  });
});
