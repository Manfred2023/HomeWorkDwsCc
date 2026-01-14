const products = [
  {
    id: 1,
    name: "iPhone 14 – High Quality, Best Value",
    category: "PHONE",
    price: 100000,
    image: "img/iphone14-removebg-preview.png",
    badge: "Nouveau"
  },
  {
    id: 2,
    name: "Casque sans fil",
    category: "Casque",
    price: 120000,
    image: "img/casque-sans-fil-2-removebg-preview.png",
    badge: "Populaire"
  },
  {
    id: 3,
    name: "Desktop gaming",
    category: "COMPUTER",
    price: 45000,
    image: "img/desktopGam5-removebg-preview.png",
    badge: "Promo"
  },
  {
    id: 4,
    name: "Iphone 12 Pro Max 256",
    category: "PHONE",
    price: 45000,
    image: "img/iphone12pm-removebg-preview.png",
    badge: "Promo"
  },
  {
    id: 5,
    name: "Iphone 17 Pro Max 256 Orange",
    category: "PHONE",
    price: 45000,
    image: "img/iphone17pm-removebg-preview.png",
    badge: "Promo"
  },
  {
    id: 6,
    name: "Iphone 12 Pro ",
    category: "PHONE",
    price: 45000,
    image: "img/iphpne12pr-removebg-preview.png",
    badge: "Promo"
  },{
    id: 7,
    name: "KeyBoard",
    category: "PHONE",
    price: 45000,
    image: "img/keyboard-removebg-preview.png",
    badge: "Promo"
  },{
    id: 8,
    name: "KeyBoard",
    category: "PHONE",
    price: 45000,
    image: "img/keyboard2-removebg-preview.png",
    badge: "Promo"
  },{
    id: 9,
    name: "MagSave Iphone",
    category: "PHONE",
    price: 45000,
    image: "img/macsave.webp",
    badge: "Promo"
  },{
    id: 10,
    name: "Moniteur azuz",
    category: "COMPUTER",
    price: 45000,
    image: "img/monitorAzuz-removebg-preview.png",
    badge: "Promo"
  },{
    id: 11,
    name: "Moniteur gaming",
    category: "COMPUTER",
    price: 45000,
    image: "img/monotor-removebg-preview.png",
    badge: "Promo"
  },{
    id: 12,
    name: "LapTop for poor student",
    category: "COMPUTER",
    price: 45000,
    image: "img/ordi2-removebg-preview.png",
    badge: "Promo"
  }
  ,{
    id: 12,
    name: "Desktop Gaming",
    category: "COMPUTER",
    price: 45000,
    image: "img/ordiGaming4-removebg-preview.png",
    badge: "Promo"
  },{
    id: 13,
    name: "Power Bank",
    category: "TOOLS",
    price: 45000,
    image: "img/power-removebg-preview.png",
    badge: "Promo"
  },{
    id: 14,
    name: "Power Bank 2",
    category: "TOOLS",
    price: 45000,
    image: "img/powerBank-removebg-preview.png",
    badge: "Promo"
  }
];


  const container = document.getElementById("productsContainer");

  products.forEach(product => {
  container.innerHTML += `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
      </div>

      <div class="product-content">
        <p class="category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>

        <div class="price-row">
          <span class="price">${product.price.toLocaleString()} FCFA</span>
        </div>

        <button class="btn-cart" onclick="addToCart(${product.id})">
          🛒 Ajouter au panier
        </button>
      </div>
    </div>
  `;
});

  function addToCart(id) {
  alert("Produit ajouté au panier : " + id);
}


