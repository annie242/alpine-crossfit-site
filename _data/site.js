// Site-wide data accessible in every template as `site.*`.
// Anything Lisa shouldn't have to know about (URLs, schema constants,
// nav structure, etc.) lives here, NOT in editable content files.

export default {
  name: "Alpine CrossFit",
  url: "https://alpinecrossfit.com",
  tagline: "CrossFit gym in Wheat Ridge, CO",

  // Contact / location — used in footer, schema.org, and headers
  address: {
    street: "12090 West 50th Place",
    city: "Wheat Ridge",
    region: "CO",
    postalCode: "80033",
    country: "US",
  },
  geo: { latitude: "39.788365", longitude: "-105.135648" },
  phone: "+1-720-964-1505",
  phoneDisplay: "(720) 964-1505",
  phoneSms: "+17209641505",
  founded: "2010",
  ownershipSince: "2016",

  // Social
  instagram: "https://www.instagram.com/alpine_fitness_co/",

  // Reviews — surfaced in schema and on homepage
  rating: { value: "5.0", count: "180" },

  // Hours, used by schedule schema
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:30",
      closes: "18:30",
    },
    { days: ["Saturday", "Sunday"], opens: "08:00", closes: "10:00" },
  ],

  serviceAreas: ["Wheat Ridge", "Lakewood", "Arvada", "Applewood", "Golden"],

  // Primary nav (top of every page)
  primaryNav: [
    { label: "About", url: "/about/" },
    { label: "Pricing", url: "/pricing/" },
    { label: "Blog", url: "/blog/" },
    { label: "Visit", url: "/visit/" },
  ],

  // Footer columns (locked layout — content edits should not change this)
  footerColumns: {
    train: [
      { label: "CrossFit", url: "/crossfit/" },
      { label: "HYROX", url: "/hyrox/" },
      { label: "Personal Training", url: "/personal-training/" },
      { label: "Wellness Center", url: "/wellness/" },
      { label: "Prime Vitality", url: "/prime-vitality/" },
      { label: "Beginners", url: "/beginners/" },
    ],
    info: [
      { label: "About", url: "/about/" },
      { label: "Coaches", url: "/coaches/" },
      { label: "Pricing", url: "/pricing/" },
      { label: "Schedule", url: "/schedule/" },
      { label: "Blog", url: "/blog/" },
      { label: "FAQ", url: "/faq/" },
    ],
    areas: [
      { label: "Wheat Ridge", url: "/gym/wheat-ridge/" },
      { label: "Arvada", url: "/gym/arvada/" },
      { label: "Lakewood", url: "/gym/lakewood/" },
      { label: "Applewood", url: "/gym/applewood/" },
      { label: "Golden", url: "/gym/golden/" },
    ],
  },
};
