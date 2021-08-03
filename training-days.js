// create functions that respond to the event and the amount of days needed to train

const randomEvent = () =>{
    const randomNum = Math.floor(Math.random()*3);
    switch (randomNum) {
        case 0 : return 'marathon';
        break;
        case 1: return 'triathlon';
        break;
        case 2: return 'pentathlon';
        break;
        default: return 'something is seriously wrong'
    }
} // console.log(randomEvent()); //works

// 2. create a function that connects to the random number and outputs days to train

const daysToTrain = event => {
    event = randomEvent();
    // console.log(event);
    let days = 0;
    if (event === 'marathon') {
        days = 50;
        return `${event} and needs ${days} days to train`;
    } else if (event === 'triathlon') {
        days = 100;
        return `${event} and needs ${days} days to train`;
    } else if( event === 'pentathlon') {
        days =200;
        return `${event} and needs ${days} days to train`;
    } else {
        return 'Something wrong!'
    }
} // console.log(daysToTrain()); //works

let names = ['clint','carlynn','tove','nina'];

const nametoEvent = nameRunner => {
    for (let i=0; i<nameRunner.length; i++) {
        console.log(`${nameRunner[i]} is running ` + daysToTrain());
    }
}
nametoEvent(names);
