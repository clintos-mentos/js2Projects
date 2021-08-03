let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 
'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,',
 'Learn', 'JavaScript'];
//  console.log(secretMessage)
secretMessage.pop()
// console.log(secretMessage[secretMessage.length -1])  //Learn   Javascript got popped
secretMessage.push('to','Program') //worked 
// console.log(secretMessage)

secretMessage[secretMessage.indexOf('easily')] = 'right'  //find index of easily and replace with word 'right
//console.log(secretMessage[7]) //check  - worked

// remove first string in the array with shift method
secretMessage.shift()
secretMessage.unshift('Programming')
//console.log(secretMessage[0]) //check if learning has removed and new first element is 'is'

// remove get right the first time arrays and replace with 'know'
// check starting index of get and ending index of time 
// console.log(secretMessage.indexOf('get'));
// console.log(secretMessage.indexOf('time,'));

// console.log(secretMessage)

secretMessage.splice(secretMessage.indexOf('get'),5,'know');
// console.log(secretMessage)

// join the array to reveal the message
messageRevealed = secretMessage.join(' ');
// console.log(messageRevealed)
