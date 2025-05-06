// // script.js

// document.addEventListener('DOMContentLoaded', () => {
//   const cart = [];
//   const cartList = document.getElementById('cart-items');
//   const cartTotal = document.getElementById('cart-total');
//   const cartCount = document.getElementById('cart-count');
//   const toggleCart = document.getElementById('toggle-cart');
//   const cartAside = document.getElementById('cart');

//   function updateCartDisplay() {
//     cartList.innerHTML = '';
//     let total = 0;
//     cart.forEach((item, index) => {
//       total += item.price;
//       const li = document.createElement('li');
//       li.innerHTML = `
//         ${item.name} - $${item.price.toFixed(2)}
//         <button onclick="removeFromCart(${index})" style="background:red;padding:0 6px;">&times;</button>
//       `;
//       cartList.appendChild(li);
//     });
//     cartTotal.textContent = total.toFixed(2);
//     cartCount.textContent = cart.length;
//   }

//   window.removeFromCart = function(index) {
//     cart.splice(index, 1);
//     updateCartDisplay();
//   }

//   document.querySelectorAll('.add-to-cart').forEach(button => {
//     button.addEventListener('click', () => {
//       const name = button.dataset.name;
//       const price = parseFloat(button.dataset.price);
//       cart.push({ name, price });
//       updateCartDisplay();
//     });
//   });

//   toggleCart.addEventListener('click', () => {
//     cartAside.classList.toggle('hidden');
//   });
// });


document.addEventListener('DOMContentLoaded', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Recuperamos el carrito de localStorage
  const cartList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');
  const toggleCart = document.getElementById('toggle-cart');
  const cartAside = document.getElementById('cart');

  // Función para guardar el carrito en localStorage
  function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));  // Guardamos el carrito
  }

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

    saveCartToLocalStorage();  // Actualiza el localStorage cada vez que cambia el carrito
  }

  window.removeFromCart = function(index) {
    cart.splice(index, 1);  // Eliminamos el artículo del carrito
    updateCartDisplay();
  }

  // Agregar productos al carrito
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const imageUrl = button.dataset.image;  // Suponiendo que quieres agregar una imagen
      cart.push({ name, price, imageUrl });  // Guardamos el producto con nombre, precio e imagen
      updateCartDisplay();
    });
  });

  toggleCart.addEventListener('click', () => {
    cartAside.classList.toggle('hidden');
  });

  // Muestra los productos cuando se recarga la página (si están en localStorage)
  updateCartDisplay();
});
