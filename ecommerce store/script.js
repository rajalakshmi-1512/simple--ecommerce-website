// Shopping Cart

let cart = [];

// Add product to cart
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        cartItems.appendChild(li);

        total += item.price;
    });

    totalPrice.textContent = total;
}