function getCart() {
  return JSON.parse(localStorage.getItem('glowcraft_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('glowcraft_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(product) {
  let cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += (product.qty || 1);
  } else {
    cart.push({ ...product, qty: product.qty || 1 });
  }
  saveCart(cart);
  alert(`${product.name} added to cart!`);
}

function updateCartBadge() {
  const cart = getCart();
  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.innerText = cart.reduce((acc, item) => acc + item.qty, 0);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
});

// كود التبديل بين الوضع المضيء والداكن
const themeToggleBtn = document.getElementById('themeToggle');
const bodyElement = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  bodyElement.classList.add('dark-mode');
  document.documentElement.setAttribute('data-theme', 'dark');
  if (themeToggleBtn) themeToggleBtn.textContent = '☀️ الوضع الفاتح';
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    
    if (bodyElement.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggleBtn.textContent = '☀️ الوضع الفاتح';
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggleBtn.textContent = '🌙 الوضع الداكن';
    }
  });
}