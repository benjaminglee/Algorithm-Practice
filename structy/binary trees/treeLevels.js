const treeLevelsHelper = (root, values = [], level = 0) => {
    if (root === null) return null;
    values.push({node: root.val, level});
    if(root.left) treeLevelsHelper(root.left, values, level + 1); // standard binary tree traversal, but returning object with additional level information
    if(root.right) treeLevelsHelper(root.right, values, level + 1);
    return values;
  };
  
  const treeLevels = (root) => {
    const nodes = treeLevelsHelper(root);
    let output = [];
    if(nodes === null) return output;
    for (nodeObj of nodes) {
      if(output[nodeObj.level]) output[nodeObj.level].push(nodeObj.node);
      else output[nodeObj.level] = [nodeObj.node];
    }
    return output;
  }

  // recursively return 2d array containing each level of a binary tree