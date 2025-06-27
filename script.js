document.getElementById('makeup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const checkboxes = document.querySelectorAll('input[name="products"]:checked');
    const selectedProducts = Array.from(checkboxes).map(cb => cb.value);
    const resultDiv = document.getElementById('result');
    
    if (selectedProducts.length > 0) {
        resultDiv.innerHTML = `Seu look inclui: <strong>${selectedProducts.join(', ')}</strong>. Você está pronta para brilhar!`;
    } else {
        resultDiv.innerHTML = 'Escolha pelo menos um produto para criar seu look!';
    }
});