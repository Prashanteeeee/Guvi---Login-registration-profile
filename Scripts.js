// Initialize cart array and total price
let cart = [];
let total = 0;

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

// Update cart display
function updateCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
  document.getElementById('totalPrice').innerText = `Total: $${total.toFixed(2)}`;
}

// Checkout function
function checkout() {
  document.getElementById('orderForm').style.display = 'block';
}

// Submit order
function submitOrder(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;

  alert(`Thank you, ${name}! Your order will be delivered to ${address}.`);
  cart = [];
  total = 0;
  updateCart();
  document.getElementById('orderForm').style.display = 'none';
}
