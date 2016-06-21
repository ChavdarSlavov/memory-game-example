import { shuffle, clone } from 'lodash';


export default class Deck{

  static get suits(){
    return clone(['club', 'diamond', 'heart', 'spade']);
  }

  static get ranks(){
    return clone(['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']);
  }

  constructor(ranks = Deck.ranks, suits = Deck.suits){
    this._ranks = ranks;
    this._suits = suits;
    this._cards = this._generateCards(ranks, suits);
  }

  _generateCards(ranks, suits){
    // Don't do this never ever ever:
    return ranks.map((rank) => suits.map((suit) => rank + suit)).reduce((a, b) => a.concat(b), []);
  }

  shuffle(times = 1){
    for (let i = 0; i < times; i++){
      this._cards = shuffle(this._cards);
    }
  }

  getCards(){
    return clone(this._cards);
  }

  draw(count = 1){
    return this._cards.splice(-count, count);
  }

  toString(){
    return this._cards.join(' ');
  }

}
