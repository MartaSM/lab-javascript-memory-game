var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var newCardsArr = [];
    for (i=0; i<cardsArr.length; i++) {
    var random = Math.floor(Math.random()*cardsArr.length);
    if (cardsArr[random] === "") {
      i--;
      continue;
    }
    newCardsArr.push(cardsArr[random]);
    cardsArr[random] = "";
    }
    return newCardsArr;
    };

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    if(firstCard === secondCard){
        this.pairsGuessed++;
        return true;
    } else {
        return false;
    }
}

MemoryGame.prototype.finished = function () {
if (this.pairsGuessed !== 12){
    return false;
} else {
    return true;
}
};
