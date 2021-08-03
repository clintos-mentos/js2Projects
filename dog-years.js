//  convert human age into dog years
// the first two years of a dogs life = 10.5 dog years
// thereafter 1 year = 4 dog years

const humanAge = 10;

// calc dog years
const earlyYears = 2;
const dogEarlyYears = 10.5;
const humanDogConversion = 4

// calc dog years 
let dogYearCalc = age => {
    let dogYears = 0
    if (age>0 && age <=2) {
        return dogEarlyYears;
    } else if (age>2) {
        dogYears = dogEarlyYears + ((age - earlyYears) * humanDogConversion);
        return Math.floor(dogYears);
    }
}
console.log(dogYearCalc(10));