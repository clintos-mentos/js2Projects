// create a function that takes in the amount of sleep you get on a daily basis 
//  and compares it to the ideal hours of sleep and then returns the diff

// 1. idealSleep 
const idealSleep = () => {
    return 8*7  // simple function that will always return 56 hours
} //console.log(idealSleep())  //works output = 56hours

// 2. amount of sleep youre getting per day
const sleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
        case 'monday' : return 6;
        break;
        case 'tuesday': return 8;
        break;
        case 'wednesday': return 7.5;
        break;
        case 'thursday': return 9;
        break;
        case 'friday': return 5.5;
        break;
        case 'saturday': return 10;
        break;
        case 'sunday': return 5;
        break;
        default: return 'enter day correctly please'
    }
} //console.log(sleepHours('friday'));  /works 

// 3 now create a function that calcs the total sleep hrs
const totalSleep = () => {
    let total = sleepHours('monday') + sleepHours('tuesday') + sleepHours('wednesday') + sleepHours('thursday') + sleepHours('friday') + sleepHours('saturday') + sleepHours('sunday');
    return total;
} //console.log(totalSleep()); //works output = 51 hours

// 4. final function is the comparison between the two 

const comparisonSleep = () => {
    let actual = totalSleep();
    console.log(`total hours im actually sleeping is ${actual}`);
    let ideal = idealSleep();
    console.log(`This is the amount of hours you should be sleeping: ${ideal}`);
    let sleepDebt = ideal - actual;
    if (ideal === actual) {
        return 'You\'re perfectly in sync!';
    } else if (ideal > actual) {
        return `Youre not sleeping enough, your sleep debt calc is ${sleepDebt} hours`
    } else {
        return `Well done, you're sleeping enough hours, you have ${sleepDebt} in surplus`
    }    
} 
console.log(comparisonSleep());
