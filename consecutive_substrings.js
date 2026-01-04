/**
 * Generate all consecutive substrings of a given string.
 * Time Complexity: O(n^2) because of nested loops.
 * Space Complexity: O(n^2) since we store all substrings.
 */
function consecutiveSubstrings(string) {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      result.push(string.slice(i, j));
    }
  }

  return result;
}

if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));
}

module.exports = consecutiveSubstrings;