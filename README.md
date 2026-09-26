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

## نموذج التواصل
الرسائل تُرسل عبر FormSubmit إلى `CONFIG.email` في `assets/js/main.js`.
**مرة واحدة:** أول رسالة تُرسل من الموقع تصل معها رسالة تفعيل إلى هذا البريد، ويجب الضغط على رابط التفعيل.
إن فشل الإرسال، يفتح الموقع تطبيق البريد عند الزائر كحل احتياطي.

## الإحصائيات
أنشئ حساباً مجانياً على goatcounter.com، ثم ضع الرمز في `CONFIG.goatcounter` (بدون كوكيز، فلا حاجة لنافذة موافقة).

## ربط نطاق خاص
1. أنشئ ملف `CNAME` في جذر المستودع يحتوي النطاق فقط (مثل `lyndakhalfa.com`).
2. عند مزوّد النطاق: سجلات A نحو `185.199.108.153` و`185.199.109.153` و`185.199.110.153` و`185.199.111.153`، وسجل CNAME لـ `www` نحو `bourezgd.github.io`.
3. في Settings → Pages: أدخل النطاق وفعّل **Enforce HTTPS**.
4. استبدل `https://bourezgd.github.io/lynda-website/` بالنطاق الجديد في `index.html` و`robots.txt` و`sitemap.xml`.
