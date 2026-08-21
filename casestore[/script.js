// Contador do carrinho
let cartCount = 0;

function addToCart(productName) {
    cartCount++;
    document.querySelector('.cart-count').innerText = cartCount;
    alert(`${productName} foi adicionado ao seu carrinho!`);
}

function openCart() {
    alert(`Seu carrinho possui ${cartCount} item(ns).`);
}

// Filtro de Produtos
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Atualizar botão ativo
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filtrar elementos
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}