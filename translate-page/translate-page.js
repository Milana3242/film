const trPageApp = {
  init: function () {
    this.content = document.querySelector('#content');
    this.words = this.getWords();
    // this.words.sort((a, b) => a.dificult - b.dificult);
    this.renderDiv();
    this.renderbtnEnd();
    this.renderRadioBtn();
    this.index = 0;
    this.renderFirstWordEndSentense((this.index = 0));
    this.addEventListeners();
  },
  getWords: function () {
    return [
      {
        eng: 'home',
        rus: 'дом',
        textRus: 'Я пошел домой',
        textEng: 'I go home',
        dificult: 1,
      },
      {
        eng: 'pen',
        rus: 'ручка',
        textRus: 'Я пишу ручкой',
        textEng: 'I write with a pen ',
        dificult: 1,
      },
      {
        eng: 'table',
        rus: 'стол',
        textRus: 'Я сижу за столом',
        textEng: 'I sit at the table',
        dificult: 1,
      },
      {
        eng: 'computer',
        rus: 'компьютер',
        textRus: 'Компьютер лучший друг',
        textEng: 'Computer is a best friend',
        dificult: 1,
      },
      {
        eng: 'tea',
        rus: 'чай',
        textRus: 'Марат просит чай',
        textEng: 'Marat asks for tea',
        dificult: 1,
      },
    ];
  },

  renderFirstWordEndSentense: function (a) {
    document.querySelector('.render-div-word').innerHTML = this.words[a].eng;
    document.querySelector('.render-div-sentense').innerHTML =
      this.words[a].textEng;
    document.querySelector('.render-div-translate').innerHTML =
      this.words[a].rus;
  },

  renderNextWordEndSentense: function (a) {
    document.querySelector('.render-div-word').innerHTML = this.words[a].eng;
    document.querySelector('.render-div-sentense').innerHTML =
      this.words[a].textEng;
    document.querySelector('.render-div-translate').innerHTML =
      this.words[a].rus;
  },

  renderDiv: function () {
    let str = `  
    <div class='render-div noselect'>
            Слово на английском:<span class='render-div-word'></span>
        <div class='render-div-button_sen noselect'>
            Показать в предложении:<span class='render-div-sentense none'></span>
        </div>
        <div class='render-div-button_tr noselect'>
            Показать перевод:<span class='render-div-translate none'></span>
        </div>
    </div>
    `;
    this.content.insertAdjacentHTML('beforeend', str);
  },

  addEventListeners: function () {
    document.querySelector('.render-div-button_sen').onclick = function () {
      document.querySelector('.render-div-sentense').classList.toggle('none');
    };
    document.querySelector('#btn').onclick = function () {
      document.querySelector('.render-div-translate').classList.toggle('none');
      document.querySelector('.radio').classList.toggle('none');
      if (!document.querySelector('.radio').classList.contains('none')) {
        trPageApp.getCheckedInput();
      }
    };
  },

  renderbtnEnd: function () {
    let str = `<button id='btn' class='btn-end'>Показать</button>
`;
    this.content.insertAdjacentHTML('beforeend', str);
  },

  renderRadioBtn: function () {
    let str = `
    <div class='radio none'>
      <h2 class='time'>Выберите сложность:</h2>
      <ul class="list-check">
      <li class="list-check__item">
        <label class="list-check__label">
          <input type="radio" name="dif" value='1' />
          <span class="label-text">1</span>
        </label>
      </li>
      <li class="list- check__item">
        <label class="list-check__label">
          <input type="radio" name="dif" value='2' />
          <span class="label-text">2</span>
        </label>
      </li>
      <li class="list- check__item">
        <label class="list-check__label">
          <input type="radio" name="dif" value='3'/>
          <span class="label-text">3</span>
        </label>
      </li>
      <li class="list- check__item">
        <label class="list-check__label">
          <input type="radio" name="dif" value='4'/>
          <span class="label-text">4</span>
        </label>
      </li>
    </ul>
    </div>
`;

    this.content.insertAdjacentHTML('beforeend', str);
  },

  getCheckedInput: function () {
    let dif = document.querySelectorAll('input[type="radio"]');
    if (dif == null) return alert('Вы не выбрали параметры!');
    dif.forEach((item) => item.addEventListener('click', this.nextWord));
  },

  nextWord: function () {
    let dif = document.querySelector('input[name="dif"]:checked');
    if (dif == null) return alert('Вы не выбрали параметры!');
    if (trPageApp.index + 1 === trPageApp.words.length) {
      trPageApp.words.sort((a, b) => a.dificult - b.dificult);
      trPageApp.index = 0;
    }
    trPageApp.renderNextWordEndSentense(++trPageApp.index);
    let word = document.querySelector('.render-div-word').innerHTML;
    let a = trPageApp.words.find((item) => item.eng == word);
    trPageApp.words[trPageApp.words.indexOf(a)] = {
      ...a,
      dificult: +document.querySelector('input[name="dif"]:checked').value,
    };
    console.log('a', a);
    console.log(trPageApp.words);
    trPageApp.hideButton();
  },

  hideButton: function () {
    document.querySelector('.render-div-translate').classList.toggle('none');
    document.querySelector('.radio').classList.toggle('none');
    document.querySelector('.render-div-sentense').classList.add('none');
    document.querySelector('input[name="dif"]:checked').checked = false;
  },
};

trPageApp.init();
