/**
 * Get All Combinations of Balanced Parentheses
A string has balanced parentheses if every opening parenthesis is followed by
exactly one closing parenthesis. For example, ′()()′ and ′(())′ are strings of
two balanced parentheses pairs, but ′)(()′ and ′(()′ are not balanced. 
 */

function getAllBalancedParens(openParens, closeParens, prefix) {
  if (prefix == undefined) {
    prefix = "";
  }
  if (closeParens == 0 && openParens == 0) {
    return [prefix];
  }
  let parenCombo = [];
  if (openParens > 0) {
    let newPrefix = prefix + "(";
    let tailCombo = getAllBalancedParens(
      openParens - 1,
      closeParens,
      newPrefix
    );
    parenCombo = parenCombo.concat(tailCombo);
  }
  if (closeParens > openParens) {
    let newPrefix = prefix + ")";
    let tailCombo = getAllBalancedParens(
      openParens,
      closeParens - 1,
      newPrefix
    );
    parenCombo = parenCombo.concat(tailCombo);
  }
  return parenCombo;
}

console.dir(getAllBalancedParens(4, 4), Infinity);
