// Функция для добавления товара в корзину
function addToCart(gameId) {
  // Получаем текущую корзину из localStorage (если она есть) или создаем пустой массив
  var cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Находим выбранную игру по ее идентификатору
  var selectedGame = games.find(function (game) {
    return game.id === gameId;
  });

  if (selectedGame) {
    // Создаем объект товара
    var item = {
      name: selectedGame.name,
      image: selectedGame.image,
      price: selectedGame.price
    };

    // Добавляем товар в корзину
    cart.push(item);

    // Сохраняем обновленную корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Обновляем отображение корзины
    updateCartDisplay();

    // Оповещаем пользователя о добавлении товара в корзину
    alert('Товар добавлен в корзину!');
  }
}

// Функция для обновления отображения корзины
function updateCartDisplay() {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  var cartList = document.getElementById('cart-list');

  // Очищаем отображение корзины
  cartList.innerHTML = '';

  // Проверяем, есть ли товары в корзине
  if (cart.length === 0) {
    var emptyCartMessage = document.createElement('li');
    emptyCartMessage.textContent = 'Корзина пуста';
    cartList.appendChild(emptyCartMessage);
  } else {
    // Создаем элемент списка для каждого товара в корзине
    for (var i = 0; i < cart.length; i++) {
      var listItem = document.createElement('li');

      // Создаем элементы для отображения информации о товаре
      var itemImage = document.createElement('img');
      itemImage.src = cart[i].image;
      itemImage.alt = cart[i].name;
      listItem.appendChild(itemImage);

      var itemName = document.createElement('span');
      itemName.textContent = cart[i].name;
      listItem.appendChild(itemName);

      var itemPrice = document.createElement('span');
      itemPrice.textContent = '\n' + cart[i].price; // Добавляем перенос строки перед ценой
      listItem.appendChild(document.createElement('br')); // Создаем элемент переноса строки
      listItem.appendChild(itemPrice);

      cartList.appendChild(listItem);
    }
  }
}


// Получаем корзину из localStorage
var cart = JSON.parse(localStorage.getItem('cart')) || [];
var cartList = document.getElementById('cart-list');

// Обновляем отображение корзины
updateCartDisplay();

