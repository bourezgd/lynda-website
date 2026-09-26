// ===== Configuration (TODO: replace with real contact details) =====
const CONFIG = {
  email: "contact@lyndakhalfa.com",
  whatsapp: "213000000000",
  phoneDisplay: "+213 000 00 00 00",
};

// ===== Translations =====
const FR = {
  "brand": "Lynda Khalfa",
  "nav.about": "À propos",
  "nav.journey": "Parcours",
  "nav.services": "Services",
  "nav.ventures": "Mes entreprises",
  "nav.contact": "Contact",
  "cta.contact": "Me contacter",
  "cta.journey": "Découvrir mon parcours",
  "cta.talk": "Parlons-en",
  "hero.eyebrow": "Médias · Communication · Relations publiques",
  "hero.title": "Une voix qui crée la <em>présence</em>, une image qui bâtit la <em>confiance</em>",
  "hero.lead": "Un parcours entre les plus grandes marques des télécoms et les chaînes de télévision, mis aujourd'hui au service des institutions et des personnalités qui veulent être vues, entendues et crues.",
  "hero.badge": "Fondatrice",
  "brands.label": "Étapes de mon parcours",
  "about.quote": "Nous offrons notre espace à des icônes : des personnes qui ont de vraies réalisations et des choses à dire, sans être forcément des stars.",
  "about.eyebrow": "À propos",
  "about.title": "Lynda Khalfa, experte en médias et communication",
  "about.p1": "J'ai débuté dans les directions marketing et communication des grands opérateurs télécoms et groupes technologiques en Algérie, où j'ai piloté de vastes campagnes publicitaires et audiovisuelles, avant de rejoindre la télévision pour diriger le bureau de Nessma TV à Alger, puis la direction exécutive d'El Djazairia One.",
  "about.p2": "Aujourd'hui, je porte deux projets médias : la plateforme Iconic, dédiée à l'art, la culture et le divertissement, et l'agence Manalya, spécialisée en communication, production et relations publiques.",
  "about.l1": "Une double expertise : grandes marques et chaînes de télévision",
  "about.l2": "Arabe, français et anglais",
  "about.l3": "Un large réseau dans les milieux médiatique, artistique et institutionnel",
  "journey.eyebrow": "Parcours",
  "journey.title": "Des grandes marques à l'écran",
  "journey.i1.tag": "Télécoms & technologie",
  "journey.i1.t": "Marketing & communication",
  "journey.i1.d": "Postes de direction marketing et communication chez Djezzy, Ooredoo et Samsung, et directrice marketing chez Nedjma, où elle a piloté de grandes campagnes publicitaires et audiovisuelles.",
  "journey.i2.t": "Directrice de la communication",
  "journey.i2.d": "Pilotage de la communication institutionnelle d'une grande entreprise de service public.",
  "journey.i3.t": "Directrice du bureau d'Alger",
  "journey.i3.d": "Direction du bureau de la chaîne à Alger pendant plus de quatre ans.",
  "journey.i4.t": "Directrice exécutive",
  "journey.i4.d": "Direction d'une chaîne de télévision privée, de sa programmation et de ses équipes.",
  "journey.i5.t": "Fondatrice & entrepreneure",
  "journey.i5.d": "Lancement de la plateforme Iconic et de l'agence Manalya, et représentation de l'Algérie au Congrès mondial des médias à Abu Dhabi en 2022.",
  "services.eyebrow": "Services",
  "services.title": "Une expertise médias au service de votre image",
  "services.lead": "De la stratégie à l'exécution, j'accompagne institutions et personnalités dans tout ce qui touche à leur présence médiatique.",
  "services.s1.t": "Conseil en communication & RP",
  "services.s1.d": "Construire une stratégie de communication claire et gérer la relation avec la presse et les médias.",
  "services.s2.t": "Campagnes publicitaires & marketing",
  "services.s2.d": "Concevoir et piloter des campagnes intégrées, avec l'expérience acquise auprès de grandes marques.",
  "services.s3.t": "Production audiovisuelle",
  "services.s3.d": "Produire émissions, vidéos et contenus digitaux qui racontent votre histoire avec professionnalisme.",
  "services.s4.t": "Organisation d'événements",
  "services.s4.d": "Conférences de presse, lancements, événements culturels et artistiques, de l'idée à la réalisation.",
  "services.s5.t": "Image personnelle & media training",
  "services.s5.d": "Construire l'image des personnalités publiques, artistes et dirigeants, et préparer leurs interviews.",
  "services.s6.t": "Stratégie médias",
  "services.s6.d": "Accompagner le lancement et le développement de chaînes, plateformes et projets médias.",
  "ventures.eyebrow": "Mes entreprises",
  "ventures.title": "Deux projets, une même vision",
  "ventures.iconic.type": "Plateforme média",
  "ventures.iconic.d": "Une plateforme sérieuse et de qualité dédiée à l'art, la culture et le divertissement, qui met en lumière les artistes et les personnes aux vraies réalisations, et propose création de contenu, production audiovisuelle et marketing digital.",
  "ventures.manalya.type": "Agence de communication",
  "ventures.manalya.d": "Agence spécialisée en communication, production, relations publiques et événementiel, basée à Hydra, Alger.",
  "highlight.t": "Congrès mondial des médias — Abu Dhabi",
  "highlight.d": "Iconic a représenté l'Algérie au Congrès mondial des médias, une reconnaissance internationale du travail d'une petite équipe ambitieuse.",
  "band.title": "Un projet, une marque ou un événement qui mérite d'être raconté ?",
  "contact.eyebrow": "Contact",
  "contact.title": "Parlons de votre projet",
  "contact.lead": "Remplissez le formulaire ou contactez-moi directement via mes réseaux.",
  "contact.email": "E-mail",
  "contact.phone": "Téléphone / WhatsApp",
  "contact.location": "Localisation",
  "contact.city": "Alger, Algérie",
  "form.name": "Nom complet",
  "form.company": "Organisation",
  "form.email": "E-mail",
  "form.phone": "Téléphone",
  "form.service": "Service souhaité",
  "form.message": "Votre message",
  "form.submit": "Envoyer",
  "form.sent": "Merci ! Votre application e-mail va s'ouvrir pour envoyer la demande.",
  "footer.rights": "Tous droits réservés",
  "meta.title": "Lynda Khalfa | Médias, communication & relations publiques",
};

// Arabic strings are read from the HTML on load
const AR = {
  "form.sent": "شكراً! سيتم فتح تطبيق البريد لإرسال طلبك.",
  "meta.title": "ليندا خلفة | الإعلام والاتصال والعلاقات العامة",
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
