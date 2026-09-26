// ===== Configuration =====
const CONFIG = {
  email: "Lynda.khalfa@iconictv.tv",
  whatsapp: "213770954862",
  phoneDisplay: "+213 770 95 48 62",
  // Form submissions are delivered by FormSubmit (formsubmit.co) to this address.
  // The very first submission sends an activation email that must be confirmed once.
  formEndpoint: "https://formsubmit.co/ajax/Lynda.khalfa@iconictv.tv",
  // GoatCounter site code (e.g. "lyndakhalfa" for lyndakhalfa.goatcounter.com). Empty = analytics off.
  goatcounter: "",
  // Booking link (Calendly, Cal.com, Google Calendar booking page…). Empty = booking buttons hidden.
  bookingUrl: "",
  // Newsletter signup (sent to the form endpoint above). false = hidden.
  newsletter: false,
  // Optional free guide offered on signup (path to a PDF in assets/, or a full URL). Empty = plain newsletter.
  guideUrl: "",
};

// ===== Language (each language has its own page: /, /en/, /ar/) =====
const LANG = document.documentElement.lang in I18N ? document.documentElement.lang : "fr";
const ROOT = document.documentElement.dataset.root || "";
const t = (key) => I18N[LANG][key];
const asset = (path) => (/^(https?:)?\/\//.test(path) ? path : ROOT + path);

// ===== Social proof (data in assets/js/content.js) =====
const PREVIEW = new URLSearchParams(location.search).has("preview");
const clientsData = CLIENTS.length || !PREVIEW ? CLIENTS
  : Array.from({ length: 6 }, (_, i) => ({ name: `Logo client ${i + 1}` }));
const testimonialsData = TESTIMONIALS.length || !PREVIEW ? TESTIMONIALS
  : Array.from({ length: 3 }, () => ({
      name: "Prénom Nom",
      role: { fr: "Fonction, Organisation", en: "Role, Organisation", ar: "المنصب، المؤسسة" },
      quote: {
        fr: "Exemple de témoignage : le texte réel du client apparaîtra ici, en deux à quatre phrases.",
        en: "Sample testimonial: the client's real words will appear here, in two to four sentences.",
        ar: "مثال على شهادة: سيظهر هنا نص العميل الحقيقي في جملتين إلى أربع جمل.",
      },
    }));

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
};
const pick = (value, lang) => (typeof value === "string" ? value : value?.[lang] || value?.fr || "");

function renderClients() {
  if (!clientsData.length) return;
  const list = document.getElementById("clientsList");
  clientsData.forEach((client) => {
    const item = el("li", "clients__item");
    const inner = client.url ? el("a") : el("span");
    if (client.url) Object.assign(inner, { href: client.url, target: "_blank", rel: "noopener" });
    if (client.logo) {
      const img = el("img");
      Object.assign(img, { src: asset(client.logo), alt: client.name, loading: "lazy" });
      inner.appendChild(img);
    } else {
      inner.appendChild(el("span", "clients__placeholder", client.name));
    }
    item.appendChild(inner);
    list.appendChild(item);
  });
  document.getElementById("clients").hidden = false;
}

function renderTestimonials(lang) {
  if (!testimonialsData.length) return;
  const grid = document.getElementById("testimonialsGrid");
  grid.replaceChildren();
  testimonialsData.forEach((item) => {
    const card = el("figure", "testimonial");
    card.appendChild(el("span", "testimonial__mark", "“"));
    card.appendChild(el("blockquote", "testimonial__quote", pick(item.quote, lang)));
    const caption = el("figcaption", "testimonial__author");
    if (item.photo) {
      const img = el("img", "testimonial__photo");
      Object.assign(img, { src: asset(item.photo), alt: item.name, loading: "lazy" });
      caption.appendChild(img);
    } else {
      caption.appendChild(el("span", "testimonial__photo testimonial__photo--initials",
        item.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase()));
    }
    const who = el("div");
    who.appendChild(el("strong", null, item.name));
    who.appendChild(el("span", null, pick(item.role, lang)));
    caption.appendChild(who);
    card.appendChild(caption);
    grid.appendChild(card);
  });
  document.getElementById("testimonials").hidden = false;
}

const mediaData = MEDIA.length || !PREVIEW ? MEDIA
  : ["video", "article", "podcast"].map((type) => ({
      type, url: "#", source: "Média",
      title: { fr: "Exemple : titre de l'interview ou de l'article", en: "Sample: interview or article title", ar: "مثال: عنوان المقابلة أو المقال" },
    }));

const youtubeId = (url) => url.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/)?.[1];

function renderMedia(lang) {
  if (!mediaData.length) return;
  const grid = document.getElementById("mediaGrid");
  const ctaKey = { video: "media.watch", article: "media.read", podcast: "media.listen" };
  mediaData.forEach((item) => {
    const card = el("a", "media-card");
    Object.assign(card, { href: item.url, target: "_blank", rel: "noopener" });
    const thumb = el("div", "media-card__thumb");
    const ytId = youtubeId(item.url || "");
    const src = item.image ? asset(item.image) : ytId ? `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg` : "";
    if (src) {
      const img = el("img");
      Object.assign(img, { src, alt: "", loading: "lazy" });
      thumb.appendChild(img);
    }
    if (item.type === "video") thumb.appendChild(el("span", "media-card__play"));
    card.appendChild(thumb);
    const body = el("div", "media-card__body");
    body.appendChild(el("span", "media-card__source", item.source || ""));
    body.appendChild(el("h3", "media-card__title", pick(item.title, lang)));
    body.appendChild(el("span", "media-card__cta", `${t(ctaKey[item.type] || "media.read")} →`));
    card.appendChild(body);
    grid.appendChild(card);
  });
  document.getElementById("media").hidden = false;
}

renderClients();
renderTestimonials(LANG);
renderMedia(LANG);

// ===== Contact links =====
const waUrl = `https://wa.me/${CONFIG.whatsapp}`;
const waLink = document.getElementById("waLink");
waLink.href = waUrl;
waLink.textContent = CONFIG.phoneDisplay;
document.getElementById("waFloat").href = waUrl;
const emailLink = document.getElementById("emailLink");
emailLink.href = `mailto:${CONFIG.email}`;
emailLink.textContent = CONFIG.email;

// ===== Header on scroll =====
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ===== Mobile menu =====
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    burger.classList.remove("open");
    nav.classList.remove("open");
  })
);

// ===== Reveal on scroll =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ===== Contact form =====
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

function mailtoFallback(data) {
  const subject = `Contact — ${data.get("name")}`;
  const body = [
    `Nom: ${data.get("name")}`,
    `Organisation: ${data.get("company")}`,
    `E-mail: ${data.get("email")}`,
    `Tél: ${data.get("phone")}`,
    `Service: ${data.get("service")}`,
    "",
    data.get("message"),
  ].join("\n");
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(contactForm);
  if (data.get("_honey")) return;
  const button = contactForm.querySelector("button[type=submit]");
  button.disabled = true;
  formNote.hidden = false;
  formNote.textContent = t("form.sending");
  try {
    const payload = Object.fromEntries(data);
    payload._subject = `Nouveau message du site — ${payload.name}`;
    payload._template = "table";
    payload._replyto = payload.email;
    const res = await fetch(CONFIG.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (!res.ok || String(json.success) !== "true") throw new Error(json.message);
    formNote.textContent = t("form.sent");
    contactForm.reset();
  } catch (err) {
    formNote.textContent = t("form.error");
    mailtoFallback(data);
  } finally {
    button.disabled = false;
  }
});

// ===== Booking =====
if (CONFIG.bookingUrl) {
  document.querySelectorAll("[data-booking]").forEach((a) => { a.href = CONFIG.bookingUrl; a.hidden = false; });
  document.querySelectorAll("[data-booking-item]").forEach((item) => { item.hidden = false; });
  document.querySelectorAll("[data-hide-if-booking]").forEach((item) => { item.hidden = true; });
}

// ===== Newsletter =====
const newsletter = document.getElementById("newsletter");
if (CONFIG.newsletter) {
  newsletter.hidden = false;
  if (CONFIG.guideUrl) {
    newsletter.querySelector("[data-news-plain]").hidden = true;
    newsletter.querySelector("[data-news-guide]").hidden = false;
  }
  newsletter.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(newsletter);
    if (data.get("_honey")) return;
    const note = document.getElementById("newsletterNote");
    const button = newsletter.querySelector("button");
    button.disabled = true;
    note.hidden = false;
    note.textContent = t("form.sending");
    try {
      const res = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: data.get("email"), langue: LANG, _subject: "Nouvelle inscription newsletter", _template: "table" }),
      });
      const json = await res.json();
      if (!res.ok || String(json.success) !== "true") throw new Error(json.message);
      note.textContent = t("news.thanks");
      if (CONFIG.guideUrl) {
        const link = el("a", null, t("news.download"));
        Object.assign(link, { href: asset(CONFIG.guideUrl), target: "_blank", rel: "noopener", download: "" });
        note.append(" ", link);
      }
      newsletter.reset();
    } catch (err) {
      note.textContent = t("news.error");
    } finally {
      button.disabled = false;
    }
  });
}

// ===== Analytics (GoatCounter: cookie-free, no consent banner needed) =====
if (CONFIG.goatcounter) {
  const gc = document.createElement("script");
  gc.async = true;
  gc.src = "https://gc.zgo.at/count.js";
  gc.dataset.goatcounter = `https://${CONFIG.goatcounter}.goatcounter.com/count`;
  document.head.appendChild(gc);
}

document.getElementById("year").textContent = new Date().getFullYear();
