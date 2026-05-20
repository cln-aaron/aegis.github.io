# AEGIS·AI

Website for **AEGIS·AI** — the unified AI Security Operations platform,
by Hesed & Emet Advisory Pte Ltd. Live at https://aegis.hesedemet.asia/

Static site, no build step:

| File | Purpose |
|---|---|
| `index.html` | Marketing site (multi-language toggle) |
| `login.html` | Sign-in |
| `styles.css` / `script.js` | Shared landing-page assets |
| `i18n.js` | Localisation (zh-Hant, zh-Hans, ko) |
| `auth.min.js` | Sign-in handler |
| `robots.txt` / `sitemap.xml` / `llms.txt` / `og.svg` | SEO / GEO |

The signed-in console is served from an unguessable path derived at
sign-in; it is not referenced or linked anywhere in source.

Open `index.html` locally or serve the directory; it deploys as-is to
`aegis.hesedemet.asia`.
