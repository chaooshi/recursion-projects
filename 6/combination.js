/*
 Getting K-Combinations with Recursion
*/

function getKCombination(chars, k) {
  if (k == 0) return [""];
  if (k > chars.length) return [""];
  let result = [];
  for (let i = 0; i < chars.length; i++) {
    getKCombination(chars.slice(i + 1), k - 1)
      .filter((comb) => comb.length == k - 1)
      .forEach((comb) => {
        result.push(chars[i] + comb);
      });
  }
  return result;
}

console.dir(getKCombination(["A", "B", "C", "D"], 3));
console.dir(getKCombination("ABCD", 3));

// BOOK's solution
function getCombos(chars, k) {
  if (k == 0) {
    // BASE CASE
    return [""]; //If k asks for 0-combinations, return '' as the selection of zero letters from chars.
  } else if (chars == "") {
    // BASE CASE
    return []; // A blank chars has no combinations, no matter what k is.
  }
  // RECURSIVE CASE
  let combinations = [];
  // First part, get the combos that include the head: 1
  let head = chars.slice(0, 1);
  let tail = chars.slice(1, chars.length);
  let tailCombos = getCombos(tail, k - 1);
  for (let tailCombo of tailCombos) {
    combinations.push(head + tailCombo);
  }
  combinations = combinations.concat(getCombos(tail, k));
  return combinations;
}
console.dir(getCombos(["A", "B", "C", "D"], 3));
console.dir(getCombos("ABCD", 3));

/* Explaining my approach and book's
My Solution:

In my solution, I generate k-combinations by solving for k-1 combinations 
of the subarray that starts from the element after each picked element.
I then prepend the current element to each of these k-1 combinations to form the k-combinations.

Book's Solution:

The book's solution approaches the problem by first considering the combinations
that include the first element of the array. It solves for k-1 combinations 
of the remaining elements (excluding the first element) and combines the first element with these combinations.
Additionally, it considers the k-combinations of the remaining elements without the first element. 
By merging these two sets of combinations, it forms the complete k-combinations.
*/
