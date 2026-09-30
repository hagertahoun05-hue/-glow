// قائمة المنتجات العلاجية المصرية مع ربط الصور الدقيق مع نوع المنتج
const localEgyptianProducts = [
  // Page 1
  { id: 1, name: "Starville Facial Gel Cleanser for Oily Skin 200ml", price: 140, rating: 4.8, category: "Cleansers", skinType: "Oily", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRK8dZPfdB4l-xXwzzH3flGgoPGN5vMKE--HKLLbrqZ_uJdztWveT9xhtK-IWbSMMnCwtIo-NQOHXUYaFzBf9htkPu0WGuxel276HgpecHg-dTGmS2r_EXFfpf2CXF3o4Z8lTDJEg&usqp=CAc" },
  { id: 2, name: "Argento Clear Facial Cleanser & Purifier 200ml", price: 160, rating: 4.7, category: "Cleansers", skinType: "Combination", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTivuYIuK5H3StgAvDSoABAblix1pOyoIWxnWw9lgGcYFvYpt3kyKCBpvY3Y2bZB-y9ZMD5dGgRxfoKFXgwIZ7i1VPKpbDHo8G52n3pX8Yp1QokeTxUS6pd2sjR7Gpg5TkNGhyyRw&usqp=CAc" },
  { id: 3, name: "Bobana Marine Collagen & Vitamin C Serum 30ml", price: 190, rating: 4.6, category: "Serums", skinType: "Combination", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3h3HFPfmEIkwUSR9Uvk52STLLWBNJJDt-c0Fj2n2eg&s=10" },
  { id: 4, name: "Kolagra Vitamin C Serum 10% Brightening", price: 280, rating: 4.9, category: "Serums", skinType: "Dry", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRu7gHxIv3yE6Z4U32AW6uaC8Yxsoa2Ob0CGpVceVrbPway1Dq5EgfmuuqndIzu9llsSAiXSs7EbCaS23yP6fJZ1SJbfDj5mB3pHnLBQDrIzWpPDyfSGQAkhs0ngIScYA7RKud17G8&usqp=CAc" },
  { id: 5, name: "Dermactive Acti-Clear Purifying Cleansing Gel 200ml", price: 230, rating: 4.8, category: "Cleansers", skinType: "Oily", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ3oBUGekgHijiGDSFbPsi6cLhl1b6HXGTeCaCnLwbZeDiL1VwRkbwpJ8m_hVp6w1wFca8TG3_4QW7lRiC_09e5noldwpreagQMy1yiWUx1RgIz9eLMsR2gDga8WM7An-2p0q0y4uU&usqp=CAc" },
  { id: 6, name: "Alejon Sunscreen Gel Cream SPF 50+ High Protection", price: 320, rating: 4.9, category: "Sunscreens", skinType: "Sensitive", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95Z7I-H6xh3xlFEgjy-Im1GvuA_wF1KNrRAwYzEJsCg&s=10" },

  // Page 2
  { id: 7, name: "Shan Soothing Moisturizing Cream for Dry Skin", price: 175, rating: 4.7, category: "Moisturizers", skinType: "Dry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGYmC0rf7DR8z5MgmmMTAP3cHFXyX-ZVCqSISnuKHVg&s=10" },
  { id: 8, name: "Eva Skin Clinic Hyaluronic Acid Serum 30ml", price: 220, rating: 4.5, category: "Serums", skinType: "Dry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnRLu9KgewqmBaY3C-PZKgcw6P1tQHmpot_FSUQBW5w&s=10" },
  { id: 9, name: "Malinda Moisturizing Lotion with Ceramides 250ml", price: 210, rating: 4.8, category: "Moisturizers", skinType: "Sensitive", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ux1HZSDmp53Bof_iYwA9zMpNDvPzC5Hsdt4W41J4rA&s=10" },
  { id: 10, name: "Starville Whitening Cream for Dark Spots & Pigmentation", price: 185, rating: 4.6, category: "Moisturizers", skinType: "Combination", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rEK9zHlMPqK0bQNlPzIWlKcsiVaFHKMmcT_Bbr91Eg&s=10" },
  { id: 11, name: "Blanca Whitening & Anti-Pigmentation Cream", price: 250, rating: 4.7, category: "Moisturizers", skinType: "Combination", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkk_WcEEqzOfMiaZ9CF0mIAlDPlyI9gtgNsAhkVJlmg&s=10" },
  { id: 12, name: "Bobana Hyaluronic Acid & Ceramide Sheet Mask", price: 45, rating: 4.5, category: "Masks", skinType: "Dry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEALu4nTsSJioZthH3XDsecD78khf2sZ0dZcRdPEPVQ&s" },

  // Page 3
  { id: 13, name: "Argento Night Anti-Aging & Repair Cream 50g", price: 210, rating: 4.8, category: "Moisturizers", skinType: "Dry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsPc3q1BIxxKYw_CqcoMSXdSRJEG6_9c-X46jfehbodQ&s=10" },
  { id: 14, name: "Dermactive Hydractive Rich Cream for Very Dry Skin", price: 260, rating: 4.9, category: "Moisturizers", skinType: "Dry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOuSSJcIL0plCAbEb0E-o2G_RJPoSQMbDp3CLebxlsEQ&s=10" },
  { id: 15, name: "Starville Acne Prone Skin Active Gel Treatment 60g", price: 130, rating: 4.7, category: "Serums", skinType: "Oily", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWamS_za1gUVrU6x7arDNnkVGfbKzhgd0LFIxfGJikw&s=10" },
  { id: 16, name: "Kolagra Sunscreen Dry Touch Gel Cream SPF 50+", price: 290, rating: 4.8, category: "Sunscreens", skinType: "Oily", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TPb4r_ObnENhguL75ZT1lZxQnAK3Cj-PDs0lhQP92w&s=10" },
  { id: 17, name: "Bobana Charcoal Purifying Clay Mask 150g", price: 95, rating: 4.6, category: "Masks", skinType: "Oily", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GJFfJYmNjr4TYzR6r_Wh0yvS5FT-w7xqNVVT_dIs8g&s=10" },
  { id: 18, name: "Eva Skin Clinic Gold Collagen Night Repair Cream", price: 240, rating: 4.6, category: "Moisturizers", skinType: "Dry", image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format&fit=crop" },

  // Page 4
  { id: 19, name: "Alejon Clarifying Cleansing Foam with Tea Tree Oil", price: 240, rating: 4.8, category: "Cleansers", skinType: "Sensitive", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop" },
  { id: 20, name: "Shan Daily Hydrating Fluid SPF 30 Matte Finish", price: 195, rating: 4.7, category: "Sunscreens", skinType: "Combination", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop" },
  { id: 21, name: "Starville Micellar Water Cleanser & Makeup Remover 400ml", price: 165, rating: 4.9, category: "Cleansers", skinType: "Sensitive", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop" },
  { id: 22, name: "Kolagra Eye Contour Gel for Puffiness & Dark Circles", price: 210, rating: 4.6, category: "Serums", skinType: "Sensitive", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500&auto=format&fit=crop" },
  { id: 23, name: "Nile Secret Soothing Herbal Facial Gel Wash", price: 120, rating: 4.4, category: "Cleansers", skinType: "Dry", image: "https://images.unsplash.com/photo-1556228722-d1191e13f41a?w=500&auto=format&fit=crop" },
  { id: 24, name: "Eva Skin Clinic Gold Collagen Anti-Wrinkle Serum", price: 310, rating: 4.7, category: "Serums", skinType: "Combination", image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&auto=format&fit=crop" },

  // Page 5
  { id: 25, name: "Dermactive Barrier Repair Calming Cream 50ml", price: 270, rating: 4.9, category: "Moisturizers", skinType: "Sensitive", image: "https://images.unsplash.com/photo-1580870014984-24736699b8d9?w=500&auto=format&fit=crop" },
  { id: 26, name: "Bobana Gold Peel-Off Firming Face Mask", price: 110, rating: 4.5, category: "Masks", skinType: "Combination", image: "https://images.unsplash.com/photo-1567928269937-ae07cb43b5a9?w=500&auto=format&fit=crop" },
  { id: 27, name: "Argento Eye Contour Serum with Caffeine & Peptides", price: 220, rating: 4.8, category: "Serums", skinType: "Sensitive", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop" },
  { id: 28, name: "Starville Soothing Cream for Skin Irritation & Redness", price: 115, rating: 4.8, category: "Moisturizers", skinType: "Sensitive", image: "https://images.unsplash.com/photo-1608248597260-8f9f743085f1?w=500&auto=format&fit=crop" },
  { id: 29, name: "Blanca Sunscreen Fluid Ultra-Light SPF 50+ Invisible", price: 310, rating: 4.8, category: "Sunscreens", skinType: "Oily", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop" },
  { id: 30, name: "Kolagra Niacinamide Serum 10% + Zinc 1%", price: 260, rating: 4.9, category: "Serums", skinType: "Oily", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500&auto=format&fit=crop" },

  // Page 6
  { id: 31, name: "Alejon Anti-Acne Targeted Spot Corrector Gel", price: 195, rating: 4.7, category: "Serums", skinType: "Oily", image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&auto=format&fit=crop" },
  { id: 32, name: "Shan Intensive Body & Hand Moisturizing Lotion", price: 145, rating: 4.6, category: "Moisturizers", skinType: "Dry", image: "https://images.unsplash.com/photo-1580870014984-24736699b8d9?w=500&auto=format&fit=crop" },
  { id: 33, name: "Dermactive Acti-Clear Blemish Relief Gel", price: 180, rating: 4.8, category: "Serums", skinType: "Oily", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop" },
  { id: 34, name: "Starville Salicylic Acid Exfoliating Face Wash", price: 155, rating: 4.8, category: "Cleansers", skinType: "Combination", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop" },
  { id: 35, name: "Bobana Moroccan Red Clay Pore Purifying Mask", price: 100, rating: 4.6, category: "Masks", skinType: "Combination", image: "https://images.unsplash.com/photo-1567928269937-ae07cb43b5a9?w=500&auto=format&fit=crop" },
  { id: 36, name: "Eva Skin Clinic Vitamin B3 Oil Control Serum", price: 235, rating: 4.7, category: "Serums", skinType: "Oily", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500&auto=format&fit=crop" },

  // Page 7
  { id: 37, name: "Starville Whitening Roll-On Deodorant & Anti-Perspirant", price: 110, rating: 4.9, category: "Moisturizers", skinType: "Sensitive", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop" },
  { id: 38, name: "Argento Sunscreen Cream Gel SPF 50+ Oil-Free", price: 260, rating: 4.7, category: "Sunscreens", skinType: "Combination", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop" },
  { id: 39, name: "Dermactive Deep Hydration Gel Cream for Oily Skin", price: 240, rating: 4.8, category: "Moisturizers", skinType: "Oily", image: "https://images.unsplash.com/photo-1608248597260-8f9f743085f1?w=500&auto=format&fit=crop" },
  { id: 40, name: "Kolagra Hyaluronic Acid Hydrating Serum", price: 275, rating: 4.8, category: "Serums", skinType: "Dry", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop" },
  { id: 41, name: "Alejon Hydrating Facial Cleansing Gel", price: 220, rating: 4.6, category: "Cleansers", skinType: "Dry", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop" },
  { id: 42, name: "Eva Skin Clinic Natural Glowing Skin Cream", price: 195, rating: 4.5, category: "Moisturizers", skinType: "Combination", image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format&fit=crop" },

  // Page 8
  { id: 43, name: "Malinda Gentle Daily Cleansing Lotion", price: 180, rating: 4.7, category: "Cleansers", skinType: "Sensitive", image: "https://images.unsplash.com/photo-1556228722-d1191e13f41a?w=500&auto=format&fit=crop" },
  { id: 44, name: "Shan Soothing Moisturizing Lotion 200ml", price: 185, rating: 4.8, category: "Moisturizers", skinType: "Sensitive", image: "https://images.unsplash.com/photo-1580870014984-24736699b8d9?w=500&auto=format&fit=crop" },
  { id: 45, name: "Bobana Hyaluronic Acid Hydrating Face Wash", price: 125, rating: 4.6, category: "Cleansers", skinType: "Dry", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop" },
  { id: 46, name: "Starville Facial Scrub with Natural Microbeads", price: 120, rating: 4.7, category: "Cleansers", skinType: "Combination", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop" },
  { id: 47, name: "Kolagra Anti-Pigmentation Serum 30ml", price: 295, rating: 4.9, category: "Serums", skinType: "Combination", image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&auto=format&fit=crop" },
  { id: 48, name: "Dermactive Sunscreen Fluid Tinted SPF 50+", price: 340, rating: 4.8, category: "Sunscreens", skinType: "Sensitive", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop" },

  // Page 9
  { id: 49, name: "Blanca Intensive Brightening Night Gel", price: 270, rating: 4.7, category: "Moisturizers", skinType: "Dry", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop" },
  { id: 50, name: "Alejon Deep Exfoliating Scrub Cream", price: 210, rating: 4.6, category: "Cleansers", skinType: "Oily", image: "https://images.unsplash.com/photo-1556228722-d1191e13f41a?w=500&auto=format&fit=crop" },
  { id: 51, name: "Argento Clarifying Toner with Salicylic Acid", price: 175, rating: 4.8, category: "Cleansers", skinType: "Oily", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop" },
  { id: 52, name: "Starville Cica Repairing Barrier Balm", price: 165, rating: 4.9, category: "Moisturizers", skinType: "Sensitive", image: "https://images.unsplash.com/photo-1608248597260-8f9f743085f1?w=500&auto=format&fit=crop" },
  { id: 53, name: "Eva Skin Clinic Anti-Aging Night Cream", price: 230, rating: 4.6, category: "Moisturizers", skinType: "Dry", image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format&fit=crop" },
  { id: 54, name: "Bobana Vitamin C Sheet Mask for Radiant Skin", price: 45, rating: 4.5, category: "Masks", skinType: "Combination", image: "https://images.unsplash.com/photo-1567928269937-ae07cb43b5a9?w=500&auto=format&fit=crop" },

  // Page 10
  { id: 55, name: "Kolagra Soothing Calming Gel with Aloe Vera", price: 160, rating: 4.7, category: "Moisturizers", skinType: "Sensitive", image: "https://images.unsplash.com/photo-1580870014984-24736699b8d9?w=500&auto=format&fit=crop" },
  { id: 56, name: "Dermactive Acti-Clear Exfoliating Lotion", price: 220, rating: 4.8, category: "Serums", skinType: "Oily", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop" },
  { id: 57, name: "Nile Secret Hydrating Facial Mist Spray", price: 135, rating: 4.5, category: "Moisturizers", skinType: "Dry", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500&auto=format&fit=crop" },
  { id: 58, name: "Alejon Sunscreen Lotion Fluid SPF 50+", price: 330, rating: 4.9, category: "Sunscreens", skinType: "Dry", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop" },
  { id: 59, name: "Shan Ultra Gentle Foaming Face Wash", price: 165, rating: 4.7, category: "Cleansers", skinType: "Sensitive", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop" },
  { id: 60, name: "Starville Pore Minimizing Active Serum", price: 190, rating: 4.8, category: "Serums", skinType: "Oily", image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&auto=format&fit=crop" }
];

let rawProducts = [];
let filteredProducts = [];
let currentPage = 1;
const itemsPerPage = 6;

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  setupListeners();
});

function loadProducts() {
  rawProducts = [...localEgyptianProducts];
  
  // قراءة فئة المنتج المسجلة في الرابط (إن وجدت) مثل ?category=Cleansers
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCategory = urlParams.get('category');

  if (selectedCategory) {
    const catCheckboxes = document.querySelectorAll(".filter-cat");
    catCheckboxes.forEach(cb => {
      if (cb.value.toLowerCase() === selectedCategory.toLowerCase()) {
        cb.checked = true;
      }
    });
    applyAllFilters();
  } else {
    filteredProducts = [...rawProducts];
    currentPage = 1;
    renderCurrentPage();
  }
}

function renderCurrentPage() {
  const grid = document.getElementById("all-products-grid");
  const showingText = document.getElementById("showing-text");

  if (!grid) return;

  if (filteredProducts.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888; padding: 50px 0;">No therapeutic products match your filter options.</p>`;
    if (showingText) showingText.innerText = "Showing 0 products";
    renderPaginationButtons(0);
    return;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageProducts = filteredProducts.slice(startIndex, endIndex);

  // تحديث تصميم الكارت بحيث يوجه إلى صفحة تفاصيل المنتج باستخدام الـ ID المعين
  grid.innerHTML = pageProducts.map(item => `
    <div class="product-card" onclick="window.location.href='product-details.html?id=${item.id}'" style="cursor:pointer;">
      <div class="product-img">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="product-info">
        <h4>${item.name}</h4>
        <div class="product-meta">
          <span class="price">${item.price} EGP</span>
          <span class="rating"><i class="fa-solid fa-star"></i> ${item.rating}</span>
        </div>
      </div>
    </div>
  `).join('');

  if (showingText) {
    const currentEnd = Math.min(endIndex, filteredProducts.length);
    showingText.innerText = `Showing ${startIndex + 1}-${currentEnd} of ${filteredProducts.length}`;
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  renderPaginationButtons(totalPages);
}

function renderPaginationButtons(totalPages) {
  const container = document.getElementById("pagination-btns");
  if (!container) return;

  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  let btnsHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    btnsHTML += `
      <button class="${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">
        ${i}
      </button>
    `;
  }
  container.innerHTML = btnsHTML;
}

function goToPage(pageNumber) {
  currentPage = pageNumber;
  renderCurrentPage();
  document.getElementById("all-products-grid")?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setupListeners() {
  const searchInput = document.getElementById("search-input");
  const priceRange = document.getElementById("price-range");
  const priceVal = document.getElementById("price-val");
  const sortSelect = document.getElementById("sidebar-sort-select");
  const skinCheckboxes = document.querySelectorAll(".filter-skin");
  const catCheckboxes = document.querySelectorAll(".filter-cat");

  searchInput?.addEventListener("input", applyAllFilters);

  priceRange?.addEventListener("input", (e) => {
    if (priceVal) priceVal.innerText = `${e.target.value} EGP`;
    applyAllFilters();
  });

  sortSelect?.addEventListener("change", applyAllFilters);
  skinCheckboxes.forEach(cb => cb.addEventListener("change", applyAllFilters));
  catCheckboxes.forEach(cb => cb.addEventListener("change", applyAllFilters));
}

function applyAllFilters() {
  let result = [...rawProducts];

  const query = document.getElementById("search-input")?.value.toLowerCase().trim();
  if (query) {
    result = result.filter(p => p.name.toLowerCase().includes(query));
  }

  const maxPrice = parseFloat(document.getElementById("price-range")?.value || 500);
  result = result.filter(p => p.price <= maxPrice);

  const selectedCats = Array.from(document.querySelectorAll(".filter-cat:checked")).map(cb => cb.value.toLowerCase());
  if (selectedCats.length > 0) {
    result = result.filter(p => selectedCats.some(c => p.category.toLowerCase().includes(c)));
  }

  const selectedSkins = Array.from(document.querySelectorAll(".filter-skin:checked")).map(cb => cb.value.toLowerCase());
  if (selectedSkins.length > 0) {
    result = result.filter(p => selectedSkins.some(s => p.skinType.toLowerCase().includes(s)));
  }

  const sort = document.getElementById("sidebar-sort-select")?.value;
  if (sort === "low-high") result.sort((a, b) => a.price - b.price);
  if (sort === "high-low") result.sort((a, b) => b.price - a.price);
  if (sort === "rating") result.sort((a, b) => b.rating - a.rating);

  filteredProducts = result;
  currentPage = 1;
  renderCurrentPage();
}