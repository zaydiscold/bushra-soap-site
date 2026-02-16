/*
 * Dew — by Bushra - Product Data & Rendering
 */

const products = [
    {
        id: 'milk-honey',
        name: 'Milk & Honey',
        price: 'TBD',
        description: 'A creamy, velvety lather with notes of warm wildflower honey.',
        longDescription: 'Rich with raw wildflower honey and whole goat milk, this bar creates a dense, velvety lather that cushions the skin. The scent is quiet and comforting—warm milk, soft vanilla, and a hint of sun-warmed honeycomb.',
        scentNotes: { top: 'Wildflower Honey', middle: 'Warm Milk', base: 'Vanilla Bean' },
        ingredients: 'Saponified oils (olive, coconut, shea butter), goat milk, raw honey, vitamin E',
        weight: '4.5 oz',
        image: 'assets/images/soap_milk_honey_1771215109864.png',
        soldOut: false
    },
    {
        id: 'mountain-rose',
        name: 'Mountain Rose',
        price: 'TBD',
        description: 'Earthy floral notes with a soft, clay-infused cleanse.',
        longDescription: 'Inspired by the wild roses that cling to the hillsides of Khyber Pakhtunkhwa. Rose clay provides a gentle, mineral-rich cleanse, while the scent captures the whole plant—petals, stem, and earth.',
        scentNotes: { top: 'Damask Rose', middle: 'Geranium Leaf', base: 'Soft Earth' },
        ingredients: 'Saponified oils (olive, coconut, shea butter), rose clay, rose absolute, dried rose petals',
        weight: '4.5 oz',
        image: 'assets/images/soap_mountain_rose_1771215125152.png',
        soldOut: false
    },
    {
        id: 'citrus-grove',
        name: 'Citrus Grove',
        price: 'TBD',
        description: 'Bright, sun-drenched zest to awaken the senses.',
        longDescription: 'Captures the sharp, clean bite of a broken citrus peel. A blend of sweet orange and grapefruit essential oils cuts through the morning fog, leaving skin feeling bright, taut, and refreshed.',
        scentNotes: { top: 'Ruby Grapefruit', middle: 'Sweet Orange', base: 'Green Peel' },
        ingredients: 'Saponified oils (olive, coconut, shea butter), orange peel powder, citrus essential oil blend, turmeric',
        weight: '4.5 oz',
        image: 'assets/images/soap_citrus_grove_1771215140126.png',
        soldOut: false
    },
    {
        id: 'oats-scrub',
        name: 'Oats & Scrub',
        price: 'TBD',
        description: 'Dual-texture exfoliation with the comfort of warm oats.',
        longDescription: 'Two distinct experiences in one bar. One side is packed with ground oats and brown sugar for a vigorous scrub; the other is smooth and creamy. The scent is wholesome and grounded—oat milk and toasted almond.',
        scentNotes: { top: 'Brown Sugar', middle: 'Steamed Oats', base: 'Toasted Almond' },
        ingredients: 'Saponified oils (olive, coconut, shea butter), colloidal oatmeal, brown sugar, sweet almond oil',
        weight: '5 oz',
        image: 'assets/images/soap_oats_scrub_1771215172868.png',
        soldOut: false
    },
    {
        id: 'cedar-haven',
        name: 'Cedar Haven',
        price: 'TBD',
        description: 'Deep, resinous woods and activated charcoal.',
        longDescription: 'The scent of a high-altitude forest after rain. Activated charcoal draws out impurities, while cedarwood and vetiver create a deep, resinous aroma that lingers close to the skin. Grounding and meditative.',
        scentNotes: { top: 'Fresh Bergamot', middle: 'Atlas Cedar', base: 'Vetiver Root' },
        ingredients: 'Saponified oils (olive, coconut, shea butter), activated charcoal, cedarwood essential oil, bentonite clay',
        weight: '4.5 oz',
        image: 'assets/images/soap_cedar_haven_1771215186080.png',
        soldOut: false
    },
    {
        id: 'mint-revival',
        name: 'Mint Revival',
        price: 'TBD',
        description: 'A cooling shock of peppermint and French green clay.',
        longDescription: 'An invigorating cold plunge for the skin. High levels of peppermint and eucalyptus oil create an immediate cooling sensation, while French green clay absorbs excess oil. Ideal for hot days or tired muscles.',
        scentNotes: { top: 'Icy Peppermint', middle: 'Eucalyptus Leaf', base: 'Clean Clay' },
        ingredients: 'Saponified oils (olive, coconut, shea butter), French green clay, peppermint essential oil, eucalyptus essential oil',
        weight: '4.5 oz',
        image: 'assets/images/soap_mint_revival_1771215206420.png',
        soldOut: false
    }
];

/* ── Render Helpers ── */

function createProductCard(product) {
    return `
        <a href="product.html?id=${product.id}" class="card product-card">
            ${product.soldOut ? '<span class="sold-out-badge">Sold Out</span>' : ''}
            <img src="${product.image}" alt="${product.name}, handmade artisanal soap" class="product-card-img" loading="lazy">
            <div class="product-info">
                <h3 class="heading-sm">${product.name}</h3>
                <p class="product-description">${product.description}</p>
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
