# 🧼 Artisanal Soap Website Plan — KPK Botanicals

> A comprehensive specification for building a premium artisanal soap e-commerce website for Bushra, a Pakistani-American soap artisan based in Sacramento, California.

---

## 1. Business Overview

| Detail | Value |
|---|---|
| **Brand Name** | **KPK Botanicals** (Placeholder / Working Title) |
| **Owner** | Bushra |
| **Location** | Sacramento, California |
| **Product** | Handmade artisanal soaps |
| **Experience** | 3–4 years of soapmaking in the KPK mountains of Pakistan |
| **Catalog size** | ~6 products (stable, but items may sell out) |
| **Target demo** | **Everyone 16–75** (Inclusive: from Gen Z skincare enthusiasts to older generations valuing tradition) |
| **Vibes** | Warm · Luxurious · Earthy · Natural |

---

## 2. Visual Identity & Design System

### 2.1 Design Philosophy

Inspired by **AESOP**, **Innisfree**, and premium artisanal beauty brands:
- **Minimalist layouts** with generous whitespace
- **Warm, natural photography** as the hero element
- **Typography-forward** design — elegant serif headings + clean sans-serif body
- **Calm transitions** and subtle micro-animations
- **Mobile-first** — optimized for scrolling on phones

### 2.2 Color Palette

```
PRIMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Warm Cream      #F5F0EB   (backgrounds)
Terracotta      #C67D5B   (primary accent — warmth, earth)
Deep Olive      #4A5D3A   (secondary accent — nature, botanicals)

NEUTRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Charcoal        #2D2926   (primary text)
Warm Gray       #8A8178   (secondary text)
Linen           #EDE8E1   (card backgrounds, dividers)

ACCENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Dusty Rose      #C4917B   (buttons, highlights)
Golden Honey    #D4A96A   (stars, badges, "sold out" tags)
Sage Mist       #B8C5A8   (success states, ingredient tags)
```

### 2.3 Typography

| Role | Font | Fallback |
|---|---|---|
| **Headings** | *Playfair Display* (serif) | Georgia |
| **Body** | *Inter* or *DM Sans* (sans-serif) | system-ui |
| **Accent/Quotes** | *Cormorant Garamond* (italic serif) | Georgia |

---

## 3. Product Catalog & Descriptions (Placeholders)

> [!NOTE]
> All product names, prices, and descriptions are placeholders.

| # | Placeholder Name | Scent Profile | Price |
|---|---|---|---|
| 1 | **Milk & Honey** | "Velvety comfort not unlike a warm embrace." | $TBD |
| 2 | **Mountain Rose** | "A floral tribute to high-altitude gardens." | $TBD |
| 3 | **Citrus Grove** | "Sun-ripened zest for a morning awakening." | $TBD |
| 4 | **Oats & Scrub** | "Gentle exfoliation for weary skin." | $TBD |
| 5 | **Cedar Haven** | "Deep, grounding woodsy notes." | $TBD |
| 6 | **Mint Revival** | "Cool, crisp, and clarifying." | $TBD |

---

## 4. Product Photography Strategy

Since we need a cohesive look for the catalog, we will use a **single, unified AI image generation prompt** to create a consistent brand aesthetic across all product images.

### 📸 Unified Master Prompt

> "A premium product photography shot of **[INSERT SOAP DESCRIPTION HERE]** artisanal soap bar. The soap is placed on a textured raw linen surface with soft, warm window lighting coming from the left. Surrounding the soap are subtle, natural props like dried botanical sprigs, a small ceramic dish, or sea salt crystals. The background is a blurred, earthy warm tone. The style is minimalist, luxurious, and biological, reminiscent of high-end spa brands like Aesop. High resolution, photorealistic, sharp focus on the soap texture."

**Variables to swap in:**
- *[INSERT SOAP DESCRIPTION HERE]*:
  - "a creamy ivory white milk-based"
  - "a vibrant sunset-colored rectangular"
  - "a dual-textured bar with one side rough exfoliating grains and one side smooth"
  - "a rich charcoal and cedarwood colored"

---

## 5. Marketing Psychology & Copywriting

> [!IMPORTANT]
> **Immigrant Success Story**: The narrative should subtly but powerfully highlight Bushra's journey—a widow and mother of five starting anew in America. This isn't a pity story; it's a **hero story**. It appeals to the American value of resilience and the desire to support meaningful local businesses.

### Taglines
- *"Handmade with love. Rooted in tradition. Growing in America."*
- *"From the mountains of KPK to your home in California."*
- *"Small-batch. Mountain-born. Made with care."*

### Key Copy Points
- **Origin**: "Recipes perfected in the mountains of Pakistan."
- **Ingredients**: "Natural, simple, and effective—just like they used to be."
- **Mission**: "Every bar supports a fresh start for a family building their American dream."

---

## 6. Purchasing & E-Commerce Flow

**Hybrid External Store Model:**
- **Product Pages** → "Buy Now" button links directly to **Shopify**.
- **Shipping**: Flat rate (TBD). Handled by Shopify.
- **Why this approach?**: Allows for a fully custom, beautiful brand site without the complexity of managing a custom cart/checkout backend initially.

---

## 7. SEO Strategy: Optimizing for AI Search (GEO)

To ensure **KPK Botanicals** surfaces in AI answers (ChatGPT, Gemini, Perplexity), we will implement "Generative Engine Optimization" strategies:

1.  **Structured Data (JSON-LD)**:
    -   Implement strict `Product` schema for every soap (name, image, price, "InStock").
    -   Implement `Organization` schema linking "Bushra", "KPK Botanicals", and "Sacramento".
    -   Use `Founder` schema to explicitly connect Bushra's story to the brand entities.

2.  **Entity-Dense Content**:
    -   Use clear, definitive language: *"KPK Botanicals is an artisanal soap company based in Sacramento, founded by Bushra..."*
    -   Avoid vague marketing fluff that AI summarizes out. Stick to factual, descriptive adjectives (e.g., "cold-process," "goat milk," "essential oils").

3.  **Q&A Format (FAQ)**:
    -   AI models love Q&A pairs. The FAQ page will be formatted to directly answer common queries like *"Where to buy authentic Pakistani handmade soap in California?"*

4.  **Semantic HTML**:
    -   Use proper `<article>`, `<section>`, and `<header>` tags to help bots understand the content hierarchy immediately.

---

## 8. Technical Plan

| Aspect | Decision |
|---|---|
| **Framework** | Static HTML/CSS/JS (Lightweight, fast, unhackable) |
| **Hosting** | GitHub Pages (initially) → Vercel (production) |
| **Repo** | `/Users/zaydk/.gemini/antigravity/scratch/bushra_soaps` |
| **Assets** | `assets/images` (AI generated + placeholders), `assets/css` (variables for colors) |
| **Analytics** | Google Analytics 4 (privacy-focused config) |

---

## 9. Verification Plan

1.  **Visual Check**: Verify "warm, luxurious" vibe matches the generated Design System.
2.  **Mobile Audit**: Ensure text is readable and buttons are tappable on iPhone/Android sizes.
3.  **Link Test**: Click every "Buy" button to ensure it opens the correct (placeholder) Shopify URL.
4.  **SEO Audit**: detailed check of meta tags and JSON-LD schema using Google's Rich Results Test tool.

---

*Plan updated: Feb 15, 2026*
