function getKCombination(chars, k) {
  if (k == 0) return [[]];
  if (k > chars.length) return [[]];
  let result = [];
  for (let i = 0; i < chars.length; i++) {
    getKCombination(chars.slice(i + 1), k - 1)
      .filter((comb) => comb.length == k - 1)
      .forEach((comb) => {
        result.push([chars[i], ...comb]);
      });
  }
  return result;
}

console.dir(getKCombination(["A", "B", "C", "D"], 3));
console.dir(getKCombination("ABCD", 3));
