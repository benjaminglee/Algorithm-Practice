const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = {};
    for (let edge of edges) {
      const [a, b] = edge
      if(!graph[a]) graph[a] = [];
      if(!graph[b]) graph[b] = [];
      graph[a].push({val:b});
      graph[b].push({val:a});
    }
    // build an adjacency list

    const stack = [nodeA];
    
    while(stack.length > 0) {
      const current = stack.pop();
      if(current === nodeB) return true;
      console.log(current);
      for (const node of graph[current]) {
        if(node.visited) continue; // mark node as visited to avoid infinite loops
        node.visited = true;
        stack.push(node.val);
      }
    }
    return false;
  };

  // given a list of edges, determine if nodeA is connected to nodeB