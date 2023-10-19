const bottomRightValue = (root) => {
    const queue = [root];
    let last = root;
    while(queue.length) {
      const current = queue.shift();
      last = current;
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right); 
    }
    return last.val;
  };

  // return the last (right-most bottom) value in a binary tree