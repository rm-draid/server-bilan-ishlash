document.addEventListener("DOMContentLoaded", () => {
  const productList = document.querySelector("#product-list");

  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();

      products.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="card-image" />
            <div class="card-details">
              <h3 class="card-title">${item.title}</h3>
              <p class="card-price">$${item.price}</p>
              <button class="add-button">Qo'shish</button>
            </div>
          `;

        productList.appendChild(card);
      });
    } catch (error) {
      console.error("Mahsulotlarni yuklashda xatolik yuz berdi:", error);
    }
  }

  fetchProducts();
});
