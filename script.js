document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    { img: "assets/alazar-kassahun-HBbjafcF3oc-unsplash.png", name: "1" },
    { img: "assets/astronaut-11080_1280.png", name: "2" },
    { img: "assets/astronaut-1784245_1280.png", name: "3" },
    { img: "assets/astronomy-1867616_1280.png", name: "4" },
    { img: "assets/bence-halmosi-NnzyZOSnUjc-unsplash.png", name: "5" },
    { img: "assets/billy-huynh-W8KTS-mhFUE-unsplash.png", name: "6" },
    { img: "assets/alazar-kassahun-HBbjafcF3oc-unsplash.png", name: "1" },
    { img: "assets/astronaut-11080_1280.png", name: "2" },
    { img: "assets/astronaut-1784245_1280.png", name: "3" },
    { img: "assets/astronomy-1867616_1280.png", name: "4" },
    { img: "assets/bence-halmosi-NnzyZOSnUjc-unsplash.png", name: "5" },
    { img: "assets/billy-huynh-W8KTS-mhFUE-unsplash.png", name: "6" },
  ];

  cardArray.sort(() => 0.5 - Math.random())
  
  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let el = document.getElementById('clicks-counter');
  let cardsChosen = []
  let cardsChosenId = []
  let cardWon = []
  let clicks = 0;

 const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'assets/back.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard)
      card.addEventListener('click', incrementClicks, 1000)
      grid.appendChild(card);
    }
  }

  const incrementClicks = () => {
    clicks += 1;
    el.innerText =  clicks;

  }

  const checkForMatch = () => {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      cards [optionOneId].setAttribute('src', 'assets/blank.png')
      cards [optionTwoId].setAttribute('src', 'assets/blank.png')
      cardWon.push(cardsChosen)    
    } else {
      cards [optionOneId].setAttribute('src', 'assets/back.png')
      cards [optionTwoId].setAttribute('src', 'assets/back.png')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardWon.length
    if (cardWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'All done!'
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }
  createBoard();

});
