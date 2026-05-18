// Eleventy build configuration for Alpine CrossFit.
//
// Content lives in /content as markdown files. Templates and partials
// live in /_includes. Everything renders to /_site, which Netlify serves.
//
// Three content collections feed into Decap CMS:
//   - content/pages/   -> generic pages (homepage, about, pricing, etc.)
//   - content/coaches/ -> individual coach bio pages
//   - content/areas/   -> service-area pages (Wheat Ridge, Arvada, etc.)

export default function (eleventyConfig) {
  // ----- Files / dirs to ignore (replaces .eleventyignore) -----
  // Doing this in code (instead of a dotfile) is more robust on Windows,
  // where File Explorer hides files that start with "." by default.
  const originalPages = [
    "index.html",
    "intro-standalone.html",
    "about/index.html",
    "beginners/index.html",
    "coaches/index.html",
    "coaches/annie-brunner/index.html",
    "coaches/dean-weeks/index.html",
    "coaches/lisa-arcangel/index.html",
    "coaches/liz-kushner/index.html",
    "coaches/megan-markee/index.html",
    "crossfit/index.html",
    "faq/index.html",
    "free-intro/index.html",
    "gym/applewood/index.html",
    "gym/arvada/index.html",
    "gym/golden/index.html",
    "gym/lakewood/index.html",
    "gym/wheat-ridge/index.html",
    "hyrox/index.html",
    "intro/index.html",
    "personal-training/index.html",
    "pricing/index.html",
    "prime-vitality/index.html",
    "schedule/index.html",
    "visit/index.html",
    "wellness/index.html",
  ];
  for (const p of originalPages) eleventyConfig.ignores.add(p);
  eleventyConfig.ignores.add("sitemap.xml");
  eleventyConfig.ignores.add("CMS-SETUP.md");
  eleventyConfig.ignores.add("DEPLOY.md");
  eleventyConfig.ignores.add("_backup/**");
  eleventyConfig.ignores.add("README.md");

  // ----- Passthrough copy: assets and CMS files served as-is -----
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({ "_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "robots.txt": "robots.txt" });
  // Image-block JSON files (existing CMS pattern for hero swaps)
  eleventyConfig.addPassthroughCopy("content/images");

  // ----- Collections -----
  eleventyConfig.addCollection("coaches", (api) =>
    api
      .getFilteredByGlob("content/coaches/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  eleventyConfig.addCollection("areas", (api) =>
    api
      .getFilteredByGlob("content/areas/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  eleventyConfig.addCollection("pages", (api) =>
    api.getFilteredByGlob("content/pages/*.md")
  );

  // Blog posts, newest first. Shared layout/permalink live in
  // content/blog/blog.json so a post file only needs title/description/date.
  eleventyConfig.addCollection("blog", (api) =>
    api
      .getFilteredByGlob("content/blog/*.md")
      .sort((a, b) => b.date - a.date)
  );

  // All published URLs (for the auto-generated sitemap)
  eleventyConfig.addCollection("sitemapEntries", (api) => {
    const all = api.getAll();
    return all
      .filter((item) => {
        if (item.data.eleventyExcludeFromCollections) return false;
        if (item.data.sitemap === false) return false;
        if (!item.url || !item.url.endsWith("/")) {
          if (item.url && !item.url.endsWith(".html")) return false;
        }
        return Boolean(item.url);
      })
      .sort((a, b) => (a.data.sitemapOrder || 99) - (b.data.sitemapOrder || 99));
  });

  // ----- Filters used in templates -----
  eleventyConfig.addFilter("absoluteUrl", (url, base) => {
    const baseUrl = base || "https://alpinecrossfit.com";
    if (!url) return baseUrl;
    if (url.startsWith("http")) return url;
    return baseUrl.replace(/\/$/, "") + url;
  });

  eleventyConfig.addFilter("isoDate", (value) => {
    const d = value ? new Date(value) : new Date();
    return d.toISOString().slice(0, 10);
  });

  // Human-readable date for blog posts, e.g. "May 18, 2026". UTC avoids an
  // off-by-one day when front-matter dates parse as midnight UTC.
  eleventyConfig.addFilter("readableDate", (value) => {
    const d = value ? new Date(value) : new Date();
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  eleventyConfig.addFilter("jsonStringify", (value) => JSON.stringify(value));

  // Custom Nunjucks "split" filter — used by coach.njk to derive a
  // first name from the full name. Some Nunjucks builds don't ship it.
  eleventyConfig.addFilter("split", (value, sep) => String(value).split(sep));

  // ----- Directory layout -----
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
