# Alpine CrossFit Website — 2026 Ownership Handoff

**From:** Annie Brunner
**To:** April & Tori DiGiannantonio
**Scope of this doc:** the website (alpinecrossfit.com) only. Programming evaluator + chat assistant will be handed off in a follow-up.

---

## What you're inheriting

The website is a static site built with [Eleventy](https://11ty.dev), hosted on [Netlify](https://netlify.com), with a lightweight in-browser CMS ([Decap](https://decapcms.org)) for content edits at `/admin/`. Every push to the `main` branch of the GitHub repo triggers Netlify to rebuild and republish, live in ~30 seconds.

Two editing paths:

- **Decap CMS** (browser, no install) — for day-to-day content: blog posts, coach bios, hero copy, class descriptions. Anyone with a Netlify Identity account can edit here.
- **Claude Code** (local install) — for structural changes, layout tweaks, design updates. Needs git + a local repo clone + Claude Code installed.

Both paths eventually push commits to the same GitHub repo; you pick whichever fits the task.

---

## Transfer sequence

Do these in order. Some steps depend on the one before it.

### 1. Domain — DONE ✓
Annie has already transferred ownership of `alpinecrossfit.com` at the registrar. DNS records still point to Netlify. No action here unless the Netlify site moves in step 3 below.

### 2. GitHub repo transfer

**Annie does:**
1. Get April's GitHub username (she may need to create one first at github.com/signup — free)
2. Go to https://github.com/annie242/alpine-crossfit-site/settings
3. Scroll all the way down to **Danger Zone** → **Transfer ownership**
4. Enter April's GitHub username, type the repo name to confirm, click Transfer

**April does:**
1. Check email — GitHub sends a transfer confirmation
2. Accept the transfer

Result: repo URL becomes `https://github.com/{april's-username}/alpine-crossfit-site`. All commit history, branches, issues, and settings come with it.

### 3. Netlify site — recommend "fresh site" over "team transfer"

The cleanest path (avoids Netlify's site-transfer support tickets):

**April creates a fresh Netlify site from the newly-transferred repo:**
1. April signs up at netlify.com/signup (free — she can sign in with her GitHub account, easier)
2. From the Netlify dashboard: **Add new site** → **Import an existing project** → GitHub → pick `alpine-crossfit-site`
3. Netlify auto-detects the Eleventy build (netlify.toml is in the repo). Click **Deploy**
4. Wait for the build. It'll go live at a URL like `alpine-crossfit-[random].netlify.app`
5. Test that URL — should look exactly like alpinecrossfit.com

**April adds the custom domain:**
6. Site → **Domain management** → **Add a domain** → `alpinecrossfit.com`
7. Netlify tells her what DNS records to set. She goes to the domain registrar and updates them (or if the domain is already on Netlify DNS, it's automatic).

**Annie deletes her old Netlify site** (once April's site is verified live):
8. Annie signs in to Netlify, finds the old site, Site settings → **Delete this site**.

Result: alpinecrossfit.com now points at April's Netlify. Annie is fully out.

### 4. Netlify Identity users (Decap CMS access)

The CMS editor at `/admin/` uses Netlify Identity for login. Existing users (Annie, Megan, Lisa if she stays) don't automatically transfer.

**April does:**
1. On the new Netlify site → **Integrations** → **Identity** → Enable
2. **Identity settings** → Registration preferences → **Invite only** (recommended — don't let strangers sign up)
3. **Identity** → **Invite users** → enter emails for everyone who should edit content (April, Tori, Megan, Lisa, whoever)
4. Each person gets an email link, clicks it, sets a password, is in

**Also:** enable Git Gateway (this is what lets Decap CMS commit to the repo):
5. **Identity** → **Services** → **Git Gateway** → Enable → authorize with GitHub

### 5. What's staying with Annie (for now)

Not part of this handoff — will be a follow-up:
- **Programming evaluator** — the Apps Script that emails Annie every Thursday with the upcoming week's programming review
- **Chat assistant** — the web app at `script.google.com/...` where coaches can ask questions about programming
- **Anthropic API key** — funds both above
- **Programming Google Sheets** (both of them) — currently owned by Annie's Google account

---

## April's local setup (for Claude Code path)

Only needed if she wants to use Claude Code for structural edits. Skip these if she only uses Decap CMS.

### Install
- [ ] **Git for Windows** — https://git-scm.com/download/win — accept all defaults during install
- [ ] Set git identity in Git Bash: `git config --global user.name "April DiGiannantonio"` and `git config --global user.email "april@..."`
- [ ] **Claude Code** — https://claude.com/code — install for Windows, sign in with her Anthropic account (create one at console.anthropic.com if she doesn't have one; costs a few dollars a month depending on usage)
- [ ] Any text editor she likes (Notepad works; VS Code is free and better)

### Clone the repo
Open Git Bash or PowerShell:
```bash
cd Documents
git clone https://github.com/[april's-username]/alpine-crossfit-site.git
cd alpine-crossfit-site
```

### Verify it works — make a tiny test edit
1. Open the folder in Claude Code
2. Ask Claude to change one word (e.g. "in the FAQ, change 'Yes.' to 'Absolutely.' for one question")
3. Watch Claude edit the file, commit, push
4. Netlify rebuilds within 30 seconds
5. Reload the site in an incognito window — the change is live
6. Revert the tiny test edit the same way

If all that works, she's set up.

---

## The daily workflow, in plain English

### Editing a blog post, a coach bio, class times, or homepage copy
→ **Use Decap CMS.** Go to `alpinecrossfit.com/admin/`, log in, click the collection, edit, save. Publishes automatically.

### Adding a new page type, changing the color scheme, editing the header/footer, redesigning a section
→ **Use Claude Code** (or ask someone with dev knowledge). Describe the change in plain English, Claude edits the code, commits, pushes.

### Publishing new photos
→ **Decap CMS** has an image uploader inside relevant fields.

### Something breaks and the site 404s or looks wrong
→ Netlify Dashboard → **Deploys** → find the last green "Published" deploy before the broken one → click **Publish deploy** to roll back. Then figure out what broke.

---

## Known issues + gotchas

### CSS updates don't show up for returning visitors
The `netlify.toml` caches `/assets/*` (including styles.css) as `immutable` for one year. When we change the CSS, returning visitors keep seeing the OLD version until they clear browser cache or open in incognito.

**Fix pending** — either drop `immutable` from the cache header or add filename hashing (would need an Eleventy plugin). For now, when you change CSS, tell anyone testing to open in an incognito window.

### The blog auto-publisher sometimes creates duplicates
There's an external automation ("Manus") that publishes daily stoic-themed blog posts. It occasionally generates two posts with the same title on different dates. When both hit the same URL slug, Eleventy's build fails with `DuplicatePermalinkOutputError`.

**Fix:** for each duplicate, add an explicit permalink to the newer post's front matter:
```yaml
permalink: "/blog/[slug]-YYYY-MM-DD/"
```
This session fixed 16 existing collisions on 2026-08-19 (see commit `e850366`). Long-term: whoever runs Manus should add slug-collision detection before publishing.

### Git shows CRLF warnings on Windows
Harmless. Git is normalizing line endings between Windows (CRLF) and the repo standard (LF). Just ignore.

### The stale `Documents/Claude Practice/site` folder
On Annie's laptop, there's a second folder at `C:\Users\AnnieBrunner\Documents\Claude Practice\site` that is NOT a git repo — it's an old snapshot. Do not use it. All work goes through `Documents/alpine-crossfit-site-repo`. April won't have this issue on her machine — she'll clone fresh.

---

## Rollback / emergency

If a deploy breaks the site:
1. Netlify → Deploys → find a green "Published" deploy from before the break
2. Click **Publish deploy** → live site rolls back to that version instantly
3. Then investigate the broken deploy's build log

If the repo becomes tangled:
1. `git log --oneline -30` shows recent history
2. `git revert [commit-hash]` safely undoes a specific commit
3. Ask Claude Code to help

---

## Who to ask

- **Right now:** Annie (annie@alpinecrossfit.com)
- **Docs:** [Netlify](https://docs.netlify.com), [Decap CMS](https://decapcms.org/docs/), [Eleventy](https://11ty.dev/docs/)
- **Claude Code** can walk through most of this interactively if April describes the problem in plain English

---

_Last updated: 2026-08-19 by Annie + Claude Code_
