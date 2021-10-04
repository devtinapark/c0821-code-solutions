console.log('Lodash is loaded:', typeof _ !== 'undefined');

function Player(name) {
  this.name = name;
  this.hand = [];
  this.score = 0;
}

var player1 = new Player('Mary');
var player2 = new Player('Tina');
var player3 = new Player('ZooZoo');
var player4 = new Player('Zion');
var players = [player1, player2, player3, player4];

var cards = [];
var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
var pairCurrent = [];
var listPairs = [];

for (var i = 0; i < ranks.length; i++) {
  pairCurrent.push(ranks[i]);
  for (var j = 0; j < suits.length; j++) {
    pairCurrent.push(suits[j]);
    listPairs.push(pairCurrent);
    pairCurrent = [];
    pairCurrent.push(ranks[i]);
  }
  pairCurrent = [];
}

function Card(pair) {
  this.rank = pair[0];
  this.suit = pair[1];
}

for (var k = 0; k < listPairs.length; k++) {
  var aCard = new Card(listPairs[k]);
  cards.push(aCard);
}

console.log(cards);

var cardsShuffled = _.shuffle(cards);

console.log(cardsShuffled);

var x = 0;
for (var l = 0; l < players.length; l++) {
  players[l].hand.push(cardsShuffled[x]);
  x++;
  players[l].hand.push(cardsShuffled[x]);
  x++;
}

console.log(players);

function convertRankToScore(rank) {
  var scoreConverted = 0;
  if (rank === 'Ace') {
    scoreConverted = 11;
  } else {
    scoreConverted = 10;
  }
  return scoreConverted;
}

for (var m = 0; m < players.length; m++) {
  players[m].score = 0;
  if (typeof players[m].hand[0].rank === 'number') {
    players[m].score += players[m].hand[0].rank;
  } else {
    players[m].score += convertRankToScore(players[m].hand[0].rank);
  }
  if (typeof players[m].hand[1].rank === 'number') {
    players[m].score += players[m].hand[1].rank;
  } else {
    players[m].score += convertRankToScore(players[m].hand[1].rank);
  }
}

for (var n = 0; n < players.length - 1; n++) {
  var winner;
  var scoreCurrent = 0;
  if (players[n].score > scoreCurrent) {
    if (players[n].score > players[n + 1].score) {
      winner = players[n].name;
      scoreCurrent = players[n].score;
    } else {
      winner = players[n + 1].name;
      scoreCurrent = players[n + 1].score;
    }
  }
}

console.log('winner: ', winner);
