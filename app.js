document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Hindsight Glasses', description: 'See what you should have done!', price: 'Priceless' },
        { name: 'Skyhooks', description: 'Keep your stuff in the air!', price: 'Out of this world' },
        { name: 'Invisibility Cloak', description: 'Hide from everyone!', price: 'Not for sale' },
        { name: 'Time Machine', description: 'Travel to any point in time!', price: 'Out of stock' },
        { name: 'Teleportation Device', description: 'Be anywhere instantly!', price: 'Coming soon' }
    ];

    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        `;
        productList.appendChild(productElement);
    });
});
