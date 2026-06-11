// Directory data for content/blog/.
//
// Permalink is computed in JS so date-prefixed filenames (the auto-publisher's
// daily posts, e.g. 2026-06-09-practice-makes-permanent.md) keep their date
// in the URL — guaranteeing unique URLs even when the topic slug repeats.
// Hand-written posts without a date prefix (e.g. independence-day-250-workout.md)
// keep clean URLs unchanged.

export default {
  layout: "layouts/post.njk",
  ogType: "article",
  eleventyComputed: {
    permalink: (data) => {
      const stem = data.page.filePathStem.split("/").pop();
      return `/blog/${stem}/`;
    },
  },
};
