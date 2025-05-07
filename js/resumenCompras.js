// document.addEventListener('DOMContentLoaded', function() {
//     // Obtener el carrito del localStorage
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.getElementById('cart-items-container');
//     const subtotalElement = document.getElementById('subtotal');
//     const shippingElement = document.getElementById('shipping');
//     const totalElement = document.getElementById('total');
    
//     // Calcular subtotal
//     let subtotal = 0;
    
//     // Mostrar productos en el carrito
//     cart.forEach(item => {
//         subtotal += item.price;
        
//         const itemElement = document.createElement('div');
//         itemElement.className = 'item';
//         itemElement.innerHTML = `
//             <img src="${item.imageUrl || 'https://via.placeholder.com/80'}" alt="${item.name}">
//             <div class="item-details">
//                 <h3>${item.name}</h3>
//                 <p>Cantidad: 1</p>
//                 <p class="price">$${item.price.toFixed(2)}</p>
//             </div>
//         `;
//         cartContainer.appendChild(itemElement);
//     });
    
//     // Calcular totales
//     const shipping = 5.99; // Costo fijo de envío
//     const total = subtotal + shipping;
    
//     // Actualizar valores en la página
//     subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
//     shippingElement.textContent = `$${shipping.toFixed(2)}`;
//     totalElement.textContent = `$${total.toFixed(2)}`;
    
//     // Redirección al botón de pago
//     document.getElementById('checkout-btn').addEventListener('click', function() {
//         // Aquí puedes redirigir a tu pasarela de pagos
//         window.location.href = 'pago.html';
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items-container');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');

    let subtotal = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>No hay productos en el carrito.</p>";
    } else {
        cart.forEach(item => {
            subtotal += item.price;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.innerHTML = `
                <img src="${item.imageUrl || 'https://via.placeholder.com/80'}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Precio: $${item.price.toFixed(2)}</p>
                </div>
            `;
            cartContainer.appendChild(itemElement);
        });
    }

    const shipping = 5.99;
    const total = subtotal + shipping;

    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;

    document.getElementById('checkout-btn').addEventListener('click', function() {
        // Redirige a la pasarela de pago
        window.location.href = 'resumenCompra.html';
    });
});
