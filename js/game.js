var games = [
  {
    id:1,
    name: 'Apex Legends',
    price: 'Бесплатно',
    description: 'Apex Legends - игра в жанре многопользовательского геройского шутера от первого лица и королевской битвы.',
    genre: 'action',
    image: 'images/apexlegends.jpeg'
  },
  {
    id:2,
    name: 'Fortnite',
    price: "Бесплатно",
    description: 'Fortnite - популярная бесплатная игра в жанре "королевской битвы" с ярким стилем и возможностью строить и сражаться.',
    genre: 'action',
    image: 'images/Fortnite.jpg'
  },
  {
    id:3,
    name: 'Minecraft',
    price: "Бесплатно",
    description: 'Minecraft - креативная песочница, где игроки могут строить, исследовать и выживать в блочном мире с бесконечными возможностями.',
    genre: 'platformer',
    image: 'images/minecraft.jpg'
  },
  {
    id:4,
    name: 'Black Desert',
    price: 500,
    description: 'MMORPG в открытом мире со зрелищными боями и невероятными приключениями.',
    genre: 'mmorpg',
    image: 'images/Black Desert.jpg'
  },
  {
    id:5,
    name: 'SMITE',
    price: 'Бесплатно',
    description: 'Многопользовательская игра в жанре MOBA с видом от третьего лица.',
    genre: 'mmorpg',
    image: 'images/SMITE.jpg'
  },
  {
    id:6,
    name: 'Terraria',
    price: 300,
    description: 'Terraria - креативная песочница, где игроки могут строить, исследовать и выживать.',
    genre: 'platformer',
    image: 'images/Terraria.jpg'
  },
  {
    id:7,
    name: 'Neverwinter',
    price: 'Бесплатно',
    description: 'MMORPG с активной боевой системой по вселенной Dungeon & Dragons.',
    genre: 'mmorpg',
    image: 'images/Neverwinter.png'
  },
  {
    id:8,
    name: 'Fallout: New Vegas',
    price: 100,
    description: 'Постапокалиптическая ролевая видеоигра в открытом мире.',
    genre: 'platformer',
    image: 'images/game1.jpg'
  },
  {
    id:9,
    name: 'METRO EXODUS',
    price: 2400,
    description: 'Компьютерная игра в жанре шутера от первого лица.',
    genre: 'action',
    image: 'images/game2.jpeg'
  },
  {
    id:10,
    name: 'Destiny 2',
    price: 1200,
    description: 'Экшен-MMO в едином развивающемся мире, к которому вы с друзьями можете присоединиться где и когда угодно.',
    genre: 'mmorpg',
    image: 'images/Destiny 2.jpg'
  },
  {
    id:11,
    name: 'FIFA 23',
    price: 2500,
    description: 'FIFA 23 — компьютерная игра в жанре спортивного симулятора, 30-я в серии FIFA.',
    genre: 'sport',
    image: 'images/fifa.jpeg'
  },
  {
    id:12,
    name: 'CarX Drift Racing Online',
    price: 1200,
    description: 'CarX Drift Racing Online - это реалистичная физика автомобилей, детальная кастомизация и настройка параметров авто, разнообразные локации как городские, так и специальные гоночные треки, система винилов, открытые онлайн комнаты и соревнования вкупе с абсолютно новой графикой!',
    genre: 'sport',
    image: 'images/CarX Drift Racing Online.jpg'
  },
  {
    id:13,
    name: 'Wreckfest',
    price: 2500,
    description: 'Wreckfest, ранее известная также под названиями Next Car Game и Next Car Game: Wreckfest — гоночная игра в стиле гонки на выживание.',
    genre: 'races',
    image: 'images/Wreckfest.jpeg'
  },
  {
    id:14,
    name: 'Warhammer 40,000: Boltgun',
    price: 1000,
    description: 'Вас ждёт ураганная стрельба в стилистике классических шутеров 90-х годов во вселенной Warhammer 40 000.',
    genre: 'arcade',
    image: 'images/Warhammer 40,000 Boltgun.jpg'
  },
  {
    id:15,
    name: 'Only Up!',
    price: 200,
    description: 'Вы когда-нибудь хотели прогуляться пешком до облаков? Отправляйтесь в захватывающее путешествие в Only UP! Исследуя огромный мир, полный секретов и тайн, вам предстоит добраться как можно выше, и самое интересное начинается выше облаков…ыы',
    genre: 'arcade',
    image: 'images/Only Up!.jpg'
  },
  {
    id:16,
    name: 'Car Mechanic Simulator 2021',
    price: 2200,
    description: 'Создайте собственную империю по обслуживанию автомобилей. Не бойтесь замарать руки в мире высоко реалистичного симулятора с тщательно проработанными деталями. Посетите аукционный дом, где можно покупать машины в разном состоянии.',
    genre: 'races',
    image: 'images/Car Mechanic Simulator 2021.jpg'
  },
  {
    id:17,
    name: 'Vampire Survivors',
    price: 200,
    description: 'Пачками косить порождений ночи и дожить до рассвета! Vampire Survivors — казуальная игра в стиле готического хоррора с элементами упрощенного рогалика. Здесь каждое ваше решение может вызвать лавину последствий для орд монстров, с которыми вам предстоит.',
    genre: 'arcade',
    image: 'images/Vampire Survivors.jpg'
  },
  {
    id:18,
    name: 'Assetto Corsa Competizione',
    price: 3200,
    description: 'Assetto Corsa Competizione — новая видеоигра, выпущенная самим чемпионатом Blancpain GT Series. Выдающееся качество симуляции позволяет прочувствовать атмосферу гонок FIA GT3 и вступить в борьбу против официальных пилотов на автомобилях и трассах реального.',
    genre: 'races',
    image: 'images/Assetto Corsa Competizione.jpg'
  },
  {
    id:19,
    name: 'PAYDAY 2',
    price: 500,
    description: 'Кооперативный экшн-шутер для четверых игроков, который снова позволяет игрокам надеть маски оригинальной банды PAYDAY - Даллас, Хокстон, Чейнс и Вулф, которые прибыли в Вашингтон для новой крутой серии преступлений.',
    genre: 'action',
    image: 'images/PAYDAY 2.jpg'
  },
  {
    id:20,
    name: 'Mortal Online 2',
    price: 1000,
    description: 'Постоянный мир песочницы. Без классов и уровней. Тренируйте навыки, которые вы хотите для своей собственной уникальной сборки. Торговля, экономика и жилье, управляемые игроками. Миллионы комбинаций крафта. Иммерсивный бой от первого лица. Исследование. Боссы. Полный лут, полное PvP. Мир Нефа твой - кем ты будешь?.',
    genre: 'mmorpg',
    image: 'images/Mortal Online 2.jpg'
  },
  {
    id:21,
    name: 'DJMAX RESPECT V',
    price: 5500,
    description: 'DJMAX RESPECT V — это новейшая игра от создателей признанной критиками франшизы ритм-игр DJMAX. Наслаждайтесь треками популярных исполнителей, таких как Marshmello, Porter Robinson и Yukika, эксклюзивными музыкальными клипами в формате Full HD, сетевым многопользовательским режимом, новыми игровыми режимами и более!.',
    genre: 'sport',
    image: 'images/DJMAX RESPECT V.jpg'
  },
  {
    id:22,
    name: 'Cities: Skylines',
    price: 2500,
    description: 'Cities: Skylines предлагает по-новому взглянуть на классический жанр градостроительного симулятора. Эта игра как нельзя лучше передает возникающие перед градоначальником трудности и позволяет создать настоящий мегаполис, одновременно привнося в игру приятные новшества.',
    genre: 'strategies',
    image: 'images/Cities Skylines.jpg'
  },
  {
    id:23,
    name: 'Mount & Blade II: Bannerlord',
    price: 1800,
    description: 'Это стратегическая ролевая игра. Ваш персонаж будет плести интриги, заниматься ремеслами, торговать и воевать в огромной средневековой «песочнице». Командуйте воинами в режиме реального времени. Сражайтесь с видом от первого или третьего лица.',
    genre: 'strategies',
    image: 'images/Mount & Blade II Bannerlord.jpg'
  }
  
];
