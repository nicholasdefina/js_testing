const array1 = [1, 2, 3, 4];

for (let elem in array1) {
    console.log('here ', elem) // consoles index. on objects will console key.
}

for (let elem of array1) {
    console.log(elem) // consoles element
}

console.log(array1.reduce((accumulator, currentVal) => accumulator - currentVal))

const obj = {
    'thing': 1,
    'a': 2
}


function isValidPassword (pass, username) {
    if (pass.length < 8 || pass.includes(' ') || pass.includes(username)) {
        return false;
    }
    return true
}

function avg(arr) {
    return  (arr.reduce((accumulator, val) => accumulator + val)) / arr.length
}

console.log(avg([1,2,3]))

function isPangram(str) {
    return new Set(str.toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")).size === 26
}

console.log(isPangram('A quick brown fox jumps over the lazy dog'))

function getCard() {
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    randVal = values[Math.floor(Math.random() * values.length)];
    randSuit = suits[Math.floor(Math.random() * suits.length)];
    return {value: randVal, suit: randSuit}
}

console.log(getCard())
console.log(getCard())
console.log(getCard())


function doThrice(func) {
    func();
    func();
    func();
}

function consoleHi() {
    console.log('hello and hi');
}
doThrice(consoleHi)


function isBetweenNums(lowNum, highNum) {
    return function (x) {
        return x > lowNum && x < highNum;
    }
}

// funcs as returns
const checkFour = isBetweenNums(1, 22)
const isBetween = checkFour(4);
console.log(isBetween)

 
arr1 = [1,2,3]
let arr2 = arr1.map(a => a*2)
console.log(arr2);


const arrowFunc = (x) => {return x **2} 
console.log('yess ', arrowFunc(3));

nums = [1,2,3,4,5,6,7,8]

const greaterThan3 = nums.filter(x => x > 3);
const greaterThan4 = nums.filter((x) => {
    return x > 4;
})
console.log(greaterThan3)
console.log(greaterThan4)

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const goodReads = books.filter(b => b.rating > 4.3);
const fantasyReads = books.filter((b) => b.genres.includes('fantasy') || b.genres.includes('short stories'));
console.log(goodReads);
console.log(fantasyReads);

books.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
});



// reduce fun
const votes = ['y', 'y', 'n', 'y', 'n']

const finalTally = votes.reduce((tally, currentVote) => {
    tally[currentVote] = (tally[currentVote] || 0) + 1
    return tally;
}, {}) 

const test = 1 || 0

const ratings = books.reduce((grouping, book) => {
    let key = Math.floor(book.rating);
    if (!grouping[key]) {
        grouping[key] = [];
    }
    grouping[key].push(book.title);
    return grouping;
}, {});


// spread operations
const colors = ['red', 'orange', 'yellow']

function giveColors(a,b) {
    console.log('a ', a);
    console.log('b ', b);
}

const moreColors = ['blue', 'green', 'black']

const combined = [...colors, ...moreColors]

const dog = {
    barks: true,
    legs: 4,
    ears: 'stinky taco'
}

const snake = {
    slithers: true,
    legs: 0
}

const rattlesnake = {
    ...snake,
    rattler: true,
}
console.log(rattlesnake);

const snakeDog = {
    ...snake,
    ...dog,
}

console.log(snakeDog) // legs overwritten by second spread.


// rest (looks like spread operator)

function sum(...nums) {
    return nums.reduce((total, val) => {
        return total + val;
    })
}
console.log(sum(1,2,3,4,5,6,7,78,8))


function names (first, last, ...theRest) {
    console.log(first);
    console.log(last);
    console.log(theRest);
}

names('jim', 'kelly', 'roger', 'dolph', 'maxon')


const multiply = (...nums) => (  // implicit return
    nums.reduce((total, val) => {
        return total * val;
    }))

const multiply2 = (...nums) => {  
    return nums.reduce((total, val) => {
        return total * val;
    })}

console.log(multiply(1,2,3,4,56,6,7,78,8))
console.log(multiply2(1,2,3,4,56,6,7,78,8))

// destructing arrays
const raceResults = ['jim', 'joe', 'jeff', 'cindy', 'charkles', 'ricky']

const [gold, silver, bronze] = raceResults;
console.log(gold, silver, bronze); // unpacks to as many arguments provided.

const [first,,,fourth] = raceResults; // commas let you skip over elems
console.log(first,fourth);

const [winner, ...losers] = raceResults; // can grouped using rest operator
console.log(winner, losers)

const [champion,,...jerks] = raceResults; // can skip and group
console.log(champion, jerks)

// destructuring objects
const runner = {
    name: 'jeff',
    speed: '20 mph',
    shoes: null,
}

const {name, shoes} = runner; // match by key 
console.log(name, shoes);

const {name: firstName} = runner; // recast key as new variable
console.log(firstName);

const {name: first, ...rest} = runner; // collect variables w/rest
console.log(first, rest)


// destructing nested 
const results = [{
    first: 'john',
    last: 'jones',
    country: 'usa',
},
{
    first: 'bill',
    last: 'carter',
    country: 'UK',
},
{
    first: 'roger',
    last: 'martin',
    country: 'japan'
}]

const [,{country}] = results; // , skips first elem, then destructure obj
const [{first: goldMedalWinner}] = results;

console.log(country)
console.log(goldMedalWinner)

// destructure params
const human = {
    first: 'jon',
    last: 'jones',
    country: 'usa',
}

function printName(person) {
    const {first, last} = person;
    console.log(`${first} ${last} is a person!`)
}
printName(human)


function printName2({first, last}) {
    console.log(`${first} ${last} is a person!`)
}

printName2(human)


// computed property in obj
const thing = 'jacket'

const obj = {
    [thing]: 'warm',
    juice: 'tasty'
}
console.log(obj)

const authorization = {
    login() {
        console.log('trying to log in!');
    },
    logout() {
        console.log('trying to log out!');
    },
    name: 'baxter',
    email: 'baxter@gmail.com',
}

console.log(authorization);

// this in object
const person = {
    'name': 'Michael',
    'surname': 'Jordan',
    'nickName': 'Air',
    fullName() {
        const {
            name, 
            surname, 
            nickName
        } = this;
        return `${name} ${nickName} ${surname}`;
    },
    printBio() {
        console.log(`This is the story of ${this.fullName()}`)
    }
}