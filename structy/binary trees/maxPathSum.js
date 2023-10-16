const maxPathSum = (root) => {
    if (root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.val; //return val if a leaf node
    const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right))
    return root.val + maxChild; // if not a leaf, add self to result of recursive call
  };