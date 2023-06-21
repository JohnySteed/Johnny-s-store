document.addEventListener("DOMContentLoaded", function() {
  // Получаем текущую корзину из localStorage
  var cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Отображаем содержимое корзины
  var cartList = document.getElementById('cart-list');
  for (var i = 0; i < cart.length; i++) {
    var li = document.createElement('li');
    
    // Создаем элементы для отображения названия, картинки и цены товара
    
    var li = document.createElement('li');
    li.style.backgroundImage = 'url(' + cart[i].image + ')';
    cartList.appendChild(li);

    var nameInput = document.getElementById('name');
    nameInput.value = cart[i].name + ': ' + cart[i].price;
    nameInput.setAttribute('readonly', 'readonly');

  var form = document.getElementById('order-form');
  form.style.backgroundImage = "url('" + cart[0].image + "')";
    cartList.appendChild(li);
  }
  window.addEventListener('error', function(event) {
    console.error('Произошла ошибка:', event.error);
  });
});
function checkForm() {
  var emailInput = document.getElementById('email');
  var addressTextarea = document.getElementById('address');
  var paymentSelect = document.getElementById('payment');

  if (
    emailInput.value.trim() === '' ||
    addressTextarea.value.trim() === '' ||
    paymentSelect.value === ''
  ) {
    alert('Пожалуйста, заполните все поля формы.');
    return false;
  }

  return true;
}

function checkout() {
  if (!checkForm()) {
    return;
  }

  localStorage.removeItem('cart');
  window.location.href = 'index.html';
  alert('Заказ успешно оформлен!');
  return false;
}








