const cart = [];

function addItem() {
  const itemName = document.getElementById('itemName').value;
  const quantity = document.getElementById('quantity').value;

  if (itemName && quantity > 0) {
    const item = { itemName, quantity };
    cart.push(item);

    // Update the cart display
    updateCartDisplay();
  } else {
    alert('Please enter valid item name and quantity.');
  }
}

function updateCartDisplay() {
  const cartList = document.getElementById('cart');
  cartList.innerHTML = '';

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.itemName} - Quantity: ${item.quantity}`;
    cartList.appendChild(listItem);
  });
}

function submitOrder() {
  if (cart.length > 0) {
    // Here, you can make an AJAX request to the server to handle the order
    fetch('/submitOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Order submitted:', data);

      // Clear the cart after submitting the order
      cart.length = 0;

      // Update the cart display
      updateCartDisplay();
    })
    .catch(error => console.error('Error submitting order:', error));
  } else {
    alert('Your cart is empty. Please add items before submitting.');
  }
}

