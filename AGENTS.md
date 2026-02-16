# Dew — by Bushra · Agent Context

> Canonical context file for AI coding assistants.
> `CLAUDE.md` and `GEMINI.md` are symlinks to this file.

## Project

Static website for a woman-owned, small-batch artisanal soap company. Founder **Bushra** brought traditional soapmaking from the **KPK mountains (Pakistan)** to **Sacramento, CA**, raising four children.

- **Stack**: Pure HTML/CSS/JS. No framework, no npm, no build step.
- **Hosting**: GitHub Pages from `master` branch.
- **Future**: Designed for Shopify migration — product containers have `data-product-id`, `data-product-price`, `data-product-available` attributes.

## Structure

```
index.html          # Homepage: hero, brand intro (split layout), featured products, USPs
shop.html           # Product grid + promo banner
product.html        # Dynamic detail page (?id=product-id)
about.html          # Brand story + KPK mountain hero
contact.html        # Contact form + wholesale inquiries (min 10 units)
faq.html            # Accordion FAQ with schema markup
assets/css/styles.css   # ALL styles: design tokens + components + utilities
assets/js/products.js   # Product data array + rendering functions
assets/js/scripts.js    # Navbar scroll + utilities
assets/images/          # Product imgs, hero, favicon, logo
README.md               # SEO TODO checklist + Shopify migration notes
```

## Commands

```bash
# Deploy (auto-deploys via GitHub Pages)
git add -A && git commit -m "message" && git push origin master

# Local preview
python3 -m http.server 8081
```

## Design System

See `:root` in `assets/css/styles.css` for the full token set. Key values:

| Token | Value | Note |
|-------|-------|------|
| `--color-paper` | `#FAF9F6` | Page background |
| `--color-charcoal` | `#1C1C1C` | Text color |
| `--color-terracotta` | `#C67D5B` | Accent / links |
| `--color-olive` | `#4A5D3A` | Secondary accent |
| `--font-heading` | Playfair Display | Headings |
| `--font-body` | Inter | Body text |
| `--font-accent` | Cormorant Garamond | Labels, italics |

Spacing uses `clamp()` for fluid responsiveness. Design inspired by **Aesop** and **Innisfree**: generous whitespace, light font weights, editorial typography, subtle animations only.

## Product Data

Products live in `assets/js/products.js` as an array of objects. Each has: `id`, `name`, `price`, `description`, `longDescription`, `scentNotes`, `ingredients`, `weight`, `image`, `soldOut`.

**Current pricing**: $8/bar (provisional). Free shipping on 3+ bars. $5.95 flat rate otherwise.

When adding/removing products or changing prices, also update the `OfferCatalog` JSON-LD in `index.html`.

## Brand Voice

- **Warm and personal** — like a farmer's market conversation, not a corporate pitch
- **Sensory copywriting** — describe texture, scent, and feeling. Not just ingredients
- **Target audience**: Women 30–65+, Etsy/Facebook shoppers, vegan/natural buyers
- **Never use**: "leverage", "optimize", "synergy", "elevate your", "Whether you're X or Y", "Not just X — it's Y"

## Rules

### Do
- Put all styles in `styles.css` or page-level `<style>` blocks
- Use CSS custom properties from the design system
- Update JSON-LD structured data when product data changes
- Test layouts at mobile widths first (target audience uses phones)
- Write copy that sounds human, not AI-generated
- Keep the mountain+lavender illustration as the favicon

### Don't
- Add inline `style=` attributes
- Introduce npm, node_modules, or build tools
- Rename image files (referenced by exact filename across pages)
- Use bright/neon colors — stay within the earthy palette
- Add heavy JS libraries or animations — keep it lightweight
- Change `data-product-*` attributes on product containers (Shopify integration points)

## SEO

Every page has JSON-LD structured data. Homepage has: Organization+LocalBusiness, OfferCatalog, WebSite, OfferShippingDetails. Product pages inject Product+Offer schema dynamically. FAQ page has FAQPage schema.

**Placeholder items** (see `README.md`): domain, email, Instagram handle, WhatsApp, Open Graph images, robots.txt, sitemap.xml.
