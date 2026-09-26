# lynda-website

الموقع الشخصي لـ **ليندا خالفة** — الإعلام والاتصال والعلاقات العامة (Iconic · Manalya).

موقع ثابت (HTML/CSS/JS) بثلاث لغات: الفرنسية (افتراضي) والإنجليزية والعربية.

## التشغيل
افتح `index.html` في المتصفح، أو استضفه على GitHub Pages / Netlify / Vercel.

## ما يجب تعديله
- معلومات التواصل: `CONFIG` في أعلى `assets/js/main.js`.
- الصور والشعارات في `assets/img/`.
- النصوص: الفرنسية في `index.html` وفي القاموس `FR`، والإنجليزية `EN` والعربية `AR` في `assets/js/main.js`.

## النشر
كل دفع (push) إلى `main` ينشر الموقع تلقائياً على GitHub Pages عبر `.github/workflows/pages.yml`.
يجب تفعيل Pages مرة واحدة: Settings → Pages → Source: **GitHub Actions**.
