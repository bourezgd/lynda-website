# lynda-website

الموقع الشخصي لـ **ليندا خالفة** — الإعلام والاتصال والعلاقات العامة (Iconic · Manalya).

موقع ثابت (HTML/CSS/JS) بثلاث لغات، لكل لغة رابطها الخاص:
- الفرنسية (الرئيسية): `/`
- الإنجليزية: `/en/`
- العربية: `/ar/`

## البناء والنشر
- `index.html` مكتوب بالفرنسية وهو القالب. الترجمات في `assets/js/i18n.js` (القواميس `FR` و`EN` و`AR` بنفس المفاتيح).
- `node scripts/build.js` يولّد الموقع الكامل في `_site/`: صفحة مترجمة لكل لغة، وروابط hreflang، ووسوم كل لغة، و`sitemap.xml` و`robots.txt`.
- للمعاينة محلياً: `node scripts/build.js && cd _site && python3 -m http.server` ثم افتح `http://localhost:8000`.
- كل دفع (push) إلى `main` يبني الموقع وينشره تلقائياً على GitHub Pages عبر `.github/workflows/pages.yml`.

## الإعدادات (`CONFIG` في أعلى `assets/js/main.js`)
| الإعداد | الدور |
|---|---|
| `email`، `whatsapp`، `phoneDisplay` | معلومات التواصل |
| `formEndpoint` | عنوان FormSubmit للنموذج. **أول رسالة** تُرسل معها رسالة تفعيل إلى البريد يجب تأكيدها مرة واحدة |
| `goatcounter` | رمز GoatCounter للإحصائيات (بدون كوكيز). فارغ = معطّل |
| `bookingUrl` | رابط الحجز (Calendly أو Cal.com…). يُظهر أزرار «احجز مكالمة تعارف». فارغ = مخفية |
| `newsletter` | `true` يُظهر خانة الاشتراك في النشرة داخل قسم التواصل |
| `guideUrl` | ملف PDF يُقدَّم مجاناً عند الاشتراك (مثل `assets/guide.pdf`). فارغ = نشرة عادية |

## المحتوى (`assets/js/content.js`)
ثلاث قوائم، وكل قسم يبقى مخفياً ما دامت قائمته فارغة، ويظهر تلقائياً عند إضافة أول عنصر (الأمثلة مكتوبة في الملف):
- `MEDIA`: قسم «À la une» (مقابلات، برامج، مقالات، بودكاست). صورة روابط يوتيوب تُجلب تلقائياً.
- `TESTIMONIALS`: الشهادات. صورها في `assets/img/testimonials/`.
- `CLIENTS`: شعارات العملاء. في `assets/img/clients/`.

لمعاينة التصميم بمحتوى تجريبي: أضف `?preview=1` في آخر الرابط.

## ربط نطاق خاص
1. أنشئ ملف `CNAME` في جذر المستودع يحتوي النطاق فقط (مثل `lyndakhalfa.com`).
2. عند مزوّد النطاق: سجلات A نحو `185.199.108.153` و`185.199.109.153` و`185.199.110.153` و`185.199.111.153`، وسجل CNAME لـ `www` نحو `bourezgd.github.io`.
3. في Settings → Pages: أدخل النطاق وفعّل **Enforce HTTPS**.
4. غيّر `SITE_URL` في `scripts/build.js`، واستبدل `https://bourezgd.github.io/lynda-website/` في `index.html`.
