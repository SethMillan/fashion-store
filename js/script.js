// script.js

document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const cartList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');
  const toggleCart = document.getElementById('toggle-cart');
  const cartAside = document.getElementById('cart');

function updateCartDisplay() {
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
      total += item.price;
      const li = document.createElement('li');
      li.innerHTML = `
          ${item.name} - $${item.price.toFixed(2)}
          <button onclick="removeFromCart(${index})" style="background:red;padding:0 6px;">&times;</button>
      `;
      cartList.appendChild(li);
  });
  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
  
  // Guarda el carrito en localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

  window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartDisplay();
  }

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const img = button.dataset.img;
      cart.push({ name, price ,img});
      updateCartDisplay();
    });
  });

  toggleCart.addEventListener('click', () => {
    cartAside.classList.toggle('hidden');
  });
});




  // function updateCartDisplay() {
  //   cartList.innerHTML = '';
  //   let total = 0;
  //   cart.forEach((item, index) => {
  //     total += item.price;
  //     const li = document.createElement('li');
  //     li.innerHTML = `
  //       ${item.name} - $${item.price.toFixed(2)}
  //       <button onclick="removeFromCart(${index})" style="background:red;padding:0 6px;">&times;</button>
  //     `;
  //     cartList.appendChild(li);
  //   });
  //   cartTotal.textContent = total.toFixed(2);
  //   cartCount.textContent = cart.length;
  // }
  // En tu script.js (de la tienda)