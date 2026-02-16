/*
 * Dew — by Bushra - Product Data & Rendering
 */

const products = [
    {
        id: 'milk-honey',
        name: 'Milk & Honey',
        price: 'TBD',
        description: 'Deeply moisturizing, creamy lather that leaves skin soft.',
        longDescription: 'Our Milk & Honey bar combines the nourishing richness of goat milk with raw wildflower honey. The result is a deeply moisturizing lather that leaves skin soft and supple. A gentle, sweet fragrance lingers on the skin.',
        scentNotes: { top: 'Wildflower Honey', middle: 'Warm Milk', base: 'Vanilla' },
        ingredients: 'Saponified oils (olive, coconut, shea butter), goat milk, raw honey, vitamin E',
        weight: '4.5 oz',
        image: 'assets/images/soap_milk_honey_1771215109864.png',
        soldOut: false
    },
    {
        id: 'mountain-rose',
        name: 'Mountain Rose',
        price: 'TBD',
        description: 'A floral tribute to high-altitude gardens.',
        longDescription: 'Inspired by the wild roses of Pakistan\'s mountain valleys, this bar captures the romance of a garden at elevation. Rose clay gives it a natural blush tone while rose essential oil delivers a classic, timeless scent.',
        scentNotes: { top: 'Rose Petals', middle: 'Geranium', base: 'Sandalwood' },
        ingredients: 'Saponified oils (olive, coconut, shea butter), rose clay, rose essential oil, dried rose petals',
        weight: '4.5 oz',
        image: 'assets/images/soap_mountain_rose_1771215125152.png',
        soldOut: false
    },
    {
        id: 'citrus-grove',
        name: 'Citrus Grove',
        price: 'TBD',
        description: 'Bright citrus notes to start your day.',
        longDescription: 'Wake up to the bright, energizing burst of citrus. This bar blends sweet orange, lemon, and grapefruit essential oils into a sunshine-colored bar that invigorates the senses and cleanses deeply without stripping moisture.',
        scentNotes: { top: 'Grapefruit', middle: 'Sweet Orange', base: 'Lemon Verbena' },
        ingredients: 'Saponified oils (olive, coconut, shea butter), orange peel powder, citrus essential oil blend, turmeric (color)',
        weight: '4.5 oz',
        image: 'assets/images/soap_citrus_grove_1771215140126.png',
        soldOut: false
    },
    {
        id: 'oats-scrub',
        name: 'Oats & Scrub',
        price: 'TBD',
        description: 'Gentle exfoliation for weary skin.',
        longDescription: 'Our signature dual-texture bar features one side embedded with finely ground oats and brown sugar for gentle exfoliation, while the other side is smooth and creamy for a soothing finish. The perfect balance of scrub and silk.',
        scentNotes: { top: 'Brown Sugar', middle: 'Oat Milk', base: 'Warm Almond' },
        ingredients: 'Saponified oils (olive, coconut, shea butter), colloidal oatmeal, brown sugar, sweet almond oil',
        weight: '5 oz',
        image: 'assets/images/soap_oats_scrub_1771215172868.png',
        soldOut: false
    },
    {
        id: 'cedar-haven',
        name: 'Cedar Haven',
        price: 'TBD',
        description: 'Deep, grounding woodsy notes.',
        longDescription: 'Grounding and masculine yet universally loved, Cedar Haven channels the dense cedar forests of the highlands. Activated charcoal draws out impurities while cedarwood essential oil calms the mind.',
        scentNotes: { top: 'Bergamot', middle: 'Cedarwood', base: 'Vetiver' },
        ingredients: 'Saponified oils (olive, coconut, shea butter), activated charcoal, cedarwood essential oil, bentonite clay',
        weight: '4.5 oz',
        image: 'assets/images/soap_cedar_haven_1771215186080.png',
        soldOut: false
    },
    {
        id: 'mint-revival',
        name: 'Mint Revival',
        price: 'TBD',
        description: 'Cool, crisp, and clarifying.',
        longDescription: 'A refreshing, cooling bar that wakes up the skin. Peppermint and eucalyptus essential oils deliver a tingling clean feeling, while French green clay gently purifies. Perfect for a post-workout refresh or a hot summer day.',
        scentNotes: { top: 'Peppermint', middle: 'Eucalyptus', base: 'Tea Tree' },
        ingredients: 'Saponified oils (olive, coconut, shea butter), French green clay, peppermint essential oil, eucalyptus essential oil',
        weight: '4.5 oz',
        image: 'assets/images/soap_mint_revival_1771215206420.png',
        soldOut: false
    }
];

/* ── Render Helpers ── */

function createProductCard(product) {
    return `
        <a href="product.html?id=${product.id}" class="card product-card" style="text-decoration:none; position:relative;">
            ${product.soldOut ? '<span class="sold-out-badge">Sold Out</span>' : ''}
            <img src="${product.image}" alt="${product.name}, handmade artisanal soap" class="product-card-img" loading="lazy">
            <div class="product-info">
                <h3 class="heading-sm">${product.name}</h3>
                <p style="color: var(--color-gray); font-size: 0.85rem; margin: 0.4rem 0;">${product.description}</p>
                <p class="product-price">${product.price}</p>
            </div>
        </a>
    `;
}

function renderFeaturedProducts(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = products.slice(0, 3).map(createProductCard).join('');
}

function renderAllProducts(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = products.map(createProductCard).join('');
}

function getProductById(id) {
    return products.find(p => p.id === id) || null;
}
