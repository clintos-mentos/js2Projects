let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//1. split string up into array
let storyArray = story.split(' ');
// console.log(storyArray);
// console.log('story array words: '+ storyArray.length); //188 length

let storyArrayCount = storyArray.length

//2. filter out unnecessary words 
let betterWords = storyArray.filter(words =>{
    if (words !== unnecessaryWords[0] && words !== unnecessaryWords[1] && words !== unnecessaryWords[2]){
        return words;
    };
})
// console.log('better words length: ' + betterWords.length)
let betterWordsCount = betterWords.length

// check to see if they are there
let check = betterWords.some(words => {
    if ( words === 'extremely') {
        return true;
    } 
}) 
// console.log(check)  // false for array unnecessaryWords  - works!

let overusedWords = ['really', 'very', 'basically'];

let checkOverused = betterWords.filter(words => {
    if (words === overusedWords[0]|| words === overusedWords[1] || words === overusedWords[2]) {
        return words;
    }
})
checkOverused =checkOverused.length // overusedwords amounts to 8 times in the betterArray
// console.log('Overused words are: ' + checkOverused)

// sentence count is next
let sentenceCount = betterWords.filter(numSentence => {
    let num = 0
    if (numSentence[numSentence.length-1] === '.' || numSentence[numSentence.length-1] === '!') {
        return numSentence;
    }
}) 
sentenceCount = sentenceCount.length
// console.log('Sentence count is: ' + sentenceCount)

//  function to report all of the work performed above

const summaryProject = () => {
    console.log('Initial story words is: ' +storyArrayCount);
    console.log('better words count is: ' + betterWordsCount);
    console.log('Overused words are: ' + checkOverused)
    console.log('Sentence count is: '+ sentenceCount)
}
summaryProject()

// logging betterWords to the console as a string
let betterWordsStory = betterWords.join(' ');
console.log(betterWordsStory)







