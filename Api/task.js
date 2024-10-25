fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(data => {
        const cartContainer = document.getElementById('cart-container');
        data.carts.forEach(cart => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>Cart ID: ${cart.id}</h3>
                <p>User ID: ${cart.userId}</p>
                <p>Items:</p>
                <ul>
                    ${cart.items.map(item => `
                        <li>${item.productName} - Quantity: ${item.quantity} - Price: $${item.price}</li>
                    `).join('')}
                </ul>
                <p>Total Cost: $${cart.total}</p>
            `;
            cartContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
