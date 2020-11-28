
const makeDeck = function() {
    return {
        deck: [],
    drawnCards: [],
    suits: ['Spades', 'Hearts', 'Diamonds', 'Clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    newDeck() {
        const { deck, suits, values } = this;
        for (let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({ value, suit })
            }
        }
    },
    drawCard() {
        const drawn = this.deck.pop();
        this.drawnCards.push(drawn);
        return drawn;
    },
    drawMultipleCards(numCards) {
        const drawnCards = [];
        for (let i = 0; i < numCards; i++) {
            cards.drawnCards(this.drawCard());
        }
        return drawnCards;
    },
    shuffle() {
        const { deck } = this;
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    },
    }

}