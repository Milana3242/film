let appFilms = {
  root: app.root,
  content: app.content,
  init: function () {
    const films = this.getFilms();
    this.renderFilms(films);
    this.content = document.querySelector('#content');
  },

  getFilms: function () {
    return dataFilms;
  },

  renderFilms: function (films) {
    let str = '';
    films.forEach((item) => {
      str += `<a href='/film-open/film-open.html?id=${item.id}' class='card'>
          <img class='cardImg' src='${item.img}'>
          <p>${item.name}</p>
          <div>Выбрать</div>
          </a>`;
      console.log(item.img);
    });
    this.content.insertAdjacentHTML('beforeend', str);
  },
};

appFilms.init();
