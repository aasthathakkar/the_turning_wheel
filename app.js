document.addEventListener('DOMContentLoaded', async () => {
    // ... your other initializers
    initCart();
    
    // Initialize Vercel Analytics here
    inject(); 
});
/* ════════════════════════════════════════════════════
   THE TURNING WHEEL — Application Logic
   Premium Imported Crockery & Kitchenware Catalog
   ════════════════════════════════════════════════════ */
// ── Product Data (from verified catalog) ──
const PRODUCTS = [
  {
    no: 101,
    section: "Bowls & Sets",
    category: "bowls",
    title: "Ceramic Bohemia-inspired Japanese Colourful Printed Bowls | Set of 4 (Gift Boxed)",
    platform: "Amazon",
    listPrice: 799,
    ourPrice: 479,
    imageCount: 4,
  },
  {
    no: 102,
    section: "Bowls & Sets",
    category: "bowls",
    title: "Ceramic Bohemia-inspired Japanese Colourful Printed Bowls | Set of 4 (Premium Gift Pack)",
    platform: "Amazon",
    listPrice: 789,
    ourPrice: 479,
    imageCount: 4,
  },
  {
    no: 103,
    section: "Bowls & Sets",
    category: "bowls",
    title: "Printed Ceramic Bowl Set with Lids | Multipurpose Food Storage & Serving Bowls | Microwave & Dishwasher Safe (Set of 3, Multisize)",
    platform: "Amazon",
    listPrice: 489,
    ourPrice: 389,
    imageCount: 5,
  },
  {
    no: 104,
    section: "Mugs Collection",
    category: "mugs",
    title: "Cute 3D Panda Coffee Mug with Lid and Glass Straw — Ceramic Kawaii Panda Cup with Handle",
    platform: "Amazon",
    listPrice: 599,
    ourPrice: 399,
    imageCount: 4,
  },
  {
    no: 105,
    section: "Mugs Collection",
    category: "mugs",
    title: "3D Astronaut Ceramic Mug with Lid and Spoon | Planet Coffee Mug (400ml, Blue)",
    platform: "Amazon",
    listPrice: 599,
    ourPrice: 399,
    imageCount: 3,
  },
  {
    no: 106,
    section: "Serveware",
    category: "serveware",
    title: "Ceramic Casserole Dish with Lid | Oven Safe, Heat Resistant Cookware",
    platform: "Amazon",
    listPrice: 500,
    ourPrice: 450,
    imageCount: 4,
  },
  {
    no: 107,
    section: "Serveware",
    category: "serveware",
    title: "Mandala Ceramic Snack Plates (Blue & Yellow) | Square Dessert Plates with Handle (8.6 Inch)",
    platform: "Nestasia",
    listPrice: 490,
    ourPriceNote: "₹399 (1 piece) / ₹699 (2 piece)",
    ourPriceSingle: 399,
    imageCount: 3,
  },
  {
    no: 108,
    section: "Serveware",
    category: "serveware",
    title: "Ceramic Serving Platter with Handles | Blue Mandala Print (10.8 Inch)",
    platform: "Amazon",
    listPrice: 645,
    ourPrice: 449,
    imageCount: 4,
  },
  {
    no: 109,
    section: "Serveware",
    category: "serveware",
    title: "Serving Platter with Built-in Dip | Snack Sushi Appetizer Tray for Momos & Nachos (Pack of 2)",
    platform: "Amazon",
    listPrice: 620,
    ourPrice: 449,
    imageCount: 5,
  },
  {
    no: 110,
    section: "Serveware",
    category: "serveware",
    title: "Mandala Melange Ceramic Serving Platter | Square Shape",
    platform: "Nestasia",
    listPrice: 790,
    ourPrice: 499,
    imageCount: 3,
  },
  {
    no: 111,
    section: "Serveware",
    category: "serveware",
    title: "Nitori Shell Serving Plate with Built-in Dip Holder | Snack Sushi Appetizer Tray",
    platform: "Amazon",
    listPrice: 620,
    ourPrice: 449,
    imageCount: 4,
  },
  {
    no: 112,
    section: "Serveware",
    category: "serveware",
    title: "Ceramic Snack Bowl with Handle | White & Blue | Microwave & Dishwasher Safe",
    platform: "Amazon",
    listPrice: 699,
    ourPrice: 399,
    imageCount: 3,
  },
  {
    no: 113,
    section: "Statement Pieces",
    category: "statement",
    title: "Oval Metal Tray with Wooden Handle | Gold (13 x 8 Inch)",
    platform: "Nestasia",
    listPrice: 1590,
    ourPrice: 649,
    imageCount: 3,
  },
  {
    no: 114,
    section: "Statement Pieces",
    category: "statement",
    title: "Ceramic Serving Platter | 4 Small Leaf-Shaped Plates with 1 Wooden Tray (Blue & White)",
    platform: "Amazon",
    listPrice: 1750,
    ourPrice: 999,
    imageCount: 5,
  },
  {
    no: 115,
    section: "Baby Range",
    category: "baby",
    title: "Crab Silicone Suction Plate with Spoon and Fork Set | BPA-Free | 6+ Months",
    platform: "Amazon",
    listPrice: 649,
    ourPrice: 339,
    imageCount: 4,
  },
  {
    no: 116,
    section: "Baby Range",
    category: "baby",
    title: "7-in-1 Silicone Baby Feeding Set | BPA-Free, Microwave Safe | Suction Plate, Bowl, Spoon, Fork, Cup & Bib",
    platform: "Amazon",
    listPrice: 825,
    ourPrice: 549,
    imageCount: 5,
  },
  {
    no: 117,
    section: "Baby Range",
    category: "baby",
    title: "Silicone Baby Bib with Food Catcher | Adjustable Neck, BPA-Free (6 Months–5 Years)",
    platform: "Amazon",
    listPrice: 221,
    ourPrice: 189,
    imageCount: 3,
  },
];
// ── Category colors for placeholder backgrounds ──
const CATEGORY_COLORS = {
  bowls: { bg1: '#e8ddd0', bg2: '#f0e8dc', accent: '#b8906e' },
  mugs: { bg1: '#d4dce8', bg2: '#e2e8f0', accent: '#6b85a8' },
  serveware: { bg1: '#dce8e0', bg2: '#e8f0ec', accent: '#6e9a7e' },
  statement: { bg1: '#e8e0d0', bg2: '#f0e8d8', accent: '#a89060' },
  baby: { bg1: '#e8d8e4', bg2: '#f0e4ec', accent: '#a07090' },
};
// ── Render product card HTML ──
function renderProductCard(product) {
  const saveBase = product.ourPrice || product.ourPriceSingle;
  const savePercent = saveBase
    ? Math.round((1 - saveBase / product.listPrice) * 100)
    : null;
  const colors = CATEGORY_COLORS[product.category];
  // Generate carousel slides
  let slides = '';
  for (let i = 0; i < product.imageCount; i++) {
    slides += `
      <div class="carousel-slide" style="background: repeating-linear-gradient(45deg, ${colors.bg1}, ${colors.bg1} 12px, ${colors.bg2} 12px, ${colors.bg2} 24px);">
        <img src="images/${product.no}/${i + 1}.jpg" alt="${product.title} — photo ${i + 1}" class="product-photo" loading="lazy"
             onload="this.closest('.carousel-slide').classList.add('has-photo')"
             onerror="this.style.display='none'">
        <button class="photo-zoom-btn" type="button" aria-label="View full image" data-product-no="${product.no}" data-index="${i}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path><path d="M11 8v6"></path><path d="M8 11h6"></path></svg>
        </button>
        <span class="slide-indicator">${i + 1} / ${product.imageCount}</span>
        <div class="placeholder-label">Product ${product.no} — Image ${i + 1}</div>
        <div class="placeholder-sub">Drag your product photo here</div>
      </div>`;
  }
  // Generate dots
  let dots = '';
  for (let i = 0; i < product.imageCount; i++) {
    dots += `<div class="carousel-dot${i === 0 ? ' active' : ''}"></div>`;
  }
  // Price HTML
  let priceHtml;
  if (product.ourPriceNote) {
    priceHtml = `
      <div class="price-our">
        <span class="price-our-label">Our Price</span>
        <span class="price-our-amount multi-price">${product.ourPriceNote}</span>
      </div>${savePercent ? `
      <span class="save-tag">SAVE ${savePercent}%</span>` : ''}`;
  } else {
    priceHtml = `
      <div class="price-our">
        <span class="price-our-label">Our Price</span>
        <span class="price-our-amount">₹${product.ourPrice}</span>
      </div>
      <span class="save-tag">SAVE ${savePercent}%</span>`;
  }
  return `
    <article class="product-card" data-category="${product.category}" data-product="${product.no}" id="product-${product.no}">
      <div class="card-carousel">
        <span class="product-number-badge">#${product.no}</span>
        <div class="carousel-track" data-product-no="${product.no}">
          ${slides}
        </div>
        <button class="carousel-nav prev" type="button" aria-label="Previous image" data-dir="-1">‹</button>
        <button class="carousel-nav next" type="button" aria-label="Next image" data-dir="1">›</button>
        <div class="carousel-dots">
          ${dots}
        </div>
        <div class="swipe-hint">
          <span>Swipe</span>
          <span class="swipe-hint-arrow">→</span>
        </div>
      </div>
      <div class="card-details">
        <div class="card-category">${product.section}</div>
        <h3 class="card-title">${product.title}</h3>
        <div class="price-card">
          <div class="price-platform">
            <span class="price-platform-name">${product.platform}</span>
            <span class="price-platform-amount">₹${product.listPrice}</span>
          </div>
          ${priceHtml}
        </div>
        <div class="card-actions">
          <div class="cart-control" data-product-no="${product.no}">
            <button class="add-to-cart-btn" type="button" data-product-no="${product.no}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              Add to Cart
            </button>
            <div class="qty-stepper cart-stepper" data-product-no="${product.no}">
              <button class="qty-btn minus" type="button" aria-label="Decrease quantity">−</button>
              <span class="qty-value">1</span>
              <button class="qty-btn plus" type="button" aria-label="Increase quantity">+</button>
            </div>
          </div>
        </div>
      </div>
    </article>`;
}
// ── Render modal HTML ──
function renderModal(product) {
  const saveBase = product.ourPrice || product.ourPriceSingle;
  const savePercent = saveBase
    ? Math.round((1 - saveBase / product.listPrice) * 100)
    : null;
  const colors = CATEGORY_COLORS[product.category];
  let slides = '';
  for (let i = 0; i < product.imageCount; i++) {
    slides += `
      <div class="carousel-slide" style="background: repeating-linear-gradient(45deg, ${colors.bg1}, ${colors.bg1} 14px, ${colors.bg2} 14px, ${colors.bg2} 28px);">
        <img src="images/${product.no}/${i + 1}.jpg" alt="${product.title} — photo ${i + 1}" class="product-photo" loading="lazy"
             onload="this.closest('.carousel-slide').classList.add('has-photo')"
             onerror="this.style.display='none'">
        <button class="photo-zoom-btn" type="button" aria-label="View full image" data-product-no="${product.no}" data-index="${i}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path><path d="M11 8v6"></path><path d="M8 11h6"></path></svg>
        </button>
        <span class="slide-indicator">${i + 1} / ${product.imageCount}</span>
        <div class="placeholder-label">Product ${product.no} — Image ${i + 1}</div>
        <div class="placeholder-sub">High resolution product photo</div>
      </div>`;
  }
  let dots = '';
  for (let i = 0; i < product.imageCount; i++) {
    dots += `<div class="carousel-dot${i === 0 ? ' active' : ''}"></div>`;
  }
  let priceHtml;
  if (product.ourPriceNote) {
    priceHtml = `
      <div class="price-our">
        <span class="price-our-label">Our Price</span>
        <span class="price-our-amount multi-price">${product.ourPriceNote}</span>
      </div>${savePercent ? `
      <span class="save-tag">SAVE ${savePercent}%</span>` : ''}`;
  } else {
    priceHtml = `
      <div class="price-our">
        <span class="price-our-label">Our Price</span>
        <span class="price-our-amount">₹${product.ourPrice}</span>
      </div>
      <span class="save-tag">SAVE ${savePercent}%</span>`;
  }
  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in product #${product.no} — ${product.title}. Please share availability and details.`
  );
  return `
    <div class="modal-carousel">
      <div class="carousel-track" data-product-no="modal-${product.no}">
        ${slides}
      </div>
      <button class="carousel-nav prev" type="button" aria-label="Previous image" data-dir="-1">‹</button>
      <button class="carousel-nav next" type="button" aria-label="Next image" data-dir="1">›</button>
      <div class="carousel-dots">
        ${dots}
      </div>
    </div>
    <div class="modal-product-number">#${product.no} — ${product.section}</div>
    <h2 class="modal-product-title">${product.title}</h2>
    <div class="modal-price-card price-card">
      <div class="price-platform">
        <span class="price-platform-name">${product.platform} Price</span>
        <span class="price-platform-amount">₹${product.listPrice}</span>
      </div>
      ${priceHtml}
    </div>
    <div class="modal-actions">
      <div class="cart-control" data-product-no="${product.no}">
        <button class="add-to-cart-btn" type="button" data-product-no="${product.no}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          Add to Cart
        </button>
        <div class="qty-stepper cart-stepper" data-product-no="${product.no}">
          <button class="qty-btn minus" type="button" aria-label="Decrease quantity">−</button>
          <span class="qty-value">1</span>
          <button class="qty-btn plus" type="button" aria-label="Increase quantity">+</button>
        </div>
      </div>
    </div>
    <a href="https://wa.me/916351789012?text=${whatsappMsg}" target="_blank" rel="noopener" class="modal-whatsapp-btn">
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Quick Order (this item only)
    </a>`;
}
// ── Auto-detect photo count per product ──
// Instead of a fixed imageCount you'd have to edit in code, we check how many
// numbered photos actually exist for each product (images/<no>/1.jpg, 2.jpg, ...)
// and use that instead. Add or remove as many photos as you want, in any
// product's folder — just keep them numbered sequentially with no gaps — and
// the carousel picks up the new count automatically, no code changes needed.
// MAX_PHOTOS_PER_PRODUCT is just a safety ceiling on how high it will check.
const MAX_PHOTOS_PER_PRODUCT = 20;

function probeImageExists(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

async function detectPhotoCount(productNo) {
  let count = 0;
  for (let i = 1; i <= MAX_PHOTOS_PER_PRODUCT; i++) {
    // eslint-disable-next-line no-await-in-loop
    const exists = await probeImageExists(`images/${productNo}/${i}.jpg`);
    if (!exists) break;
    count = i;
  }
  return count;
}

async function detectAllPhotoCounts() {
  await Promise.all(
    PRODUCTS.map(async (product) => {
      const detected = await detectPhotoCount(product.no);
      // If real photos were found, use that exact count.
      // If none were found yet, keep the original placeholder count so the
      // card still shows a helpful "drag your photo here" preview.
      if (detected > 0) product.imageCount = detected;
    })
  );
}
// ── Initialize Products Grid ──
function initProductsGrid() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = PRODUCTS.map(renderProductCard).join('');
}
// ── Carousel Logic with Touch/Swipe ──
// NOTE: this used to always query the *entire document* for '.carousel-track'
// and re-run on every modal open, which re-attached a fresh set of listeners
// on top of the old ones for every product card carousel already on the page.
// After opening the modal a few times, each nav/dot click fired multiple times,
// making the arrows feel unresponsive or jump multiple slides. Fix: accept a
// scope (defaults to the whole document, but the modal passes just itself),
// and skip any track that's already been initialized.
function initCarousels(scope = document) {
  scope.querySelectorAll('.carousel-track').forEach((track) => {
    if (track.dataset.carouselBound === 'true') return;
    track.dataset.carouselBound = 'true';
    const parent = track.closest('.card-carousel, .modal-carousel');
    if (!parent) return;
    const slides = track.querySelectorAll('.carousel-slide');
    const dots = parent.querySelectorAll('.carousel-dot');
    const prevBtn = parent.querySelector('.carousel-nav.prev');
    const nextBtn = parent.querySelector('.carousel-nav.next');
    const swipeHint = parent.querySelector('.swipe-hint');
    const totalSlides = slides.length;
    let currentSlide = 0;
    // Update dots
    function updateDots(index) {
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }
    // Scroll to slide
    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentSlide = index;
      const slideWidth = track.clientWidth;
      track.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth',
      });
      updateDots(index);
      // Hide swipe hint after first interaction
      if (swipeHint) swipeHint.classList.add('hidden');
    }
    // Arrow buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(currentSlide - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(currentSlide + 1);
      });
    }
    // Dot clicks
    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(i);
      });
    });
    // Scroll snap detection — update dots on scroll end
    let scrollTimeout;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const slideWidth = track.clientWidth;
        const newIndex = Math.round(track.scrollLeft / slideWidth);
        if (newIndex !== currentSlide && newIndex >= 0 && newIndex < totalSlides) {
          currentSlide = newIndex;
          updateDots(currentSlide);
          if (swipeHint) swipeHint.classList.add('hidden');
        }
      }, 80);
    });
    // Touch swipe support (for non-scroll-snap fallback & better feel)
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isSwiping = false;
    }, { passive: true });
    track.addEventListener('touchmove', (e) => {
      const dx = Math.abs(e.touches[0].clientX - touchStartX);
      const dy = Math.abs(e.touches[0].clientY - touchStartY);
      if (dx > dy && dx > 10) {
        isSwiping = true;
      }
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
      if (!isSwiping) return;
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          goToSlide(currentSlide + 1);
        } else {
          goToSlide(currentSlide - 1);
        }
      }
    }, { passive: true });
    // Mouse drag support for desktop
    let mouseDown = false;
    let mouseStartX = 0;
    let mouseStartScrollLeft = 0;
    track.addEventListener('mousedown', (e) => {
      mouseDown = true;
      mouseStartX = e.pageX;
      mouseStartScrollLeft = track.scrollLeft;
      track.style.cursor = 'grabbing';
      e.preventDefault();
    });
    track.addEventListener('mousemove', (e) => {
      if (!mouseDown) return;
      const dx = e.pageX - mouseStartX;
      track.scrollLeft = mouseStartScrollLeft - dx;
    });
    track.addEventListener('mouseup', (e) => {
      if (!mouseDown) return;
      mouseDown = false;
      track.style.cursor = '';
      const dx = e.pageX - mouseStartX;
      if (Math.abs(dx) > 40) {
        if (dx < 0) goToSlide(currentSlide + 1);
        else goToSlide(currentSlide - 1);
      } else {
        goToSlide(currentSlide); // snap back
      }
    });
    track.addEventListener('mouseleave', () => {
      if (mouseDown) {
        mouseDown = false;
        track.style.cursor = '';
        goToSlide(currentSlide);
      }
    });
  });
}
// ── Category Filters ──
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-card');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      // Update active button
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      // Filter cards
      cards.forEach((card) => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = '';
          // Re-trigger animation
          card.classList.remove('visible');
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              card.classList.add('visible');
            });
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
// ── Product Modal ──
function initModal() {
  const modal = document.getElementById('productModal');
  const modalBody = document.getElementById('modalBody');
  const closeBtn = document.getElementById('modalClose');
  // Open modal on card click
  document.getElementById('productsGrid').addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;
    // Don't open modal if clicking carousel nav, dots, the zoom button, or the cart controls
    if (e.target.closest('.carousel-nav') || e.target.closest('.carousel-dot') || e.target.closest('.photo-zoom-btn') || e.target.closest('.card-actions')) return;
    const productNo = parseInt(card.dataset.product);
    const product = PRODUCTS.find((p) => p.no === productNo);
    if (!product) return;
    modalBody.innerHTML = renderModal(product);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Init modal carousel only (fresh markup each time, so no bound flag yet)
    requestAnimationFrame(() => initCarousels(modalBody));
    // Fresh markup starts in "Add to Cart" state — reflect the real cart qty if any
    syncCartControls();
  });
  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    // If the lightbox is open on top of the modal, Escape should close only
    // the lightbox (handled in initLightbox) — not the modal underneath it.
    if (document.getElementById('lightboxOverlay').classList.contains('active')) return;
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
// ── Image Lightbox ──
// Full-screen viewer for product photos. Card and modal photos are shown
// cropped to fill their frames (object-fit: cover), so this is where the
// complete, uncropped image can be inspected: scroll or pinch to zoom,
// drag to pan, double-click / double-tap to toggle zoom, and arrow keys,
// buttons, or a swipe to move between a product's photos.
function initLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  const stage = document.getElementById('lightboxStage');
  const img = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const counter = document.getElementById('lightboxCounter');
  const productModal = document.getElementById('productModal');
  const cartOverlay = document.getElementById('cartOverlay');

  const MAX_SCALE = 5;
  let photos = [];
  let index = 0;
  let scale = 1;
  let tx = 0;
  let ty = 0;

  function applyTransform() {
    img.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
    img.classList.toggle('zoomed', scale > 1.001);
  }
  // Keep the (zoomed) image from being dragged fully out of view
  function clampPan() {
    const maxTx = Math.max(0, (img.offsetWidth * scale - stage.clientWidth) / 2);
    const maxTy = Math.max(0, (img.offsetHeight * scale - stage.clientHeight) / 2);
    tx = Math.min(maxTx, Math.max(-maxTx, tx));
    ty = Math.min(maxTy, Math.max(-maxTy, ty));
  }
  function resetZoom() {
    scale = 1;
    tx = 0;
    ty = 0;
    applyTransform();
  }
  // Zoom towards a specific screen point (cursor, tap, or pinch midpoint)
  // so the spot the person is looking at stays put while the image scales.
  function zoomAt(clientX, clientY, targetScale) {
    const rect = stage.getBoundingClientRect();
    const next = Math.min(MAX_SCALE, Math.max(1, targetScale));
    const vx = clientX - (rect.left + rect.width / 2) - tx;
    const vy = clientY - (rect.top + rect.height / 2) - ty;
    tx += vx * (1 - next / scale);
    ty += vy * (1 - next / scale);
    scale = next;
    if (scale <= 1.001) {
      tx = 0;
      ty = 0;
    }
    clampPan();
    applyTransform();
  }
  function showPhoto(i) {
    index = (i + photos.length) % photos.length;
    img.src = photos[index];
    resetZoom();
    counter.textContent = `${index + 1} / ${photos.length}`;
    const single = photos.length <= 1;
    prevBtn.hidden = single;
    nextBtn.hidden = single;
    counter.hidden = single;
  }
  function openLightbox(productNo, photoIndex) {
    const product = PRODUCTS.find((p) => p.no === Number(productNo));
    if (!product) return;
    photos = Array.from({ length: product.imageCount }, (_, n) => `images/${product.no}/${n + 1}.jpg`);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    showPhoto(photoIndex || 0);
  }
  function closeLightbox() {
    overlay.classList.remove('active');
    // The lightbox can sit on top of the product modal (or the cart) — if one
    // of those is still open underneath, the page scroll stays locked for it.
    const stillLocked =
      productModal.classList.contains('active') || cartOverlay.classList.contains('active');
    document.body.style.overflow = stillLocked ? 'hidden' : '';
  }

  // Open from the zoom button on any slide (product cards + modal)…
  document.addEventListener('click', (e) => {
    const zoomBtn = e.target.closest('.photo-zoom-btn');
    if (zoomBtn) {
      openLightbox(zoomBtn.dataset.productNo, parseInt(zoomBtn.dataset.index, 10) || 0);
      return;
    }
    // …or by tapping the big photo itself inside the product modal
    const modalPhoto = e.target.closest('.modal-carousel .product-photo');
    if (modalPhoto) {
      const slide = modalPhoto.closest('.carousel-slide');
      const track = slide.parentElement;
      const idx = Array.prototype.indexOf.call(track.children, slide);
      const productNo = String(track.dataset.productNo || '').replace('modal-', '');
      openLightbox(productNo, Math.max(0, idx));
    }
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => showPhoto(index - 1));
  nextBtn.addEventListener('click', () => showPhoto(index + 1));

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') showPhoto(index - 1);
    else if (e.key === 'ArrowRight') showPhoto(index + 1);
  });

  // Scroll wheel / trackpad zoom, anchored at the cursor
  stage.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.18 : 1 / 1.18;
      zoomAt(e.clientX, e.clientY, scale * factor);
    },
    { passive: false }
  );

  // Double-click (mouse) toggles zoom; double-tap (touch) is handled below.
  let lastTouchToggle = 0;
  img.addEventListener('dblclick', (e) => {
    e.preventDefault();
    if (Date.now() - lastTouchToggle < 500) return; // already handled as a double-tap
    zoomAt(e.clientX, e.clientY, scale > 1.001 ? 1 : 2.5);
  });

  // Pointer handling: one finger drags to pan (zoomed) or swipes between
  // photos (not zoomed); two fingers pinch-zoom and pan together.
  const pointers = new Map();
  let pinchStartDist = 0;
  let pinchStartScale = 1;
  let lastMid = null;
  let panStart = null;
  let movedSincePress = false;
  let lastTap = 0;

  function pointerDist() {
    const [a, b] = [...pointers.values()];
    return Math.hypot(a.x - b.x, a.y - b.y);
  }
  function pointerMid() {
    const [a, b] = [...pointers.values()];
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  }

  stage.addEventListener('pointerdown', (e) => {
    stage.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, startX: e.clientX, startY: e.clientY });
    movedSincePress = false;
    img.classList.add('dragging'); // no transition while a finger is down — keeps pan/pinch crisp
    if (pointers.size === 1) {
      panStart = { x: e.clientX, y: e.clientY, tx, ty };
    } else if (pointers.size === 2) {
      pinchStartDist = pointerDist();
      pinchStartScale = scale;
      lastMid = pointerMid();
      panStart = null;
    }
  });

  stage.addEventListener('pointermove', (e) => {
    const p = pointers.get(e.pointerId);
    if (!p) return;
    p.x = e.clientX;
    p.y = e.clientY;
    if (Math.hypot(e.clientX - p.startX, e.clientY - p.startY) > 8) movedSincePress = true;

    if (pointers.size === 2 && pinchStartDist > 0) {
      const mid = pointerMid();
      if (lastMid) {
        tx += mid.x - lastMid.x;
        ty += mid.y - lastMid.y;
      }
      zoomAt(mid.x, mid.y, pinchStartScale * (pointerDist() / pinchStartDist));
      lastMid = mid;
    } else if (pointers.size === 1 && panStart && scale > 1.001) {
      tx = panStart.tx + (e.clientX - panStart.x);
      ty = panStart.ty + (e.clientY - panStart.y);
      clampPan();
      applyTransform();
    }
  });

  function endPointer(e) {
    const p = pointers.get(e.pointerId);
    pointers.delete(e.pointerId);
    if (pointers.size === 0) {
      img.classList.remove('dragging');
      if (p && scale <= 1.001) {
        const dx = e.clientX - p.startX;
        const dy = e.clientY - p.startY;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5 && photos.length > 1) {
          // horizontal swipe between photos when not zoomed in
          showPhoto(index + (dx < 0 ? 1 : -1));
        } else if (e.pointerType === 'touch' && !movedSincePress) {
          // double-tap toggles zoom on touch devices
          const now = Date.now();
          if (now - lastTap < 320) {
            lastTouchToggle = now;
            zoomAt(e.clientX, e.clientY, scale > 1.001 ? 1 : 2.5);
            lastTap = 0;
          } else {
            lastTap = now;
          }
        }
      }
      panStart = null;
      pinchStartDist = 0;
      lastMid = null;
    } else if (pointers.size === 1) {
      // pinch ended with one finger still down — restart the pan from here
      const rem = [...pointers.values()][0];
      panStart = { x: rem.x, y: rem.y, tx, ty };
      pinchStartDist = 0;
      lastMid = null;
    }
  }
  stage.addEventListener('pointerup', endPointer);
  stage.addEventListener('pointercancel', endPointer);

  // Click on the dark backdrop closes — but not if that click was really the
  // end of a pan/swipe gesture that happened to release over the backdrop.
  overlay.addEventListener('click', (e) => {
    if (movedSincePress) {
      movedSincePress = false;
      return;
    }
    if (e.target === overlay || e.target === stage) closeLightbox();
  });
}
// ── Navigation ──
function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    nav.classList.toggle('scrolled', scrollY > 50);
    lastScroll = scrollY;
  }, { passive: true });
  // Mobile toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });
  // Close on link click
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
    });
  });
}
// ── Hero Particles ──
function initParticles() {
  const container = document.getElementById('heroParticles');
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'hero-particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.animationDuration = `${6 + Math.random() * 6}s`;
    particle.style.width = `${2 + Math.random() * 3}px`;
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}
// ── Hero Counter Animation ──
function initCounters() {
  const counters = document.querySelectorAll('.hero-stat-number');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          let current = 0;
          const increment = target / 40;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = Math.round(current);
          }, 30);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => observer.observe(c));
}
// ── Scroll Reveal Animations ──
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.why-card, .product-card').forEach((el) => {
    observer.observe(el);
  });
}
// ── Category Nav Links (Bowls, Mugs, Serveware, Statement, Baby) ──
// These links point to "#bowls", "#mugs" etc, but the catalog is a single
// filterable grid — there's no element with those ids, so clicking them used
// to do nothing at all. Instead: scroll to the catalog and apply the matching
// category filter, reusing the existing filter button logic.
function initCategoryNavLinks() {
  document.querySelectorAll('.nav-links a[data-section]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const section = link.dataset.section;
      if (section === 'catalog') return; // real #catalog element exists, smooth scroll handles it
      e.preventDefault();
      const filterBtn = document.querySelector(`.filter-btn[data-filter="${section}"]`);
      if (filterBtn) filterBtn.click();
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
// ── Smooth scroll for anchor links ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    if (anchor.classList.contains('js-open-cart')) return; // opens the cart drawer instead — wired in initCart()
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
// ── Shopping Cart ──
// Since this is a frontend-only site with no backend, the "cart" just lives
// in localStorage on the customer's device. Checkout doesn't charge anything —
// it builds a pre-filled WhatsApp message (product numbers, titles, quantities,
// estimated total, and the customer's name/phone) so the seller can confirm
// the order manually, instead of the customer messaging once per product.
const CART_STORAGE_KEY = 'ttw_cart_v1';
const CUSTOMER_STORAGE_KEY = 'ttw_customer_v1';
const ORDER_WHATSAPP_NUMBER = '916351789012';
let cart = {}; // { productNo: quantity }

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    cart = raw ? JSON.parse(raw) : {};
  } catch (e) {
    cart = {};
  }
}
function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    /* localStorage unavailable — cart just won't persist across reloads */
  }
}
function loadCustomer() {
  try {
    const raw = localStorage.getItem(CUSTOMER_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}
function saveCustomer(data) {
  try {
    localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    /* ignore */
  }
}
function cartCount() {
  return Object.values(cart).reduce((sum, q) => sum + q, 0);
}
function addToCart(productNo, qty) {
  cart[productNo] = (cart[productNo] || 0) + qty;
  saveCart();
  refreshCartUI();
}
function updateCartQty(productNo, qty) {
  if (qty <= 0) delete cart[productNo];
  else cart[productNo] = qty;
  saveCart();
  refreshCartUI();
}
function removeFromCart(productNo) {
  delete cart[productNo];
  saveCart();
  refreshCartUI();
}
function computeCartTotal() {
  let total = 0;
  let hasNotePriced = false;
  Object.entries(cart).forEach(([no, qty]) => {
    const product = PRODUCTS.find((p) => p.no === Number(no));
    if (!product) return;
    if (product.ourPrice) total += product.ourPrice * qty;
    else hasNotePriced = true;
  });
  return { total, hasNotePriced };
}
function renderCartItems() {
  const list = document.getElementById('cartItemsList');
  if (!list) return;
  const entries = Object.entries(cart);
  if (entries.length === 0) {
    list.innerHTML = `<div class="cart-empty">Your cart is empty. Browse the catalog and tap "Add to Cart" on the products you like.</div>`;
    return;
  }
  list.innerHTML = entries
    .map(([no, qty]) => {
      const product = PRODUCTS.find((p) => p.no === Number(no));
      if (!product) return '';
      const priceLabel = product.ourPrice
        ? `₹${product.ourPrice} × ${qty} = ₹${product.ourPrice * qty}`
        : product.ourPriceNote;
      return `
      <div class="cart-item" data-product-no="${product.no}">
        <div class="cart-item-info">
          <span class="cart-item-number">#${product.no}</span>
          <span class="cart-item-title">${product.title}</span>
          <span class="cart-item-price">${priceLabel}</span>
        </div>
        <div class="cart-item-controls">
          <div class="qty-stepper cart-qty-stepper">
            <button class="qty-btn cart-qty-minus" type="button" aria-label="Decrease quantity">−</button>
            <span class="qty-value">${qty}</span>
            <button class="qty-btn cart-qty-plus" type="button" aria-label="Increase quantity">+</button>
          </div>
          <button class="cart-item-remove" type="button" aria-label="Remove item">Remove</button>
        </div>
      </div>`;
    })
    .join('');
}
function refreshCartUI() {
  const badge = document.getElementById('cartBadge');
  const count = cartCount();
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('visible', count > 0);
  }
  renderCartItems();
  const { total, hasNotePriced } = computeCartTotal();
  const totalEl = document.getElementById('cartTotalAmount');
  if (totalEl) totalEl.textContent = `₹${total}${hasNotePriced ? ' +' : ''}`;
  syncCartControls();
}
// Every product card (and the modal, if open) has its own .cart-control —
// an "Add to Cart" button and a "− qty +" stepper stacked on top of each
// other. This walks every one currently on the page and, based on the real
// cart data, shows the qty stepper (sliding in from the right) once that
// product has 1+ in the cart, or the plain button again once it's back to 0.
function syncCartControls() {
  document.querySelectorAll('.cart-control').forEach((control) => {
    const productNo = parseInt(control.dataset.productNo, 10);
    const qty = cart[productNo] || 0;
    const valueEl = control.querySelector('.cart-stepper .qty-value');
    if (valueEl) valueEl.textContent = qty > 0 ? qty : 1;
    control.classList.toggle('in-cart', qty > 0);
  });
}
function buildWhatsappOrderMessage(name, phone, address) {
  const lines = [];
  lines.push("Hi! I'd like to place an order from The Turning Wheel catalog.");
  lines.push('');
  lines.push('Order:');
  const { total, hasNotePriced } = computeCartTotal();
  Object.entries(cart).forEach(([no, qty]) => {
    const product = PRODUCTS.find((p) => p.no === Number(no));
    if (!product) return;
    if (product.ourPrice) {
      lines.push(`#${product.no} - ${product.title} x${qty} = ₹${product.ourPrice * qty}`);
    } else {
      lines.push(`#${product.no} - ${product.title} x${qty} (${product.ourPriceNote})`);
    }
  });
  lines.push('');
  lines.push(`Estimated Total: ₹${total}${hasNotePriced ? ' + item(s) with custom pricing above' : ''}`);
  lines.push('');
  lines.push(`Name: ${name || '(please fill in)'}`);
  lines.push(`Phone: ${phone || '(please fill in)'}`);
  if (address) lines.push(`Delivery Address: ${address}`);
  return lines.join('\n');
}
function showToast(message) {
  const toast = document.getElementById('cartToast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove('visible'), 2200);
}
// ── Cart Drawer wiring ──
function initCart() {
  loadCart();
  const customer = loadCustomer();
  const nameInput = document.getElementById('custName');
  const phoneInput = document.getElementById('custPhone');
  const addressInput = document.getElementById('custAddress');
  if (customer.name) nameInput.value = customer.name;
  if (customer.phone) phoneInput.value = customer.phone;
  if (customer.address) addressInput.value = customer.address;

  const overlay = document.getElementById('cartOverlay');
  const openBtn = document.getElementById('navCartBtn');
  const closeBtn = document.getElementById('cartClose');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  const itemsList = document.getElementById('cartItemsList');

  function openCart() {
    refreshCartUI();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  openBtn.addEventListener('click', openCart);
  closeBtn.addEventListener('click', closeCart);
  // "Order on WhatsApp" (hero) opens the cart drawer instead of scrolling to the order section
  document.querySelectorAll('.js-open-cart').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  });
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeCart();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeCart();
  });

  // Quantity +/- and remove inside the cart drawer itself
  itemsList.addEventListener('click', (e) => {
    const item = e.target.closest('.cart-item');
    if (!item) return;
    const productNo = parseInt(item.dataset.productNo, 10);
    if (e.target.closest('.cart-qty-plus')) {
      updateCartQty(productNo, (cart[productNo] || 0) + 1);
    } else if (e.target.closest('.cart-qty-minus')) {
      updateCartQty(productNo, (cart[productNo] || 0) - 1);
    } else if (e.target.closest('.cart-item-remove')) {
      removeFromCart(productNo);
    }
  });

  // "Add to Cart" + its live qty stepper on product cards and inside the modal.
  // Delegated on document because the modal's markup is re-created every open.
  // The button and stepper both live inside .cart-control at all times; CSS
  // handles the slide animation between them based on the .in-cart class —
  // here we only ever touch the real cart data, then let syncCartControls()
  // (called from refreshCartUI) update every matching control on the page.
  document.addEventListener('click', (e) => {
    if (e.target.closest('.cart-item')) return; // handled above, in the drawer
    const stepperBtn = e.target.closest('.cart-control .qty-btn');
    if (stepperBtn) {
      e.stopPropagation();
      const control = stepperBtn.closest('.cart-control');
      const productNo = parseInt(control.dataset.productNo, 10);
      const current = cart[productNo] || 0;
      const next = stepperBtn.classList.contains('plus') ? current + 1 : current - 1;
      updateCartQty(productNo, next);
      return;
    }
    const addBtn = e.target.closest('.add-to-cart-btn');
    if (addBtn) {
      e.stopPropagation();
      const productNo = parseInt(addBtn.dataset.productNo, 10);
      addToCart(productNo, 1);
      showToast(`Added Product #${productNo} to cart`);
    }
  });

  // Checkout: validate customer details, persist them, open WhatsApp with the pre-filled order
  checkoutBtn.addEventListener('click', () => {
    if (cartCount() === 0) {
      showToast('Your cart is empty — add a product first');
      return;
    }
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();
    if (!name || !phone) {
      showToast('Please add your name and phone number');
      (name ? phoneInput : nameInput).focus();
      return;
    }
    saveCustomer({ name, phone, address });
    const message = buildWhatsappOrderMessage(name, phone, address);
    window.open(`https://wa.me/${ORDER_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });

  refreshCartUI();
}
// ── Initialize Everything ──
document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '<div class="catalog-loading">Loading catalog…</div>';

  await detectAllPhotoCounts();

  initProductsGrid();
  initCarousels();
  initFilters();
  initModal();
  initNav();
  initParticles();
  initCounters();
  initScrollReveal();
  initSmoothScroll();
  initCategoryNavLinks();
  initCart();
});