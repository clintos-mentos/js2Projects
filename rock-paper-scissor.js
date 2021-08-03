//  create the famous game of rock, paper, scissors
// create 3 functions: 1 for userchoice, computer choice, playgame

// userChoice function
const userChoice = choice => {
    choice = choice.toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else if (choice ==='bomb') {
        return choice;
    } else {
        return 'Invalid selection: Please choose rock paper or scissors';
    }
} // console.log(userChoice('Rock'))  //works

// second function - computer generated function
const computerChoice = () => {
    let randomChoice = Math.floor(Math.random()*3)  // 0, 1 or 2
    switch (randomChoice) {
        case 0: return 'rock';
        break;
        case 1: return  'paper';
        break;
        case 2: return 'scissors';
        break;
        default: 'Invalid entry, check random generator';
        break;
    }
}
// console.log(computerChoice()); // works got rock, paper and scissor

// third function - determine the winner 
const determineWinner = (user,pc) => {
    if (user === pc) {
        return 'Game is a Tie!'
    }
    if (user === 'rock') {
        if (pc ==='paper') {
            return 'Computer won because paper covers rock';
        } else {
            return 'User Won because rock smashes scissors';
        }
    }
    if (user === 'paper') {
        if (pc ==='rock') {
            return 'User won becase paper covers rock';
        } else {
            return 'Computer won because scissors cuts paper';
        }
    }
    if (user ==='scissors'){
        if (pc === 'rock') {
            return 'Computer won because rock smashes scissors';
        } else {
            return 'User has won because scissors cuts paper';
        }
    }
    else {
        return 'invalid selection by user, cant determine winner'
    }
} // console.log(determineWinner('scissors','paper'));   //works

// function 4 - actually plays the game and passes all of the functions defined above

const playgame = selection => {
    let user = userChoice(selection);
    let pc = computerChoice();
    console.log(`user choice is ${user}`)
    console.log(`pc choice is ${pc}`)

    console.log(determineWinner(user,pc));
}

// please enter the user choice into the playGame function
playgame('paper');


