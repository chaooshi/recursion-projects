/*
The permutation function in this chapter operates on characters in
a string value. Modify it so that the sets are represented by lists (in
Python) or arrays (in JavaScript) and the elements can be values of any
data type. For example, your new function should be able to generate
permutations of integer values, rather than strings.
*/

function allPossiblePerm(arr) {
  if (arr.length == 0) return [[]];
  if (arr.length == 1) {
    return [arr];
  }
  let [head, ...tail] = arr;
  let tailPerm = allPossiblePerm(tail);
  let result = [];
  for (let perm of tailPerm) {
    for (let i = 0; i < perm.length + 1; i++) {
      let temp = [...perm.slice(0, i), head, ...perm.slice(i)];
      result.push(temp);
    }
  }
  return result;
}

console.log(allPossiblePerm([0, 9, 8]));
console.log(allPossiblePerm(["A", 1, "B"]));
