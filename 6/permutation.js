/**
 * Finding All Permutations Without Repetition:
 * A Wedding Seating Chart
Imagine you must arrange the seating chart for a wedding reception with
delicate social requirements. Some of the guests hate each other, while
others demand to sit near an influential guest. The seats at the rectangular table form one long, straight row, rather than a circle. It’d be helpful
for your planning to see every possible ordering of guests—that is, every
permutation without repetition of the set of guests. No repetition occurs,
because each guest appears in the seating chart only once.
 */

function allPossiblePerm(guests) {
  if (guests.length == 0) return [""];
  if (guests.length == 1) {
    return [guests[0]];
  }
  let [head, ...tail] = guests;
  let tailPerm = allPossiblePerm(tail);
  let result = [];
  for (let perm of tailPerm) {
    for (let i = 0; i < perm.length + 1; i++) {
      let temp = perm.slice(0, i) + head + perm.slice(i);
      result.push(temp);
    }
  }
  return result;
}

console.dir(allPossiblePerm(["A", "B", "C"]));
console.dir(allPossiblePerm("ABC")); // You can even find permutations of a string's

/**
 * Permutations with Repetition: A Password Cracker
 */

function allPossiblePasswords(chars, permLength) {
  if (permLength == undefined) {
    permLength == chars.length;
  }
  if (permLength == 0) return [""];
  let result = [];

  for (let char of chars) {
    allPossiblePasswords(chars, permLength - 1).forEach((pss) => {
      result.push(char + pss);
    });
  }
  return result;
}

// console.dir(allPossiblePasswords(["A", "B", "C"], 2));
// console.dir(allPossiblePasswords(["J", "P", "B", 1, 2, 3], 4));
