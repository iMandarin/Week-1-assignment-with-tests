/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function splitAndSortAndJoin(tempStr)
{
  var tempStr = tempStr.toLowerCase();
  var sortedAns = tempStr.split("").sort().join("");
  return sortedAns;
}

function isAnagram(str1, str2)
{

  if (splitAndSortAndJoin(str1) == splitAndSortAndJoin(str2))
  {
    return true;
  }
  else
  {
    return false;
  }

}

module.exports = isAnagram;

let answer = isAnagram("spar", "rasp");
console.log(answer);
