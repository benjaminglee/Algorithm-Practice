function branchSums(root) {
  let vals = [];
  sums(root, 0, vals);
  return vals;
}

function sums(tree, currentSum = 0, sumArr) {
  currentSum += tree.value;
  if (tree.left) {
    sums(tree.left, currentSum, sumArr);
  }
  if (tree.right) {
    sums(tree.right, currentSum, sumArr);
  }
  if (!tree.left && !tree.right) sumArr.push(currentSum);
}
