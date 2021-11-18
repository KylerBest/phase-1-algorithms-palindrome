function isPalindrome(word) {
  // Write your algorithm here
  let result = '';
  for(let i = word.length-1; i > -1; i--){
    result += word[i];
  }
  return (result == word ? true : false);
}

/* 
  take in a word
  make a 'result' variable and set it to an empty string
  make a for loop that starts at the end of the word and counts down to 0
  add each letter to result
  compare result to the original word
  if they are the same then return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
