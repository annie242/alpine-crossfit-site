// Eleventy build configuration for Alpine CrossFit.
//
// Content lives in /content as markdown files. Templates and partials
// live in /_includes. Everything renders to /_site, which Netlify serves.
//
// Three content collections feed into Decap CMS:
//   - content/pages/   → generic pages (homepage, about, pricing, etc.)
//   - content/coaches/ → individual coach bio pages
//   - content/areas/   → service-area pages (Wheat Ridge, Arvada, etc.)

export default function (eleventyConfig) {
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

  // All published URLs (for the auto-generated sitemap)
  eleventyConfig.addCollection("sitemapEntries", (api) => {
    const all = api.getAll();
    return all
      .filter((item) => {
        if (item.data.eleventyExcludeFromCollections) return false;
        if (item.data.sitemap === false) return false;
        // Only HTML output
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

  eleventyConfig.addFilter("jsonStringify", (value) => JSON.stringify(value));

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
