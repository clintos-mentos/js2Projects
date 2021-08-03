// create a function that takes in two params for racetime and age 
// age over = 18 is adults, below is youth
//  early race adults get assigned race number of >=1000, else below 1000
// youth race starts at 12.30am regardless

const raceDetails = (raceTime,age) => {
    let raceNumberLate = Math.floor(Math.random()*1001);
    let raceNumberEarly =  raceNumberLate + 1000;    
    if (raceTime === 9.3 && age >=18) {
        return `Your race starts at ${raceTime}0am and your racenumber is ${raceNumberEarly}`;
    } else if (raceTime === 11 && age >=18) {
        return `Your race starts at ${raceTime}:00am and your racenumber is ${raceNumberLate}`;
    } else if (age <18) {
        return 'Welcome Youth, your race starts at 12.30am';
    } else {
        return 'Invalid selection. Check that you entered the correct Race Time';
    }
}
console.log(raceDetails(9.3,17));