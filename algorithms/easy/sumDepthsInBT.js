//array approach

function nodeDepths(root) {
  let depths = [];
  sumDepth(-1, root, depths);
  console.log(depths);
  return depths.reduce((acc, val) => acc + val, 0);
}

function sumDepth(depth = -1, tree, depthArr) {
  depth += 1;
  depthArr.push(depth);
  if (tree.left) {
    sumDepth(depth, tree.left, depthArr);
  }
  if (tree.right) {
    sumDepth(depth, tree.right, depthArr);
  }
}

//recursive add approach

function nodeDepths(root, depth = 0) {
  if (!root) {
    return 0;
  }
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}
