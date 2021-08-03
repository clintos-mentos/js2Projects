//  will create four functions for the number guesser game

// generateTarget() - will be called at thr start of each new round (the secret Target Number)
const secretTarget = () => {
    secretNumber = Math.floor(Math.random()*10);
    return secretNumber;
} //works
// console.log(generateTarget());

const humanTarget = humanGuess=> {
    if (humanGuess >0 && humanGuess <=9) {
        return humanGuess;
    } else {
        return 'Invalid selection, choose number between 0 and 9';
    }
}
// console.log(humanTarget(8));

const computerTarget = () => {
    let computerGuess= Math.floor(Math.random()*10);
    return computerGuess;
}

// compareGuesses function -comparing human to computer guess and seeing which is closest to the secretNum
const compareGuesses = humanNumber => {

    humanGuess = humanTarget(humanNumber);
    console.log(`${humanGuess}: is the human guess`)
    
    let computerGuess = computerTarget();
    console.log(`${computerGuess}: is the computer generated guess`)

    let secretNum = secretTarget();
    console.log(`${secretNum}: is the secret number`);

    let humanDiff = Math.abs(humanGuess - secretNum);
    let computerDiff = Math.abs(computerGuess - secretNum);

    // diff 
    if (humanDiff < computerDiff) {
        return `Human has won! Because ${humanGuess} is closer than ${computerGuess} to the secretnum of ${secretNum}`;
    } else if ( humanDiff === computerDiff) {
        return 'Humans match Computers!';
    } else {
        return `Computer has won! Because ${computerGuess} is closer than ${humanGuess} to the secretnum of ${secretNum}`
    }
}
console.log(compareGuesses(8))
