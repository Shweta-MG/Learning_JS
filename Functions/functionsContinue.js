//functions scope - Global scope
let totalWords = 0;

const updateTotalWords = (number) => {
    totalWords = number;
    return totalWords;
}

//console.log(updateTotalWords(56));

//
const birdNames = ['Sparrow', 'Robin', 'Blue Jay', 'Cardinal', 'Eagle', 'Hawk', 'Pigeon', 'Crow', 'Hummingbird', 'Owl'];
let birdName = '';
const birdWatch = (number) => {
    for (let i = 0; i < birdNames.length; i++){
        if (number === i && number <= birdNames.length) {
            birdName = birdNames[i];
            break;            
        }
        
        birdName = 'Invalid index';

    }
    return birdName;
}

console.log(birdWatch(-1));
console.log(birdWatch(1));
console.log(birdWatch(9));
console.log(birdWatch(11));


//functions scope - Block scope
//functions scope - Lexical scope