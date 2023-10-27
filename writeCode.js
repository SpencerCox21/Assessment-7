// Sum zero section below ---------------------------------------------
let sumZeroArray = [28, 43, -12, 30, 4, 0, 12]

function sumZero (arr) {

let value = false

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i] + arr[j] === 0) {
        value = true
      } 
    }
  }
}
console.log(value);

}

sumZero(sumZeroArray);


// The sum zero code has a runtime complexity of O(n^2) due to the program searching in a for-loop inside of another for-loop. Both of the loops also are taking in an array where the length of the array can be any positive number.

// The sum zero code has a space complexity of O(n) because it only has one array that it needs to keep track of, and the result at the end is just a simple true or false so the result has a space complexity of O(1). 



// Sum zero section above ---------------------------------------------


console.log(' ')
// Unique characters section below ------------------------------------


function hasUnique(input) {
    for (let i = 0; i < input.length; i++){

        for (let j = i + 1; j < input.length; j++) {

            if (input[i] === input[j]) {
                return false;

            }
        }
    }
    return true;
}


console.log(hasUnique('tommas'));
console.log(hasUnique('tomas'));

// The unique character code has a runtime complexity of O(n^2) due to the for-loop inside of a for-loop, and both of the loops taking in an array where the length of the string can be any positive number.

// The unique character code has a space complexity of O(1) because it only has one string to keep track of and that string is not modified. the result is also O(1) because it is just a simple boolean.



// Unique characters section above ------------------------------------


console.log(' ')
// Pangram sentence section below -------------------------------------

function pangram(str){


    let arr = str.toLowerCase();
    let list = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < list.length; i++) {

      if(arr.indexOf(list[i]) < 0){
        console.log(false)
        return false;
      }

    }

    console.log(true)
    return true;
}

pangram("The quick brown fox jumps over the lazy dog!");
pangram("I like cats, but not mice");


// The pangram sentence code has a runtime complexity of O(n) due to the for-loop that loops through the given string only once to check if every letter has been seen.

// the pangram sentence code has a space complexity of O(n) because it takes in a string and then modifies it into an array, then has to check that array for all letters. The result has a space complexity of O(1) because it is a boolean.


// Pangram sentence section below -------------------------------------


console.log(' ')
// Longest word section below -----------------------------------------

function longestWord(arr) {
    let currentBiggest = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > currentBiggest) {
            currentBiggest = arr[i].length
        }
    }

    console.log(currentBiggest)
    return currentBiggest
}

longestWord(["hi", "hello", "greetings"])

// The longest word code has a runtime complexity of O(n) due to the for-loop having to run through the array to check if the current word length is bigger then the current biggest length.

// The longest word code has a space complexity of O(n) because it only has one array that it needs to keep track of, and the result at the end is just one simple integer so the result has a space complexity of O(1).


// Longest word section above -----------------------------------------