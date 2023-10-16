const treeIncludes = (root, target) => {
    if(root === null) return root === target;
    if(root.val === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target)
  };

  // recursively search for a value in a binary tree