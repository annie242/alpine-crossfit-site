# How to deploy this site to Netlify

This folder is a complete static website. Follow the steps below to get it live on the web — **no developer needed**.

---

## Step 1: Preview it locally (optional, 1 minute)

You can open any `index.html` file in your browser to preview it on your computer before deploying. The live Claude preview panel does this already.

---

## Step 2: Create a free Netlify account

1. Go to **https://app.netlify.com/signup**
2. Sign up with Google, GitHub, or email (free tier is fine — no card required)

---

## Step 3: Deploy (30 seconds)

1. Once logged in, look for the drag-and-drop area on the Netlify dashboard that says **"Drag and drop your site folder here"** (sometimes labeled "Want to deploy a new site without connecting to Git? Drag and drop your site output folder here")
2. Open the `site/` folder on your computer (the folder this `DEPLOY.md` is inside)
3. Drag the **entire `site` folder** onto that Netlify area
4. Netlify uploads and deploys in ~30 seconds
5. You'll get a preview URL like `alpine-crossfit-a1b2c3.netlify.app` — the site is live

**Take your time here.** Browse every page, click every button, test on your phone. This preview URL doesn't affect `alpinecrossfit.com` at all.

---

## Step 4: Rename the Netlify subdomain (optional)

1. In Netlify, go to **Site settings → Domain management → Options → Edit site name**
2. Change it to something like `alpine-crossfit-preview` so the URL becomes `alpine-crossfit-preview.netlify.app`
3. Easier to share with Megan, coaches, friends for feedback

---

## Step 5: Paste in the Big Little Gyms form embed

Your current Big Little Gyms platform provides an embed snippet for the "Get Started" form. You need to add it to these pages:

- `/free-intro/index.html` — look for the clearly-marked comment: `<!-- BIG LITTLE GYMS FORM EMBED GOES HERE -->`
- Anywhere else you want the popup to trigger (all CTAs currently link to `/free-intro/`)

**To get the embed:**
1. Log into your Big Little Gyms / Rise account
2. Find the embed code or iframe for your "Get Started" / No Sweat Intro form
3. Paste it into the HTML files where marked

Not sure where to find it? Email Big Little Gyms support — they'll send it in an hour.

After you update the HTML, drag the `site` folder onto Netlify again to redeploy.

---

## Step 6: Point your domain at Netlify (only when you're ready to go live)

**Your current site stays up** until you complete this step. Nothing is at risk.

1. In Netlify: **Site settings → Domain management → Add custom domain → `alpinecrossfit.com`**
2. Netlify will give you DNS records to set
3. Log into your domain registrar (wherever you bought the domain — GoDaddy, Namecheap, Google Domains, etc.)
4. Update two DNS records per Netlify's instructions (usually an A record and a CNAME)
5. Wait 1–24 hours for DNS to propagate worldwide
6. Netlify auto-provisions a free SSL certificate
7. **Done.** `alpinecrossfit.com` now loads the new site.

---

## Step 7: Set up redirects (at cutover)

After DNS cutover, if you had any specific old URLs on Big Little Gyms that should forward somewhere, edit the `_redirects` file in this folder and redeploy. I've left placeholder examples in there.

---

## Things to finish before you go live

These are not blockers for the preview URL, but fix before the DNS cutover:

1. **Paste in the Big Little Gyms form embed** (Step 5)
2. **Add real hero images** — currently there are no images in the HTML. Drop photos into `site/assets/img/` and reference them in `index.html`. Best: 1 hero shot on the homepage, coach headshots when you get to those pages.
3. **Fix any broken nav links** — pages like `/crossfit/`, `/schedule/`, `/faq/`, `/coaches/`, `/gym/*`, `/personal-training/`, `/wellness/`, `/prime-vitality/`, `/beginners/` all 404 right now because we haven't built those pages yet. Claude will build them in a follow-up session.
4. **Proof the copy.** Any phrasing that doesn't sound like you, flag it — we'll fix.
5. **Submit sitemap to Google** after cutover: Google Search Console → Sitemaps → submit `https://alpinecrossfit.com/sitemap.xml`

---

## What's live right now (5 pages)

- `/` — Homepage
- `/about/` — About / origin story / 3-coach teaser
- `/pricing/` — Full pricing page with 3-tier comparison
- `/visit/` — Location, hours, first-visit walkthrough
- `/free-intro/` — Ad landing page for the No Sweat Intro funnel

All other pages (coaches, service pages, service-area pages, schedule, FAQ) will be built in the next session based on the markdown specs already done.

---

## If anything breaks

- **Site won't deploy**: Netlify shows errors in the deploy log. Usually a path issue. Share the error.
- **Fonts look weird**: Google Fonts blocked on your network? Rare. We can swap to system fonts.
- **Form doesn't submit**: Verify the Big Little Gyms embed was pasted correctly.
- **DNS cutover takes too long**: Normal to wait up to 24 hours. Test from `https://dnschecker.org` if concerned.

Everything else — ask Claude in the next session.
