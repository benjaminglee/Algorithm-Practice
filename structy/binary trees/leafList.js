const leafList = (root) => {
    const leafNodes = [];
    if(root === null) return leafNodes;
    if(root.left === null && root.right === null) return [root.val];
    if(root.left) leafNodes.push(...leafList(root.left));
    if(root.right) leafNodes.push(...leafList(root.right));
    return leafNodes;
  };

  // return an array of all the leaf nodes in a binary tree from left to right