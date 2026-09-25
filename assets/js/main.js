// ===== Configuration (replace with real contact details) =====
const CONFIG = {
  email: "contact@lyndakhalifa.com",
  whatsapp: "213000000000",
};

// ===== Translations =====
const FR = {
  "brand": "Lynda Khalifa",
  "nav.about": "À propos",
  "nav.services": "Services",
  "nav.approach": "Méthode",
  "nav.why": "Pourquoi moi",
  "nav.contact": "Contact",
  "cta.book": "Réserver une consultation",
  "cta.services": "Découvrir les services",
  "hero.eyebrow": "Conseil stratégique · Maghreb",
  "hero.title": "Transformez votre ambition en un <em>empire d'affaires</em> durable",
  "hero.lead": "J'accompagne entrepreneurs, investisseurs et entreprises familiales dans la construction de stratégies de croissance claires, des décisions éclairées et l'accès à un réseau qui fait la différence.",
  "hero.badge": "ans d'expérience",
  "stats.clients": "clients accompagnés",
  "stats.countries": "pays du Maghreb",
  "stats.projects": "projets d'investissement",
  "stats.satisfaction": "de clients satisfaits",
  "about.quote": "Le succès n'est jamais un hasard : c'est le fruit d'une vision claire, de décisions audacieuses et d'une exécution rigoureuse.",
  "about.eyebrow": "À propos",
  "about.title": "Lynda Khalifa, consultante en stratégie & business",
  "about.p1": "Experte en conseil aux entreprises et en développement de l'investissement, je travaille avec des dirigeants en Algérie, en Tunisie et au Maroc pour structurer leurs projets, accélérer leur croissance et ouvrir de nouveaux partenariats.",
  "about.p2": "Je crois que chaque projet réussi commence par une compréhension profonde de son porteur et de ses objectifs. C'est pourquoi j'offre un accompagnement personnalisé et strictement confidentiel, fondé sur la confiance et des résultats concrets.",
  "about.l1": "Accompagnement personnalisé et confidentiel",
  "about.l2": "Connaissance approfondie du marché maghrébin",
  "about.l3": "Un large réseau d'investisseurs et de décideurs",
  "services.eyebrow": "Services",
  "services.title": "Des solutions conçues pour les dirigeants",
  "services.lead": "Une offre de conseil complète couvrant chaque étape de votre croissance, de l'idée à l'expansion régionale.",
  "services.s1.t": "Stratégie & croissance",
  "services.s1.d": "Diagnostic complet de votre activité et construction d'un plan de croissance aux objectifs mesurables.",
  "services.s2.t": "Investissement & financement",
  "services.s2.d": "Préparation des dossiers d'investissement, évaluation des opportunités et mise en relation avec les investisseurs.",
  "services.s3.t": "Création & structuration",
  "services.s3.d": "Accompagnement dans la création d'entreprise, le choix de la forme juridique et l'organisation de la gouvernance.",
  "services.s4.t": "Expansion maghrébine & internationale",
  "services.s4.d": "Études de marché et stratégie d'entrée réussie sur les marchés du Maghreb et au-delà.",
  "services.s5.t": "Coaching exécutif",
  "services.s5.d": "Séances individuelles pour développer votre leadership, affiner vos décisions et piloter vos équipes.",
  "services.s6.t": "Entreprises familiales",
  "services.s6.d": "Organiser la relation famille–entreprise et préparer la transmission entre générations.",
  "approach.eyebrow": "Méthode",
  "approach.title": "Quatre étapes vers les résultats",
  "approach.s1.t": "Écoute & diagnostic",
  "approach.s1.d": "Une première séance pour comprendre précisément votre vision, vos défis et vos objectifs.",
  "approach.s2.t": "Analyse & stratégie",
  "approach.s2.d": "Une étude approfondie et une stratégie sur mesure pour votre projet.",
  "approach.s3.t": "Exécution & suivi",
  "approach.s3.d": "Un suivi terrain et des ajustements continus pour garantir la bonne mise en œuvre.",
  "approach.s4.t": "Mesure & évolution",
  "approach.s4.d": "Évaluation des résultats et identification des prochaines opportunités.",
  "why.eyebrow": "Pourquoi moi",
  "why.title": "Une partenaire de confiance vers le sommet",
  "why.lead": "Pas de solutions toutes faites : je construis avec vous un parcours adapté à votre ambition et à la réalité de votre marché.",
  "why.i1.t": "Confidentialité totale",
  "why.i1.d": "Vos informations et décisions sont protégées par les plus hauts standards de confidentialité.",
  "why.i2.t": "Résultats concrets",
  "why.i2.d": "Des objectifs clairs et des indicateurs qui mesurent chaque progrès.",
  "why.i3.t": "Réseau d'influence",
  "why.i3.d": "Un accès direct à des investisseurs, experts et partenaires de la région.",
  "why.i4.t": "Accompagnement sur mesure",
  "why.i4.d": "Une relation directe et un suivi personnel tout au long de la mission.",
  "band.title": "Prêt(e) à faire passer votre entreprise au niveau supérieur ?",
  "contact.eyebrow": "Contact",
  "contact.title": "Parlons de votre projet",
  "contact.lead": "Remplissez le formulaire ou contactez-moi directement, je vous réponds sous 24 heures.",
  "contact.email": "E-mail",
  "contact.phone": "Téléphone / WhatsApp",
  "contact.location": "Localisation",
  "contact.city": "Algérie",
  "form.name": "Nom complet",
  "form.company": "Entreprise",
  "form.email": "E-mail",
  "form.phone": "Téléphone",
  "form.service": "Service souhaité",
  "form.message": "Votre message",
  "form.submit": "Envoyer la demande",
  "form.sent": "Merci ! Votre application e-mail va s'ouvrir pour envoyer la demande.",
  "footer.rights": "Tous droits réservés",
  "meta.title": "Lynda Khalifa | Conseil aux entreprises",
};

// Arabic strings are read from the HTML on load
const AR = {
  "form.sent": "شكراً! سيتم فتح تطبيق البريد لإرسال طلبك.",
  "meta.title": "ليندا خالفة | استشارات الأعمال",
};
document.querySelectorAll("[data-i18n]").forEach((el) => {
  AR[el.dataset.i18n] ??= el.innerHTML;
});

const langToggle = document.getElementById("langToggle");

function setLang(lang) {
  const dict = lang === "fr" ? FR : AR;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fr" ? "ltr" : "rtl";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.title = dict["meta.title"];
  langToggle.textContent = lang === "fr" ? "ع" : "FR";
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

langToggle.addEventListener("click", () => {
  setLang(document.documentElement.lang === "fr" ? "ar" : "fr");
});

let savedLang = null;
try { savedLang = localStorage.getItem("lang"); } catch (e) {}
if (savedLang === "fr") setLang("fr");

// ===== Contact links =====
const waUrl = `https://wa.me/${CONFIG.whatsapp}`;
document.getElementById("waLink").href = waUrl;
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

// ===== Reveal on scroll & counters =====
const animateCount = (el) => {
  const target = +el.dataset.count;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / 1600, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      const counter = entry.target.querySelector("[data-count]");
      if (counter) animateCount(counter);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ===== Contact form (opens the visitor's email app) =====
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = `Consultation — ${data.get("name")}`;
  const body = [
    `Nom / الاسم: ${data.get("name")}`,
    `Entreprise / الشركة: ${data.get("company")}`,
    `E-mail: ${data.get("email")}`,
    `Tél / الهاتف: ${data.get("phone")}`,
    `Service / الخدمة: ${data.get("service")}`,
    "",
    data.get("message"),
  ].join("\n");
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const note = document.getElementById("formNote");
  note.textContent = (document.documentElement.lang === "fr" ? FR : AR)["form.sent"];
  note.hidden = false;
});

document.getElementById("year").textContent = new Date().getFullYear();
