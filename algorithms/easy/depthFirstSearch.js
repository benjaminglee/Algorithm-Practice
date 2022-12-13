//assumes a node with an array of child nodes (children) and a name prop
//return an array with each node name appended in dfs order
const depthFirstSearch = (array) => {
  array.push(this.name);
  for (const child of this.children) {
    child.depthFirstSearch(array);
  }
  return array;
};
