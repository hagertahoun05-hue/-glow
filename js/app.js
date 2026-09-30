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