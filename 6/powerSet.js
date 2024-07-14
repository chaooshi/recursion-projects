/*
Power Set: Finding All Subsets of a Set

The power set of a set is the set of every possible subset of that set. For
example, the power set of {A, B, C} is {{ }, {A}, {B}, {C}, {A, B}, {A, C}, {B, C},
{A, B, C}}.

To find every power set of a set, we could reuse our existing getCombos()
function, calling it repeatedly with each possible k argument. 

However, we can use a more efficient way to generate power sets. Let’s
consider the power set of {A, B}, which is {{A, B}, {A}, {B}, { }}. Now say we
add one more element, C, to the set and want to generate the power set
of {A, B, C}. We have the four sets in the power set of {A, B} we already generated; in addition, we have these same four sets but with the element C
added to them: {{A, B, C}, {A, C}, {B, C}, {C}}.

*/

function getPowerSet(chars) {
  if (chars.length == 0) {
    return [[]];
  }
  let [head, ...tail] = chars;
  let tailPowerSet = getPowerSet(tail);
  let powerSet = tailPowerSet.map((item) => [head, ...item]);
  powerSet = powerSet.concat(tailPowerSet);
  return powerSet;
}

console.log(getPowerSet(["A", "B", "C"]));
