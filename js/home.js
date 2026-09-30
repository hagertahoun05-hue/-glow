document.addEventListener("DOMContentLoaded", () => {
  fetchHomeProducts();
});

async function fetchHomeProducts() {
  try {
    // API حقيقي يحتوي على منتجات عناية بالبشرة والتجميل
    let response = await fetch("https://dummyjson.com/products/category/beauty");
    
    // في حال عدم عمل الإنترنت أو للربط مع السيرفر المحلي db.json
    if (!response.ok) {
      response = await fetch("http://localhost:3000/products");
    }

    const data = await response.json();
    const products = data.products || data;

    // تقسيم المنتجات على الأقسام
    const weeklyOffers = products.slice(0, 4); // أول 4 منتجات للعروض
    const bestSellers = products.slice(4, 8);   // المنتجات الأكثر مبيعاً

    renderProducts("weekly-offers-grid", weeklyOffers, true);
    renderProducts("best-sellers-grid", bestSellers, false);

  } catch (error) {
    console.error("Error fetching products:", error);
    showFallbackProducts();
  }
}

function renderProducts(containerId, productList, isOffer = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = productList.map(item => {
    // توحيد الحقول بين API المحلي و الخارجي
    const name = item.title || item.name;
    const price = item.price;
    const oldPrice = isOffer ? (price * 1.25).toFixed(2) : null;
    const discount = isOffer ? "-20%" : null;
    const image = item.thumbnail || item.image;

    return `
      <div class="product-card">
        ${discount ? `<span class="badge-discount">${discount}</span>` : ''}
        <img src="${image}" alt="${name}">
        <h4>${name}</h4>
        <div class="price-row">
          <span class="price">$${price}</span>
          ${oldPrice ? `<span class="old-price">$${oldPrice}</span>` : ''}
        </div>
        <button onclick="window.location.href='product-details.html?id=${item.id}'" 
                class="btn btn-outline" 
                style="width: 100%; margin-top: 10px; padding: 6px;">
          View Details
        </button>
      </div>
    `;
  }).join('');
}

// داتا بديلة في حال حدث أي انقطاع في الـ API
function showFallbackProducts() {
  const fallback = [
    { id: "1", name: "Vitamin C Serum", price: 24.99, oldPrice: 34.99, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400" },
    { id: "2", name: "Moisturizing Cream", price: 18.99, oldPrice: 24.99, image: "https://images.unsplash.com/photo-1608248597260-8f9f743085f1?w=400" },
    { id: "3", name: "Sunscreen SPF 50", price: 16.99, oldPrice: 22.99, image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400" },
    { id: "4", name: "Clay Mask", price: 12.99, oldPrice: 16.99, image: "https://images.unsplash.com/photo-1567928269937-ae07cb43b5a9?w=400" }
  ];

  renderProducts("weekly-offers-grid", fallback, true);
  renderProducts("best-sellers-grid", fallback, false);
}