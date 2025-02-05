let app = {
  root: null,
  content: null,
  init: function () {
    this.root = document.querySelector('#root');
    this.renderLayout();
    this.content = document.querySelector('#content');
    this.footer = document.querySelector('#footer');
    this.renderHeader();
    this.renderFooter();
  },
  renderLayout: function () {
    let str = `
    <div id='headerWrap'></div>
    <div id='content'></div>
    <div id='footer'></div>`;
    this.root.insertAdjacentHTML('beforeend', str);
  },
  renderHeader: function () {
    const headerWrap = document.querySelector('#headerWrap');
    let str = `
<div class='headerDiv'>
    <nav class='headerNav'>
        <a href='/index.html'>Главная</a>
        <a href='#'>Авторизация</a>
        <a href='#'>Отзывы</a>
    </nav>
    <img src="/img/logo.svg" alt="">
</div>
`;
    headerWrap.insertAdjacentHTML('beforeend', str);
  },
  renderFooter: function () {
    let str = `
  <h1>FOOTER</h1>
  <p>Powered by Milana And Marat</p>
  <img src="/img/logo.svg" alt="">
   `;
    this.footer.insertAdjacentHTML('beforeend', str);
  },
};

const dataFilms = [
  {
    img: '/img/avatar.jpeg',
    name: 'Аватар',
    desk: '  «Аватар» рассказывает историю инвалида войны, бывшего морского пехотинца Джейка Салли, прибывшего на планету Пандора, чтобы работать на ресурсодобывающую мегакорпорацию. Салли получает в своё распоряжение аватара — тело, которым он может управлять, находясь в трансе. Ему удаётся подружиться с разумными жителями планеты, народом На’ви. В конце концов Джейк становится военным вождём племени и объявляет корпорации войну. ',
    price: 20,
    id: 1,
  },
  {
    img: '/img/marvel.jpeg',
    name: 'Марвел',
    desk: 'Человечество на грани уничтожения. На этот раз людям угрожает Альтрон — искусственный интеллект, ранее созданный для того, чтобы защищать Землю от любых угроз. Однако, главной угрозой он посчитал человечество. Международная организация Щ.И.Т. распалась, и теперь мир не способен справиться с таким мощным врагом, потому люди вновь обращаются за помощью к Величайшим Героям Земли — Мстителям. ',
    price: 40,
    id: 2,
  },
  {
    img: '/img/skala.jpeg',
    name: 'Джуманджи',
    desk: 'Пытаясь спасти Спенсера, снова попавшего в игру, туда же отправляются и остальные. К их удивлению, правила Джуманджи изменились, и более того - на этот раз в игру затянуло дедулю Спенсера и его престарелого друга Майло. Чтобы выполнить задания и вернуться домой, друзьям предстоит отправиться в путешествие по ранее неизведанным и таинственным уголкам Джуманджи – от засушливой пустыни до заснеженных гор.',
    price: 30,
    id: 3,
  },
  {
    img: '/img/spiderman.jpg',
    name: 'Человек-паук',
    desk: 'Жизнь и репутация Питера Паркера оказываются под угрозой, поскольку Мистерио раскрыл всему миру тайну личности Человека-паука. Пытаясь исправить ситуацию, Питер обращается за помощью к Стивену Стрэнджу, но вскоре всё становится намного опаснее. ',
    price: 30,
    id: 3,
  },
  {
    img: '/img/stethemjpg.jpg',
    name: 'Форсаж',
    desk: 'Его зовут Брайан, и он — фанат турбин и нитроускорителей. Он пытается попасть в автобанду легендарного Доминика Торетто, чемпиона опасных и незаконных уличных гонок. Брайан также полицейский, и его задание — втереться в доверие к Торетто, подозреваемому в причастности к дерзким грабежам грузовиков, совершаемым прямо на ходу.',
    price: 30,
    id: 3,
  },
  {
    img: '/img/halk.jpg',
    name: 'Халк',
    desk: 'История доктора Брюса Баннера, который ищет лекарство от своего необычного «заболевания», превращающего его во время эмоционального стресса в гигантского зеленого монстра Халка. Находясь в бегах от армии, стремящейся его захватить, Брюс почти находит лекарство, но все старания идут прахом, когда у Халка вдруг появляется новый, невероятно сильный противник.',
    price: 30,
    id: 3,
  },
];

app.init();
