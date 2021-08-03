//  assign a random number from 0 to 7 - and assign an outcome based on their number 
//  this makes them tie a fortune to the respective user

let userName = 'Clint';
let randomNumber = Math.floor(Math.random() * 8);
let eightball = randomNumber;
console.log(`You chose the number ${eightball} from the eightball`);
switch(eightball) {
    case 0 : console.log('It is certain');
   break;
   case 1 : console.log('It is decidedly so');
   break;
   case 2 : console.log('Reply hazy try again');
   break;
   case 3 : console.log('Cannot predict now');
   break;
   case 4 : console.log('Do not count on it');
   break;
   case 5 : console.log('My sources say no');
   break;
   case 6 : console.log('Outlook not so good');
   break;
   case 7 : console.log('Signs point to yes');
   break;
   default : console.log('Are you Harry Potter?');
   break;
}
