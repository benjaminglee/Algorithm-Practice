const allTreePaths = (root) => {
    if (root === null) return [ ];
    
    if (root.left === null && root.right === null) return [ [root.val] ] //return a nested array so we can iterate and push the proper subpath
    
    const paths = [];
    
    const leftSubPaths = allTreePaths(root.left);
    for (let subPath of leftSubPaths) {
      paths.push([ root.val, ...subPath ]);
    }
    
    const rightSubPaths = allTreePaths(root.right);
    for (let subPath of rightSubPaths) {
      paths.push([ root.val, ...subPath ]);
    }
    // after each invocation, add on current val to subpath arr;
    
    return paths;
  };

  //print out all root to leaf paths in a binary tree