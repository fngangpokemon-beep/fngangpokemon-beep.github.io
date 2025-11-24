// cart.js
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartDiv = document.getElementById('cart-items');
    let total = 0;

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p class="empty-cart">Ваш кошик порожній. <a href="catalog.html">Перейти до каталогу</a></p>';
        return;
    }

    let html = '';
    cart.forEach((item, index) => {
        if (!item.quantity) item.quantity = 1;
        html += `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong><br>
                ${item.price} ₴ x ${item.quantity}
            </div>
            <div>
                <button onclick="changeQty(${index}, -1)">-</button>
                <button onclick="changeQty(${index}, 1)">+</button>
                <button onclick="removeItem(${index})" style="background:#ff6b6b;color:white;border:none;padding:5px 10px;border-radius:5px;">Видалити</button>
            </div>
        </div>`;
        total += item.price * item.quantity;
    });

    html += <div class="cart-total">Загальна сума: ${total} ₴</div>;
    html += '<a href="#" class="checkout-button" onclick="checkout(event)">Оформити замовлення</a>';
    html += '<br><br><button onclick="clearCart()">Очистити кошик</button>';

    cartDiv.innerHTML = html;
}

function changeQty(index, value) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += value;
    if (cart[index].quantity <= 0) cart[index].quantity = 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function removeItem(index) {
    if (confirm("Ви впевнені, що хочете видалити товар?")) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}

function clearCart() {
    if (confirm("Очистити весь кошик?")) {
        localStorage.removeItem('cart');
        displayCart();
    }
}

function checkout(event) {
    event.preventDefault();
    alert("✅ Замовлення успішно оформлено!");
    localStorage.removeItem('cart');
    displayCart();
}

window.onload = displayCart;
