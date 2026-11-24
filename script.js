
// Product Data
const products = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        category: "Fashion",
        price: 12000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1Qqmd0X4YGCt-4JZ6pBHhxcvb400kVBg2NooRxGUWw&s=10"
    },
    {
        id: 2,
        name: "Premium Headphones",
        category: "Electronics",
        price: 7500,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 3,
        name: "Running Sneakers",
        category: "Shoes",
        price: 5500,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        id: 4,
        name: "Stylish Watch",
        category: "Accessories",
        price: 6800,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 5,
        name: "Denim Jacket",
        category: "Fashion",
        price: 7200,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
    },
    {
        id: 6,
        name: "DSLR Camera",
        category: "Electronics",
        price: 8500,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
        id: 7,
        name: "luxury Sneakers",
        category: "Shoes",
        price: 4000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRhjLCHA-C8FvoCNPvSHEw22x8XhOBvJ6i304SE8-Hg&s=10"
    },
    {
        id: 8,
        name: "Leather profiessnal Bag",
        category: "Accessories",
        price: 9500,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500"
    }
];

// Elements
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");
const noResults = document.getElementById("noResults");

let cart = 0;
let selectedCategory = "All";

// Display Products
function displayProducts(items) {

    productGrid.innerHTML = "";

    noResults.hidden = items.length !== 0;

    items.forEach(product => {

        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <span class="category">${product.category}</span>
                <h3>${product.name}</h3>
                <p class="price">Rs. ${product.price.toLocaleString("en-PK")}</p>
                <button class="add-btn" data-id="${product.id}">
                    Add to Cart +
                </button>
            </div>
        `;

        productGrid.appendChild(card);
    });
}

// Add to Cart
productGrid.addEventListener("click", function(e) {

    if (e.target.classList.contains("add-btn")) {

        cart++;
        cartCount.textContent = cart;

        e.target.textContent = "Added ✓";

        setTimeout(() => {
            e.target.textContent = "Add to Cart +";
        }, 1000);
    }
});

// Category Filtering
const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    button.addEventListener("click", function() {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        selectedCategory = this.dataset.category;

        filterProducts();
    });
});

// Search Products
searchInput.addEventListener("input", filterProducts);

// Filter Function
function filterProducts() {

    const searchText = searchInput.value.toLowerCase();

    const filtered = products.filter(product => {

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    displayProducts(filtered);
}

// Newsletter
document.getElementById("newsletterForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you for subscribing!");

    this.reset();
});

// Initial Display
displayProducts(products);
