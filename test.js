// using shorthand logical operator to hcek truthy or falsy 
let tool =  'marker';
tool = 0     // eg. of tool being falsy 
let writingUtensil = tool || 'pen';   // hence the logical operator chooses the pen
// console.log(`The ${writingUtensil} is greater than the sword`);

// eg using ternary operator ie ?
let isNightTime = true;
// isNightTime ? console.log('Yes') : console.log('Nope');

// switch keyword - instead of using lengthy if statement
let athletePos = 1;

switch(athletePos) {
    case 1: console.log('Well done, first place');
    break;
    case 2: console.log('Well done, second place');
    break;
    case 3: console.log('Well done, third place');
    break;
    default: console.log('Unlucky on not getting a medal');
    break;
}

// function- no parameters, prints Hello World
const greetWorld = () => 'Hello World';
// console.log(greetWorld());  //works

// function callToVote() - older than 18 returns true, else false
const callToVote = age => {
    if (age >=18) {
        return true;
    } else {
        return false;
    }
}
// console.log(callToVote(18));   //works

// function final grade
const finalGrade = (gr1, gr2, gr3) => {
    total = gr1 + gr2 + gr3;
    avg = total / 3;
    if (avg<50) {
        return 'FAIL!'
    } else {
        return 'PASS!'
    }
    return avg;
}
// console.log(finalGrade(20,40,30));  //works

// roll the dice function 
const rollTheDice = () => {
    let di_1 = Math.floor(Math.random()*6) +1;
    console.log('First roll... '+ di_1);
    let di_2 = Math.floor(Math.random()* 6) + 1;
    console.log('Second roll... ' + di_2);
    return di_1 + di_2;
}
// console.log(rollTheDice());  //works

// function taking earthweight and planet name
const planetWeight = (earthWeight,planet) => {
    planet = planet.toLowerCase();
    switch (planet) {
        case 'mercury': return earthWeight * 0.378;
        break;
        case 'venus': return earthWeight * 0.907;
        break;
        case 'mars' : return earthWeight * 2.36;
        break;
        default: return 'these are the only planets we\'re worried about for now';
        break;
    }
}
// console.log(planetWeight(100,'Mars')); //works

// function to check if truthy or falsy
const truthyOrFalsy = val => {
    val ? console.log(true) : console.log(false);
} // truthyOrFalsy(NaN);

// function that takes in how old someone is, and returns their age back based on the year they typed in

const howOld = (age,anyYear) => {
    let currentYear = new Date(Date()).getFullYear();
    // console.log(currentYear);
    birthYear = currentYear - age;  //2021 - 31 = 1990
    if (anyYear > birthYear && anyYear < currentYear) {
        let youngerAge = age - (currentYear - anyYear);
        return `Hello young one! You were ${youngerAge} years old in the year ${anyYear}`;
    } else if ( anyYear > currentYear){
        futureAge = age + (anyYear - currentYear);
        return `Reporting from the future!!! You will be ${futureAge} years old in the year ${anyYear}`;
    } else {
        // not born yet
        return 'You were not born yet'
    }
}// console.log(howOld(31,1900));


// function checking for even numbers 
const evenOrNot = num => {
    if (num % 2 === 0) {
        return true;
    } else{
        return false;
    }
}
// console.log(evenOrNot(9));

// test something
let arrayStuff = ['clint','carlynn','tove','nina'];
arrayStuff[arrayStuff.length-1] = 'rajabi'
// console.log(arrayStuff)

const flowers = ['peony', 'daffodil', 'marigold']; 

function addFlower(arr,flowerName) {
  return arr.push(flowerName);
} 
// console.log(addFlower(flowers,'another'))
// console.log(flowers)

const myArray = ['clint', 'tove', 'item 2'];
// console.log(myArray[1])

// nested loops 
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i =0; i<bobsFollowers.length;i++) {
    for (let j=0; j<tinasFollowers.length; j++) {
        if (tinasFollowers[j] === bobsFollowers[i]) {
            mutualFollowers.push(tinasFollowers[j]);
        } 
    }
}
//console.log(mutualFollowers)

// using for... of loop syntax
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];

for (let bird of strangeBirds) {
    if (bird==='Parotia') {
        break;
    } else if ( bird === 'Basan') {
        continue;
    }
    //console.log(bird);
}
let spaceship = {
    passengers: {
        passenger1: {
            name: 'Tove',
        surname: 'Byrod',
        flight: 'Cape Town',
        'home city': 'Gothenburg'
        }, 
        passenger2 : {
            name: 'Nina',
            surname: 'Rajabi',
            flight: 'Cape Town',
            'home city': 'Gothenburg'
            }
        },
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  };   
let capFave = spaceship.crew.captain['favorite foods'][0]
//   console.log(capFave)
let passengerNina = spaceship.passengers.passenger2.flight
//   console.log(passengerNina)

// a function call on an object property can permanently mutate the object, 
// even when the object variable is saved as const
const spaceShip = {
    homePlanet : 'Earth',
    color : 'silver'
  };    
  let paintIt = obj => {
     obj.color = 'glorious gold'
   };   
  paintIt(spaceShip);  // alters the color of the spaceship
//   console.log(spaceShip)

  let tryReassignment = obj => {
    obj = {
      identified : false, 
      'transport type' : 'flying'
    }
    // console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
   
  };
  tryReassignment(spaceShip) // The attempt at reassignment does not work.
//   console.log(spaceShip) // Still returns {homePlanet : 'Earth', color : 'red'};
   
  spaceship = {
    identified : false, 
    'transport type': 'flying'
  }; // Regular reassignment still works.

  let spaceshipNew = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
};

for (crewMember in spaceshipNew.crew){
    // console.log(crewMember + ': ' + spaceshipNew.crew[crewMember].name);
}

// this keyword allows methods to access all properties inside of the object.
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `${this.model} has energy level of ${this.energyLevel}`;
    },
}
//console.log(robot.provideInfo());
const robot1 = {
    _energyLevel: 'high',
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
// robot1.recharge()

const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    _age: 37,
    get fullname() {
        if (this._firstName && this._lastName) {
            return `Welcome, ${this._firstName} ${this._lastName}`;
        } else {
            return 'Missing some key information';
        }
    },
    set age(newAge) {
        if (typeof newAge === 'number' && newAge >0 && newAge<140 ) {
            return this._age = newAge;
        } else {
            console.log ('Please pass a number, thats of appropriate age');
        }
    }
  }
// console.log(`get method: ${person.fullname}`);
//person.age = 150;
// person.age
// console.log(person._age);


// using factory functions to create many instances of objects quickly
const monsterFactory = (name, age, energySource, catchPhrase) => {
        return {name,
        age,
        energySource,
        get monsterPhrase () {
            return catchPhrase;
        }
    }
  };
// const pokemonSelector = monsterFactory('pikachu',1000,'lightening','cheeew')
// console.log(pokemonSelector.monsterPhrase);
 // get allows us to access the method inside object in a similar way we do regular internal properties
// console.log(monsterFactory('pikachu',1000,'lightening','cheeew'));

// print keys of the object 
// console.log(Object.keys(person))
// console.log(Object.entries(person))

// create a new object by taking all of the k,v and adding a few more properties
const superHuman = Object.assign({
    occupation: 'developer',
    ambition: 'make a change'
    },
    person);

// console.log(superHuman);

//  higher order functions 
//  invoking functions, passing functions in as parameters, passing functions in as arguements. 

const timeFunRuntime = funcParamter => {
    let t1 = Date.now();
    funcParamter();
    let t2 = Date.now();
    return t2-t1;
}

const addOnetoOne = () => 1+1;

// console.log(timeFunRuntime(addOnetoOne))  //addOnetoOne is passed in as an uninvoked arguement 

// using built-in iterators
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

// using forEach iterator to print out each name of artist in the artists array
// .forEach method is not assigned to a new array
artists.forEach(artist => {
    //console.log(artist)
});

const someNumbers = [5,6,7,8];

const mapNumbers = num => {
    return num *5;
}

const mapFive = someNumbers.map(mapNumbers);
// console.log(mapFive)

const numberAdjustment = someNumbers.map(num =>{
    return num*2;
}) 
// console.log(numberAdjustment); //uninvoked map call

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(num => {
    return typeof num ==='number';
});
// console.log(onlyNumbers);  //5,3.14,100

const jumbledNums = [123, 25, 78, 5, 9]; 
const lessThanTen = jumbledNums.findIndex(num => {
    return num <10;
});
// console.log(lessThanTen) // returns the first index position that satisfies the condition

let sumNumbers = someNumbers.reduce((accumulator,value) => {
    return accumulator + value;
})
// console.log(sumNumbers)


const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

// console.log(words.some(word => {
//   return word.length < 6;
// }));

// CODE CHALLENGES INTERMEDIATE

//1. manually buildng a reverse array
const sentence = ['sense.','make', 'all', 'will', 'This'];

let reverseArray = arr => {
    let list = [];
    for (let i =arr.length -1; i>=0; i--) {
        // console.log(arr[i])
        list.push(arr[i]); 
    }
    console.log(list);
}
// console.log(reverseArray(sentence));
reverseArray(sentence);

// 2. create a function that loops through an array and returns a message per element in the array
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
 
const greetAliens = arr => {
    for (let alien of arr) {
        console.log(`Oh powerful ${alien}, we humans offer our unconditional surrender!`)
    }
}
greetAliens(aliens);

// 3. create a function that loops through an array and returns the word baby before per element in the array

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = arr => {
    for (let baby of arr) {
        console.log('baby '+ baby);
    }
}
convertToBaby(animals);
console.log();


// 4. decline or accept everything with a messsage
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => {
    arr.forEach(politelyDecline);
}
declineEverything(veggies);
console.log();

const acceptEverything = arr => {
    arr.forEach(veg => {
        console.log(`Ok, I guess I'll take some ${veg} thanks`);
    })
}
acceptEverything(veggies);
console.log()

// 5. square all numbers in a given array and return results in a new array
const numbers = [2, 7, 9, 171, 52, 33, 14]; 

const squareNums = numbers.map(num => {
    return num*2;
})
console.log(squareNums);
console.log();

// 6. capitalize all words in the array
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const shoutWords = greetings.map(word => {
    return word.toUpperCase();
}); 
console.log(shoutWords);

// 7. sort array of years 
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

const sortYears = year =>{
    return year.sort().reverse();
}
console.log(sortYears(years));
console.log();

// 8. filter an array by a condition of words in another array and return a unique array 
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

const commonWords = (arr1,arr2) => {
    const list = arr1.filter(words => {
        return arr2.includes(words)
    });
    return list;
}
console.log(commonWords(coolStuff,myStuff));
console.log();


// checking to see if the dinner is vegan, return true if so, else false
const mealVegan = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

const dinnerVegan = arr => {
    return arr.every(food => food.source === 'plant')
    }
console.log(dinnerVegan(mealVegan)); //true 

// check again with an updated array of foods
const mealUpdate = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'lamb', source: 'meat'}];

const allVegan = arr => {
    return arr.every(food => {
        return food.source === 'plant';
    })
}
console.log(allVegan(mealUpdate)); //false coz one of the foods contain 'meat'
console.log();

// sort by number of teeth

const speciesArray = [ 
    {speciesName:'shark', numTeeth:50}, 
    {speciesName:'dog', numTeeth:42}, 
    {speciesName:'alligator', numTeeth:80}, 
    {speciesName:'human', numTeeth:32}
];

const sortTeeth = speciesArray.sort((num1,num2) => {
    return num1.numTeeth - num2.numTeeth;
})
console.log(sortTeeth);
console.log();
//  object property does not have a sort() method!


// find word keys in the array, if not there return -1
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];

const findMyKeys = arr => {
    return arr.findIndex(num => num === 'keys');
}
console.log(findMyKeys(drawer))  // no keys! returns -1
console.log(findMyKeys(randomStuff))  //returns index no 4
console.log();

// create a functio dogFactory - takes 3 parameters:name, type, age

const dogFactory = (nameDog,typeDog,weightDog) => {
    if (typeof nameDog === 'string' && typeof typeDog ==='string' && typeof weightDog === 'number') {
        return {
            nameDog,
            typeDog,
            weightDog
        }
    } else {
        return 'incorrect dog specifications'
    }
}
console.log(dogFactory('chico','pitbull',100));
console.log()

// JAVASCRIPT PRACTICE: ARAYS, LOOPS, OBJECTS, ITERATORS

//factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 

let numbersFactorial = [6,5,4,3,2,1];
let randomNumber = Math.floor(Math.random()*10) +1;  //any number between 1 and 10

const factorial = num => {
    let list =[];
    if (num <=1) {
        return 1
    } else {
        while (num>1) {
            // console.log('before: ' + num);
            list.push(num);
            num -=1;
            // console.log('after: ' + num);
        }
        console.log(list);
        return list.reduce((multiplier,value)=> {
            return multiplier * value;
        })   
    }
};
console.log(factorial(randomNumber));
console.log();

// function that takes two parameters and returns the index of the string passed, specified by letter
// eg subLength('Saturday', 'a'); // returns 6

const subLength = (str, char) => {
    let length = 0;
    const occuranceCount = Array.from(str).filter(c => c.toLowerCase() === char.toLowerCase()).length
    //console.log('occuranceCount: ' + occuranceCount ) // prints 2 for saturday = 2 a's
    if (occuranceCount === 2) {
      const regex = new RegExp(`${char}(.*)${char}`)
      //console.log(regex)
      length = str.match(regex)[0].length  //gets the distance between the two letters that appear
      let test = str.match(regex)[0]  // aturda
      let test1 = str.match(regex)   //[ 'aturda', 'turd', index: 1, input: 'Saturday', groups: undefined ]    
    //   console.log(test)
    //   console.log(test1)
    }
    console.log(length) 
    return length;

  }
// subLength('Saturday','a')

subLength('Saturday', 'a'); // returns 6
// console.log(subLength('summer', 'm')); // returns 2
// console.log(subLength('digitize', 'i')); // returns 0
// console.log(subLength('cheesecake', 'k')); // returns 0

// groceries function 
//groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
//groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
//groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'

let testGrocery1 = [{item: 'Cheese Balls'}];
let testGrocery2 = [{item: 'Bread'}, {item: 'Butter'}]
let testGrocery3 = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]

const groceryItem = arr => {
    // console.log(arr[0].item)
    let newArr = [];
    for (let i =0; i< arr.length; i++) {
        newArr.push(arr[i].item);
        console.log(newArr);
    }
    if (newArr.length < 2) {
        return newArr.join('');  //gets rid of the array and returns them individually
    } 
    else {
      let final = newArr.pop();
      console.log('popped this: ' +final)
      console.log('updated newArray excludes the popped element: '+ newArr)
      return newArr.join(', ') + ' and ' + final;  //coz now final is no longer part of newArr
    }
}
//console.log(groceryItem(testGrocery1));
console.log(groceryItem(testGrocery3));
// console.log(groceryItem(testGrocery3));
  
testName = ['clint'];
console.log(testName.join(', ')); // good to know!

let mobile = {
    brand: 'Samsung',
    model: 'Galaxy Note 9'
  };
   
  for (let key in mobile) {
    console.log(`${key}: ${mobile[key]}`);
    mobile[key='test'] = 5;
    console.log(`${key}: ${mobile[key]}`);

  }
  delete mobile 

//factory fn - returns an object
const factoryFn = (name,age,birthplace)=>{
    return {
        name,
        age,
        birthplace,
        sayHello(){
            return 'Hello!';
        }        
    }
}

console.log(factoryFn('clint','31','cape town'));

// shorthand properties
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }


const firstName = 'Clint';
const details = {firstName}
console.log(details)

//callback fn - passed as arg in fn

const evenFunc = num => {
    if (num %2 === 0) {
        return num;
    }
    else {
        return 'not even num'
    }
}

const anotherFunc = (evenNum,num) => {
    const tester = evenNum(num);
    return tester
}

console.log(anotherFunc(evenFunc,9))

let array1 = [5,6,7];
let array2 = [10,9,8];

mapTwoArrays = array1.map((arr,index) => {
    return arr +array2[index];
})

console.log(mapTwoArrays)

// filter based on two arrays 

let array3 = [5,6,8]  //only 8 doesnt match

let filterArray = array1.filter(num=>array3.includes(num))
console.log(filterArray);




