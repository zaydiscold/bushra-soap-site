# Dew — by Bushra

Handcrafted artisanal soaps, brought with love from the KPK mountains to Sacramento, CA.

**Live site:** [zaydiscold.github.io/bushra-soap-site](https://zaydiscold.github.io/bushra-soap-site/)

## Stack
- Static HTML/CSS/JS (no framework)
- Hosted on GitHub Pages
- Designed for future **Shopify** integration (product containers include `data-product-id`, `data-product-price`, `data-product-available` attributes)

## Pages
| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, brand intro (split layout), featured products, USPs |
| Shop | `shop.html` | Full product grid with promo banner |
| Product | `product.html` | Dynamic detail page with scent notes, schema.org markup |
| About | `about.html` | Brand story with KPK mountain hero image |
| Contact | `contact.html` | Contact form, wholesale inquiries (min 10 units) |
| FAQ | `faq.html` | Accordion FAQ with FAQ schema markup |

## Pricing (TBD)
- **$8 per bar** (provisional — confirm before launch)
- **Free shipping** on orders of 3+ bars
- **Flat-rate shipping**: $5.95
- Bulk/wholesale discounts available (contact for pricing)

## SEO Status

> **⚠️ TODO: Make SEO more pointed once domain & social handles are finalized.**

### Currently implemented:
- ✅ JSON-LD structured data on every page (Organization, LocalBusiness, Product, FAQPage, CollectionPage, WebSite, OfferShippingDetails)
- ✅ Full product catalog in `OfferCatalog` schema for AI shopping (Google Gemini, Bing Copilot)
- ✅ Meta descriptions on all pages
- ✅ Semantic HTML5 throughout
- ✅ FAQ schema for Google rich snippets

### Needs attention:
- [ ] **Custom domain** — Update all schema.org URLs from GitHub Pages to final domain
- [ ] **Instagram handle** — Currently placeholder (`@dewbybushra`), update when created
- [ ] **Email** — Currently placeholder (`hello@dewbybushra.com`), update when set up
- [ ] **Open Graph / Twitter cards** — Add `og:image`, `og:title`, `twitter:card` tags once product photos are finalized
- [ ] **Google Search Console** — Submit sitemap after domain is live
- [ ] **Google Merchant Center** — Submit product feed for Google Shopping
- [ ] **robots.txt & sitemap.xml** — Create once domain is confirmed

## Shopify Integration Notes
Product detail page (`product.html`) already includes:
- `data-product-id` on the product container
- `data-product-price` and `data-product-available` attributes
- `data-action="add-to-cart"` on the buy button
- Schema.org `Product` + `Offer` markup with real prices

When migrating to Shopify, replace the JS-rendered product detail with Shopify Liquid templates. The CSS classes and layout structure are designed to be portable.
