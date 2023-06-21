// Функция для отображения списка игр с учетом фильтра
function displayGames(filterGenre) {
  var gameList = document.getElementById('game-list');
  gameList.innerHTML = '';

  // Фильтрация игр по жанру, если указан фильтр
  var filteredGames = games;
  if (filterGenre !== 'all') {
    filteredGames = games.filter(function(game) {
      return game.genre === filterGenre;
    });
  }

  // Создание элементов для каждой игры и добавление их в контейнер
  for (var i = 0; i < filteredGames.length; i++) {
    var game = filteredGames[i];

    // Создание элементов для отображения информации об игре
    var gameContainer = document.createElement('div');
    gameContainer.className = 'game';

    var gameImage = document.createElement('img');
    gameImage.src = game.image;
    gameImage.alt = game.name;
    gameContainer.appendChild(gameImage);

    var gameName = document.createElement('h3');
    gameName.textContent = game.name;
    gameContainer.appendChild(gameName);

    var gamePrice = document.createElement('p');
    if (game.price === 'Бесплатно') {
      gamePrice.textContent = 'Бесплатно';
    } else {
      gamePrice.textContent = 'Цена: ' + game.price + ' руб.';
    }
    gameContainer.appendChild(gamePrice);

    var gameDescription = document.createElement('p');
    gameDescription.textContent = game.description;
    gameContainer.appendChild(gameDescription);

    var buyButton = document.createElement('a');
    buyButton.href = '#';
    buyButton.className = 'buy-button';
    buyButton.textContent = 'Купить';
    buyButton.onclick = function(gameId) {
      return function() {
        addToCart(gameId);
      };
    }(game.id);
    gameContainer.appendChild(buyButton);

    gameList.appendChild(gameContainer);
  }
}


// Изначально отображаем все игры без фильтра
displayGames('all');

// Функция для обработки выбора фильтра
function filterGames() {
  var genreSelect = document.getElementById('genre');
  var selectedGenre = genreSelect.value;
  displayGames(selectedGenre);
}

if (currentPage === '/index.html') {
  displayGames('all', games.length); // Отображаем все доступные игры на странице "catalog.html"
} else {
  displayGames('all', 3); // Отображаем 3 игры на остальных страницах
}
