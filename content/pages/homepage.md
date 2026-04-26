---
layout: layouts/homepage.njk
permalink: /
title: "Alpine CrossFit — CrossFit Gym in Wheat Ridge, CO"
description: "Locally-owned CrossFit gym in Wheat Ridge serving Lakewood, Arvada, Applewood & Golden. Coach-led classes, wellness center, 24/7 access. Free intro available."
canonical: "https://alpinecrossfit.com/"
ogTitle: "Alpine CrossFit — Wheat Ridge, CO"
ogDescription: "Locally-owned CrossFit gym in Wheat Ridge. Three CF-L2 coaches, in-house programming, 24/7 member access."
ogImage: "https://alpinecrossfit.com/assets/img/hero-alpine-wall.jpg"
ogType: "website"
loadImagesScript: true
schemaTypes: ["organization", "healthclub", "faq"]
hero:
  eyebrow: "Wheat Ridge · Lakewood · Arvada · Applewood · Golden"
  heading: "CrossFit for <span class=\"accent\">every body</span> in Wheat Ridge."
  dek: "Alpine CrossFit is a locally-owned CrossFit gym in Wheat Ridge, Colorado, serving Wheat Ridge, Lakewood, Arvada, Applewood, and Golden with coach-led classes for every experience level, a wellness center, and 24/7 member access."
  ctas:
    - { label: "Book a Free Intro", href: "/free-intro/", style: "btn-primary btn-lg" }
    - { label: "See the schedule", href: "#schedule", style: "btn-secondary btn-lg" }
  trustItems:
    - { type: "stars" }
    - { text: "5.0 from 175 Google reviews" }
    - { text: "Month-to-month" }
    - { text: "No initiation fees" }
  image:
    src: "/assets/img/hero-alpine-wall.jpg"
    alt: "Alpine CrossFit member performing a front squat in front of the Alpine mountain wall mural"
    slot: "homepage_hero"
affiliations:
  - { image: "/assets/img/badge-crossfit.png", alt: "Official CrossFit Affiliate", label: "Official<br>CrossFit Affiliate" }
  - { image: "/assets/img/badge-hyrox.png", alt: "Official HYROX Training Center", label: "Official HYROX<br>Training Center" }
whoSection:
  eyebrow: "Who Alpine is for"
  heading: "Not another big-box gym."
  intro:
    - "Most gyms in the Denver metro are built for people who already know what they're doing. Alpine is built for people who want a coach, a crew, and a workout that actually gets them somewhere — whether that's dropping a jean size, playing with their kids without getting winded, or squatting more than they did in college."
    - "We coach every class. Every workout scales to your body and your experience. And nobody trains alone."
  cards:
    - { heading: "Coach in every class", body: "You never guess at form or load." }
    - { heading: "Scaled for every body", body: "Beginner to lifelong athlete in the same room." }
    - { heading: "Real community", body: "Members from their 20s through their 70s." }
howToStart:
  eyebrow: "Getting started"
  heading: "Getting started is easy."
  steps:
    - { heading: "1. Book a free No Sweat Intro.", body: "Come meet a coach for a 30-minute chat. We'll tour the gym, talk through your goals, and figure out the right starting point together. No pressure. No cost." }
    - { heading: "2. Try a class.", body: "Once we've matched you to the right program — CrossFit, personal training, or Prime Vitality for members 55+ — we'll get you into your first coached session." }
    - { heading: "3. Start training.", body: "Sign up for the membership that fits. Show up. We'll handle the rest." }
  ctaLabel: "Book my free intro"
  ctaHref: "/free-intro/"
services:
  eyebrow: "What we offer"
  heading: "Training built around you."
  items:
    - { heading: "CrossFit", body: "Coach-led group classes. Every workout scales to your level.", link: "/crossfit/" }
    - { heading: "HYROX", body: "Official HYROX affiliate. Race-specific programming and Friday run clubs for athletes prepping for an event.", link: "/hyrox/" }
    - { heading: "Personal Training", body: "One-on-one coaching for specific goals, injury recovery, or sports performance.", link: "/personal-training/" }
    - { heading: "Wellness Center", body: "Sauna, cold plunges, compression boots, and peptide therapy — included with Unlimited.", link: "/wellness/" }
    - { heading: "Prime Vitality (55+)", body: "The most strength-and-conditioning-oriented 55+ program in Wheat Ridge. Mon/Wed/Fri at 10 AM.", link: "/prime-vitality/" }
    - { heading: "Beginners", body: "New to CrossFit? Our Foundations on-ramp teaches the movements before you join classes.", link: "/beginners/" }
pricing:
  eyebrow: "Pricing"
  heading: "Membership pricing — no sales call required."
  intro: "We publish our pricing because you shouldn't need a sales call to decide if a gym fits your budget. Memberships range from $69 to $999 per month, all month-to-month with no contracts or initiation fees."
  tiers:
    - { heading: "Open Gym", price: "$69", unit: "/month", featured: false, ctaLabel: "Start Free Intro", ctaHref: "/free-intro/", features: ["Facility access", "Wellness center", "24/7 facility access", { text: "CrossFit classes", muted: true }, { text: "Personal training", muted: true }] }
    - { heading: "Unlimited", price: "$199", unit: "/month", featured: true, ctaLabel: "Start Free Intro", ctaHref: "/free-intro/", features: ["Unlimited CrossFit classes", "Prime Vitality (55+)", "Wellness center", "24/7 facility access", { text: "Personal training", muted: true }] }
    - { heading: "Personal Training", price: "$999", unit: "/month", featured: false, ctaLabel: "Start Free Intro", ctaHref: "/free-intro/", features: ["12 PT sessions/month", "Individualized programming", "Unlimited CrossFit classes", "Wellness center", "24/7 facility access"] }
  moreLink: { label: "See full pricing details →", href: "/pricing/" }
reviews:
  eyebrow: "Member voices"
  heading: "Why locals choose Alpine."
  testimonials:
    - { stars: 5, quote: "I have never been in such a supportive fitness environment! Everyone has been so welcoming and helpful to me as someone totally new to CrossFit.", attribution: "Monica G. · New to CrossFit" }
    - { stars: 5, quote: "I've been to three different CrossFit gyms and this is by far the best. Every coach is welcoming, helpful, and has improved my performance.", attribution: "Jarrod M. · Experienced CrossFitter" }
    - { stars: 5, quote: "My wife and I dropped in to Alpine CrossFit today and had a great time… one of the best gyms we've been to. Super clean, Lisa was a fantastic coach.", attribution: "Brady S. · Drop-in visitor" }
  stats:
    - { value: "5.0★", label: "From 175 Google reviews" }
    - { value: "15", label: "Max athletes per class" }
    - { value: "5", label: "CF-L2 certified professionals" }
    - { value: "2010", label: "Founded" }
scheduleSection:
  eyebrow: "When we train"
  heading: "Ten-plus classes a day, seven days a week."
  blocks:
    - { heading: "CrossFit", lines: ["<strong>Mon–Fri:</strong> 5:30, 6:30, 8:00 AM · 12:00, 3:30, 4:30, 5:30 PM", "<strong>Saturday:</strong> 8:00, 9:00 AM", "<strong>Sunday:</strong> 9:00 AM"] }
    - { heading: "Prime Vitality (55+)", lines: ["<strong>Mon · Wed · Fri:</strong> 10:00 AM"] }
    - { heading: "Wellness Center", lines: ["<strong>Mon–Fri:</strong> 5:30 AM – 6:30 PM", "<strong>Sat:</strong> 8:00 – 10:00 AM · <strong>Sun:</strong> 8:00 – 9:00 AM"] }
  note: "Unlimited members also have 24/7 facility access."
  moreLink: { label: "See the full schedule →", href: "/schedule/" }
  locationCard:
    heading: "Visit us in Wheat Ridge"
    rows:
      - { label: "Address", value: "12090 W 50th Pl<br>Wheat Ridge, CO 80033" }
      - { label: "Phone", value: "<a href=\"tel:+17209641505\">(720) 964-1505</a>" }
      - { label: "Parking", value: "Free on-site" }
    ctaLabel: "Book a free intro"
    ctaHref: "/free-intro/"
faqs:
  - { question: "Do I need to be in shape before I start?", answer: "No. Most new Alpine members start from scratch or come back after years away. Every class scales to your body. Your coach will never throw you into something you can't handle." }
  - { question: "How much does a CrossFit membership cost?", answer: "Memberships at Alpine range from $69/month (Open Gym: facility, wellness, 24/7) to $199/month (Unlimited: classes, wellness center, Prime Vitality, and 24/7 access). <a href=\"/pricing/\">See full pricing →</a>" }
  - { question: "What is a No Sweat Intro?", answer: "A free 30-minute meeting with a coach. You'll tour the gym, talk through your goals, and we'll recommend the best starting point. No pressure, no cost." }
  - { question: "Is there a contract?", answer: "No. All memberships are month-to-month. Cancel with 30 days written notice." }
  - { question: "Where are you located?", answer: "12090 West 50th Place, Wheat Ridge, CO 80033. About 5 minutes from Applewood and Arvada, 10 from Lakewood, and 12 from Golden." }
faqMoreLink: "/faq/"
finalCta:
  heading: "Come see the gym."
  body: "The fastest way to figure out if Alpine is right for you is to meet a coach in person. It's free, it's 30 minutes, and there's no pressure to join."
  ctas:
    - { label: "Book my free No Sweat Intro", href: "/free-intro/", inlineStyle: "background:#000;color:#fff;" }
    - { label: "Or text (720) 964-1505", href: "sms:+17209641505", inlineStyle: "background:transparent;color:#000;border-color:#000;" }
---
