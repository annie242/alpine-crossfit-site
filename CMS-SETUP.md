# CMS Setup — Step-by-Step for Alpine CrossFit

**What this gets you:** A visual editor at `alpinecrossfit.com/admin/` where you log in with email + password and upload new gym photos for hero sections (homepage, about, wellness) — no need to touch files. Image swaps go live within a minute.

**Who can do this:** You (Annie). No developer needed. Total time: ~30 minutes, one-time setup.

**Why GitHub is involved:** The CMS needs a place to save edits. GitHub is free and acts as the backing store. You'll almost never touch it directly once set up — the CMS does the work for you.

---

## The current state (before setup)

Right now you're deploying by dragging the `site` folder onto Netlify. That works for getting the site live, but you can't edit content yourself — you'd have to ask me to change HTML files. The CMS setup replaces the drag-drop with an auto-deploy pipeline and unlocks the `/admin/` editor.

**Your current site keeps working throughout this setup.** Nothing goes down.

---

## Step 1 — Create a free GitHub account (5 min)

1. Go to https://github.com/signup
2. Sign up with your email, pick a username (e.g., `alpine-crossfit`), create a password
3. Verify your email
4. Skip any onboarding questions — just click through

You don't need to learn Git. You'll use a free app called **GitHub Desktop** that hides all the command-line stuff.

---

## Step 2 — Install GitHub Desktop (5 min)

1. Download from https://desktop.github.com (it's a normal Windows installer)
2. Install, open, log in with your new GitHub account

---

## Step 3 — Push the `site` folder to GitHub (5 min)

1. In GitHub Desktop: **File → New repository**
2. Name: `alpine-crossfit-site`
3. Local path: browse to `C:\Users\AnnieBrunner\Documents\Claude Practice\site` — important: pick the **`site` folder itself**, not its parent
4. Leave README, .gitignore, license as default
5. Click **Create repository**
6. On the next screen, click **Publish repository** (top right)
7. Uncheck "Keep this code private" if you want Netlify free tier to work smoothly — or leave it private (Netlify supports private repos too, just requires a GitHub connection)
8. Click **Publish repository**

Your whole `site/` folder is now on GitHub.

---

## Step 4 — Connect Netlify to GitHub (replaces drag-drop) (5 min)

1. Go to your existing Netlify site dashboard
2. **Site settings → Build & deploy → Continuous deployment → Link site to Git**
3. Pick **GitHub** as the provider
4. Authorize Netlify to access your GitHub
5. Select the `alpine-crossfit-site` repository
6. Build settings: **leave completely blank.** Branch: `main`. Publish directory: leave blank (or `/`).
7. Click **Deploy site**

From now on, **every time you push a change via GitHub Desktop OR publish a CMS post, Netlify auto-redeploys within ~60 seconds.** No more drag-drop.

---

## Step 5 — Enable Netlify Identity (this powers the CMS login) (3 min)

1. In your Netlify site: **Identity → Enable Identity**
2. Under **Registration preferences**, pick **Invite only** (so strangers can't sign up)
3. Under **External providers**, you can optionally enable Google login for convenience — otherwise you'll use email + password

---

## Step 6 — Enable Git Gateway (this lets the CMS write to GitHub) (2 min)

1. Still in **Identity** settings
2. Scroll to **Services → Git Gateway**
3. Click **Enable Git Gateway**

That's it. You don't need to configure anything — it just works.

---

## Step 7 — Invite yourself as a CMS user (2 min)

1. In **Identity → Users**, click **Invite users**
2. Enter your email address (and Megan's if she'll edit too)
3. Check your email — you'll get a Netlify invitation
4. Click the link, set a password

---

## Step 8 — Log in and try uploading an image (3 min)

1. Go to `https://your-site.netlify.app/admin/` (or your live domain once DNS is cut over)
2. Click **Login with Netlify Identity**
3. Enter the email + password from Step 7
4. You're in. Click **Image Blocks** → pick a slot (Homepage Hero, About Hero, or Wellness Hero) → upload a new photo → click **Publish**

~60 seconds later, the image is committed to GitHub, Netlify rebuilds, and the photo swaps on the live site.

---

## What to know about the CMS

### What you can do in it now

**Image Blocks** — upload new gym photos for hero sections without touching file paths:
- Go to `/admin/` → **Image Blocks**
- Pick a slot: **Homepage Hero**, **About Page Hero**, or **Wellness Page Hero**
- Upload a new photo from your phone (or computer), click Publish
- ~60 seconds later, the photo swaps on the live site
- You can replace it as many times as you want — no cap, no fiddling


### What's NOT editable through the CMS yet

The current CMS only handles image uploads (Image Blocks). To change:
- Homepage hero copy, about page story, pricing numbers, FAQ answers, coach bios, service pages — **ask me in a Claude session.** I'll edit the HTML files directly, push to GitHub, and Netlify auto-deploys in ~60 seconds. Takes about a minute per change.

If you want to expand the CMS to cover those pages too, that's a separate project — we'd rearchitect each page to pull its content from editable data files. Roughly 2–3 hours of work. Flag it when you're ready.

## If something breaks

- **Can't access /admin/** → Step 5 or 6 probably incomplete. Re-check Netlify Identity is Enabled and Git Gateway is Enabled.
- **CMS shows "error loading config.yml"** → The `admin/config.yml` file needs to be in the published directory. Confirm it's there in your GitHub repo.
- **Everything else** → Ask me in a Claude session. I can look at the repo and debug.

---

## TL;DR checklist

- [ ] GitHub account created
- [ ] GitHub Desktop installed
- [ ] `site/` folder published as a GitHub repo
- [ ] Netlify linked to GitHub (replaces drag-drop)
- [ ] Netlify Identity enabled, set to Invite-only
- [ ] Git Gateway enabled
- [ ] Invited yourself as a user
- [ ] Logged in at `/admin/`
- [ ] Uploaded a test image via the Image Blocks editor, confirmed it appeared on the site
