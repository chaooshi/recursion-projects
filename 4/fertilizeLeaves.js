/*
2. Create a function that, given a root node as an argument, proceeds to
make the tree one level deeper by adding one child node to each leaf
node in the original tree. This function will need to perform a tree
traversal, detect when it has reached a leaf node, and then add one and
only one child node to the leaf node. Be sure not to go on and add a
child node to this new leaf node, as that will eventually cause a stack
overflow
*/
function fertilizeLeaves(node) {
  if (node.children.length === 0) {
    node.children.push({ data: "new-born", children: [] });
    return node;
  }
  for (let child of node.children) {
    fertilizeLeaves(child);
  }
  return node;
}

// Test Case :

const root = {
  data: "A",
  children: [
    { data: "B", children: [{ data: "D", children: [] }] },
    {
      data: "C",
      children: [
        {
          data: "E",
          children: [
            { data: "G", children: [] },
            { data: "H", children: [] },
          ],
        },
        { data: "F", children: [] },
      ],
    },
  ],
};

console.dir(fertilizeLeaves(root), { depth: null });
