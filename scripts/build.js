// Builds the static site into _site/: one pre-translated page per language (/, /en/, /ar/)
// with hreflang links, per-language meta tags and a sitemap. No dependencies: `node scripts/build.js`.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

// Public address of the site (change this when a custom domain is connected).
const SITE_URL = "https://bourezgd.github.io/lynda-website/";

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "_site");
const LANGS = {
  fr: { dir: "", locale: "fr_FR", textDir: "ltr" },
  en: { dir: "en/", locale: "en_US", textDir: "ltr" },
  ar: { dir: "ar/", locale: "ar_DZ", textDir: "rtl" },
};

const I18N = vm.runInNewContext(fs.readFileSync(path.join(ROOT, "assets/js/i18n.js"), "utf8") + ";I18N");
const template = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const setMeta = (html, attr, name, value) => {
  const re = new RegExp(`(<meta ${attr}="${name}" content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`Missing <meta ${attr}="${name}">`);
  return html.replace(re, `$1${escapeAttr(value)}$2`);
};

function buildPage(lang) {
  const { dir, locale, textDir } = LANGS[lang];
  const dict = I18N[lang];
  const root = dir ? "../" : "";
  const url = SITE_URL + dir;
  let html = template;

  // Translated text content.
  html = html.replace(/<(\w+)([^>]*?)data-i18n="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/g, (m, tag, a, key, b) => {
    if (!(key in dict)) throw new Error(`Missing ${lang} translation: ${key}`);
    return `<${tag}${a}data-i18n="${key}"${b}>${dict[key]}</${tag}>`;
  });
  html = html.replace(/data-i18n-placeholder="([^"]+)" placeholder="[^"]*"/g,
    (m, key) => `data-i18n-placeholder="${key}" placeholder="${escapeAttr(dict[key])}"`);

  html = html.replace(/<html lang="fr" dir="ltr" data-root="">/, `<html lang="${lang}" dir="${textDir}" data-root="${root}">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${dict["meta.title"]}</title>`);
  html = setMeta(html, "name", "description", dict["meta.description"]);
  html = setMeta(html, "property", "og:title", dict["meta.title"]);
  html = setMeta(html, "property", "og:description", dict["meta.description"]);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "name", "twitter:title", dict["meta.title"]);
  html = setMeta(html, "name", "twitter:description", dict["meta.description"]);
  html = html.replace(/\s*<meta property="og:locale(:alternate)?" content="[^"]*">/g, "");
  const locales = [`<meta property="og:locale" content="${locale}">`]
    .concat(Object.values(LANGS).filter((l) => l.locale !== locale).map((l) => `<meta property="og:locale:alternate" content="${l.locale}">`));
  html = html.replace(/(<meta property="og:image:height"[^>]*>)/, `$1\n  ${locales.join("\n  ")}`);

  // Canonical + hreflang alternates.
  const alternates = Object.entries(LANGS)
    .map(([code, l]) => `<link rel="alternate" hreflang="${code}" href="${SITE_URL + l.dir}">`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${SITE_URL}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">\n  ${alternates.join("\n  ")}`);

  // Language switcher links and current page.
  html = html.replace(/<nav class="lang-switch" aria-label="[^"]*">/, `<nav class="lang-switch" aria-label="${escapeAttr(dict["lang.label"])}">`);
  html = html.replace(/<a href="[^"]*" hreflang="(\w+)" lang="\1" data-lang="\1"( aria-current="page")?>/g, (m, code) =>
    `<a href="${root + LANGS[code].dir || "./"}" hreflang="${code}" lang="${code}" data-lang="${code}"${code === lang ? ' aria-current="page"' : ""}>`);

  // Relative paths for pages in a sub-folder.
  if (root) {
    html = html.replace(/(src|href)="(assets\/|mentions-legales\.html|confidentialite\.html)/g, `$1="${root}$2`);
  }

  const target = path.join(OUT, dir, "index.html");
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT);
Object.keys(LANGS).forEach(buildPage);

fs.cpSync(path.join(ROOT, "assets"), path.join(OUT, "assets"), { recursive: true });
["mentions-legales.html", "confidentialite.html", "robots.txt", "CNAME"].forEach((file) => {
  if (fs.existsSync(path.join(ROOT, file))) fs.copyFileSync(path.join(ROOT, file), path.join(OUT, file));
});
fs.writeFileSync(path.join(OUT, ".nojekyll"), "");
fs.writeFileSync(path.join(OUT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}sitemap.xml\n`);

const links = Object.entries(LANGS)
  .map(([code, l]) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${SITE_URL + l.dir}"/>`).join("\n");
const urls = Object.values(LANGS)
  .map((l) => `  <url>\n    <loc>${SITE_URL + l.dir}</loc>\n${links}\n  </url>`).join("\n");
fs.writeFileSync(path.join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`);

console.log(`Built ${Object.keys(LANGS).length} language pages into ${path.relative(ROOT, OUT)}/`);
