// Alpine CrossFit — image block loader
// Reads /content/images/{slot}.json and swaps any <img data-image-slot="{slot}">
// with the CMS-managed image. Falls back silently to the <img>'s existing src
// if no CMS entry exists yet.

(function () {
  const images = document.querySelectorAll("img[data-image-slot]");
  images.forEach(function (img) {
    const slot = img.getAttribute("data-image-slot");
    if (!slot) return;
    fetch("/content/images/" + slot + ".json", { cache: "no-cache" })
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (!data) return;
        if (data.image) img.src = data.image;
        if (data.alt) img.alt = data.alt;
      })
      .catch(function () {
        // Keep the fallback src on the <img> tag. Silent failure is fine.
      });
  });
})();
