// whale talk - takes a phrase and reports only the vowels. u and e vowles are doubled
// eg. phrase = ‘turpentine and turtles’   output = UUEEIEEAUUEE 

// lets try this

let phrase = 'turpentine and turtles';
phrase = phrase.toLocaleLowerCase();
let vowels = ['a','e','i','o','u'];
let whaleTalk = []

for (let i=0; i<phrase.length; i++) {
    for (let j=0; j<vowels.length; j++) {
        if (vowels[j] === phrase[i] ) {
             whaleTalk.push(vowels[j]);
             if (phrase[i] === 'u' || phrase[i] === 'e'){
                 whaleTalk.push(phrase[i])
             }
        }        
    }
}
whaleTalk = whaleTalk.join(' ').toUpperCase();
console.log(whaleTalk)
