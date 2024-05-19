document.addEventListener('DOMContentLoaded', function() {
  const priceInput = document.getElementById('priceInput');

  priceInput.addEventListener('focus', function() {
    priceInput.style.border = '2px solid green';
  });

  priceInput.addEventListener('blur', function() {
    priceInput.style.border = '';
    const price = parseFloat(priceInput.value);
    if (isNaN(price)) return;

    if (price < 0) {
      priceInput.classList.add('error');
      showError();
    } else {
      priceInput.classList.remove('error');
      showPrice(price);
    }
  });

  function showPrice(price) {
    const span = document.createElement('span');
    span.textContent = `Текущая цена: ${price}`;
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.addEventListener('click', function() {
      span.remove();
      priceInput.value = '';
    });
    span.appendChild(closeButton);
    priceInput.insertAdjacentElement('afterend', span); 
    priceInput.style.color = 'green'; 
  }

  function showError() {
    const errorSpan = document.createElement('span');
    errorSpan.textContent = 'Please enter correct price';
    priceInput.insertAdjacentElement('afterend', errorSpan);
  }
});
