function displayGames(filterGenre, maxGamesToShow) {
  var gameList = document.getElementById('game-list');
  gameList.innerHTML = '';

  // Фильтрация игр по жанру, если указан фильтр
  var filteredGames = games;
  if (filterGenre !== 'all') {
    filteredGames = games.filter(function (game) {
      return game.genre === filterGenre;
    });
  }

  // Получение определенного количества игр для отображения
  var gamesToShow = filteredGames.slice(0, maxGamesToShow);

  // Создание элементов для каждой игры и добавление их в контейнер
  for (var i = 0; i < gamesToShow.length; i++) {
    var game = gamesToShow[i];

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
    buyButton.onclick = function (gameId) {
      return function () {
        addToCart(gameId);
      };
    }(game.id);
    gameContainer.appendChild(buyButton);

    gameList.appendChild(gameContainer);
  }
}

// Получение элементов DOM
var genreFilter = document.getElementById('genre');
var gameList = document.getElementById('game-list');

// Обработчик события изменения фильтра
function filterGames() {
  var selectedGenre = genreFilter.value; // Получаем выбранный жанр

  // Фильтрация игр по жанру
  var filteredGames = games;
  if (selectedGenre !== 'all') {
    filteredGames = games.filter(function (game) {
      return game.genre === selectedGenre;
    });
  }

  // Генерация HTML для отображения отфильтрованных игр
  var gameHTML = '';
  for (var i = 0; i < filteredGames.length; i++) {
    var game = filteredGames[i];
    gameHTML += '<div class="game">';
    gameHTML += '<img src="' + game.image + '" alt="' + game.name + '">';
    gameHTML += '<h3>' + game.name + '</h3>';
  
    // Проверка, если игра бесплатна, выводить "Бесплатно" вместо цены
    if (game.price === 'Бесплатно') {
      gameHTML += '<p>Бесплатно</p>';
    } else {
      gameHTML += '<p>Цена: ' + game.price + ' руб.</p>';
    }
    gameHTML += '<p>' + game.description + '</p>';
    gameHTML += '<a href="#" class="buy-button">Купить</a>';
    gameHTML += '</div>';
  }

  // Вставка сгенерированного HTML в список игр
  gameList.innerHTML = gameHTML;
}

// Определение текущей страницы
var currentPage = window.location.pathname;

// Условие для отображения разного количества игр на разных страницах
if (currentPage === '/catalog.html') {
  displayGames('all', games.length); // Отображаем все доступные игры на странице "catalog.html"
} else {
  displayGames('all', 3); // Отображаем 3 игры на остальных страницах
}

// Инициализация фильтрации игр при загрузке страницы
filterGames();
