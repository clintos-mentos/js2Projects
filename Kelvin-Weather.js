// cinverting weather displayed in Kelvin into farenheit and degrees celsius

// formulas for weather conversion
// 1. celsius = kelvin - 273
// 2. farenheit = (celsius * 9/5) + 32
// 3. newton = celsius * 33/100

const kelvin = 315;
console.log(`${kelvin} - The weather in kelvin`)

// get degrees celsius
let celsius = kelvin - 273;
console.log(`${celsius} - the weather converted from kelvin into degrees celsius`)

// get farenhiet
let farenheit = Math.floor((celsius * 9/5) +32)
console.log(`${farenheit} - The weather converted from degrees celsius into farenheit`)

// get newton
let newton = Math.floor(celsius * 33/100)
console.log(`${newton} - the weather in newton`)