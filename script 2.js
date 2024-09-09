let cart = [];
let cartCount = 0;
let cartTotal = 0.00;

function addToCart(id, name, price) {
    const product = { id, name, price };
    cart.push(product);
    cartCount++;
    cartTotal += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCountElem = document.getElementById('cart-count');
    const cartTotalElem = document.getElementById('cart-total');

    // Clear existing cart items
    cartItems.innerHTML = '';
    
    // Add each item to the cart list
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `₹${item.name} - ₹${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    // Update cart count and total
    cartCountElem.textContent = cartCount;
    cartTotalElem.textContent = `₹${cartTotal.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert(`Thank you for your purchase! Total: ₹${cartTotal.toFixed(2)}`);
    cart = [];
    cartCount = 0;
    cartTotal = 0.00;
    updateCart();
}
