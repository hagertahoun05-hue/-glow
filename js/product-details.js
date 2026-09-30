let currentQty = 1;
let currentProduct = null;

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id") || "1";

  const res = await fetch(`http://localhost:3000/products/${productId}`);
  currentProduct = await res.json();

  document.getElementById("main-img").src = currentProduct.image;
  document.getElementById("p-title").innerText = currentProduct.name;
  document.getElementById("p-price").innerText = `$${currentProduct.price}`;
  document.getElementById("p-desc").innerText = currentProduct.description;
  document.getElementById("pao-val").innerText = currentProduct.pao || "12M";

  document.getElementById("ingredients-list").innerHTML = 
    currentProduct.ingredients.map(ing => `<li>${ing}</li>`).join('');

  document.getElementById("add-btn").onclick = () => {
    addToCart({ ...currentProduct, qty: currentQty });
  };
});

function changeQty(amt) {
  if (currentQty + amt >= 1) {
    currentQty += amt;
    document.getElementById("qty-val").innerText = currentQty;
  }
}