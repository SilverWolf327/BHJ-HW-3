class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    let currentWord = this.wordElement.querySelectorAll('.symbol')
    const currentWordArray = [...currentWord];
    
    document.addEventListener('keydown', (event) => {

      this.pressedSymbol = event.key;
      console.log(this.currentSymbol.innerHTML.toLowerCase());
      console.log(this.pressedSymbol)
      console.log(this.currentSymbol.innerHTML.toLowerCase() === this.pressedSymbol.toLowerCase())
        
      console.log('начало проверки')
      if (this.currentSymbol.innerHTML.toLowerCase() !== this.pressedSymbol.toLowerCase()) {
            
        this.fail()
        console.log('нажата не та клавиша!!!')
        
        } else {
            
            this.currentSymbol.classList.remove('symbol_current');
          
            if (currentWordArray.indexOf(this.currentSymbol) < currentWord.length -1) {
              currentWord[
              currentWordArray.indexOf(this.currentSymbol) + 1
              ].classList.add('symbol_current');
            }

          this.success()

        };
      });
  }
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

