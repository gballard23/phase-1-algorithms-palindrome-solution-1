 const reverse = (word) => {
   return word.split('').reverse().join('');
}

function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = reverse(word);

  return word === reverseWord

}

/* 
  Add your pseudocode here
  Reverse the input string
  if the input is the same in reverse 
  return true
  else
  return false
*/

/*
  Add written explanation of your solution here
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log('=>', isPalindrome("madam"));
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
