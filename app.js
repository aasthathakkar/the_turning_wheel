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
    platform: "Amazon",
    listPrice: 569,
    ourPriceNote: "₹399 (1 piece) / ₹699 (2 piece)",
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
  const savePercent = product.ourPrice
    ? Math.round((1 - product.ourPrice / product.listPrice) * 100)
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
      </div>`;
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
          <div class="qty-stepper" data-product-no="${product.no}">
            <button class="qty-btn minus" type="button" aria-label="Decrease quantity">−</button>
            <span class="qty-value">1</span>
            <button class="qty-btn plus" type="button" aria-label="Increase quantity">+</button>
          </div>
          <button class="add-to-cart-btn" type="button" data-product-no="${product.no}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            Add to Cart
          </button>
        </div>
      </div>
    </article>`;
}
// ── Render modal HTML ──
function renderModal(product) {
  const savePercent = product.ourPrice
    ? Math.round((1 - product.ourPrice / product.listPrice) * 100)
    : null;
  const colors = CATEGORY_COLORS[product.category];
  let slides = '';
  for (let i = 0; i < product.imageCount; i++) {
    slides += `
      <div class="carousel-slide" style="background: repeating-linear-gradient(45deg, ${colors.bg1}, ${colors.bg1} 14px, ${colors.bg2} 14px, ${colors.bg2} 28px);">
        <img src="images/${product.no}/${i + 1}.jpg" alt="${product.title} — photo ${i + 1}" class="product-photo" loading="lazy"
             onload="this.closest('.carousel-slide').classList.add('has-photo')"
             onerror="this.style.display='none'">
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
      </div>`;
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
      <div class="qty-stepper" data-product-no="${product.no}">
        <button class="qty-btn minus" type="button" aria-label="Decrease quantity">−</button>
        <span class="qty-value">1</span>
        <button class="qty-btn plus" type="button" aria-label="Increase quantity">+</button>
      </div>
      <button class="add-to-cart-btn" type="button" data-product-no="${product.no}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        Add to Cart
      </button>
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
    // Don't open modal if clicking carousel nav, dots, or the cart controls
    if (e.target.closest('.carousel-nav') || e.target.closest('.carousel-dot') || e.target.closest('.card-actions')) return;
    const productNo = parseInt(card.dataset.product);
    const product = PRODUCTS.find((p) => p.no === productNo);
    if (!product) return;
    modalBody.innerHTML = renderModal(product);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Init modal carousel only (fresh markup each time, so no bound flag yet)
    requestAnimationFrame(() => initCarousels(modalBody));
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
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
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

  // Quantity steppers + "Add to Cart" on product cards and inside the modal.
  // Delegated on document because the modal's markup is re-created every open.
  document.addEventListener('click', (e) => {
    if (e.target.closest('.cart-item')) return; // handled above
    const qtyBtn = e.target.closest('.qty-btn');
    if (qtyBtn) {
      e.stopPropagation();
      const stepper = qtyBtn.closest('.qty-stepper');
      const valueEl = stepper.querySelector('.qty-value');
      let val = parseInt(valueEl.textContent, 10) || 1;
      val = qtyBtn.classList.contains('plus') ? val + 1 : Math.max(1, val - 1);
      valueEl.textContent = val;
      return;
    }
    const addBtn = e.target.closest('.add-to-cart-btn');
    if (addBtn) {
      e.stopPropagation();
      const productNo = parseInt(addBtn.dataset.productNo, 10);
      const container = addBtn.closest('.card-actions, .modal-actions');
      const qtyEl = container ? container.querySelector('.qty-value') : null;
      const qty = qtyEl ? parseInt(qtyEl.textContent, 10) || 1 : 1;
      addToCart(productNo, qty);
      if (qtyEl) qtyEl.textContent = '1';
      showToast(`Added ${qty} × Product #${productNo} to cart`);
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