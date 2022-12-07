function findClosestValueInBst(tree, target) {
  return findNode(tree, target, tree.value);
}
//create helper func
function findNode(tree, target, closest) {
  //if node is empty, return closest
  if (tree === null) return closest;
  //update closest if current val is closer
  if (Math.abs(target - closest) > Math.abs(target - tree.value))
    closest = tree.value;
  if (target < tree.value) {
    return findNode(tree.left, target, closest);
  } else if (target > tree.value) {
    return findNode(tree.right, target, closest);
    //if neither greater or less than, we have hit closest and can return
  } else return closest;
}
