const shortestPath = (edges, nodeA, nodeB) => {
    // breadth first search is commonly used for shortest path problems
    const graph = makeGraph(edges);
    const queue = [ {val:nodeA, distance: 0} ]; // store nodes with distance to track how far they are from src node
    const visited = new Set([nodeA]);
    while(queue.length) {
      const current = queue.shift();
      if(current.val === nodeB) return current.distance;
      for (const neighbor of graph[current.val]) {
        if(visited.has(neighbor)) continue;
        visited.add(neighbor);
        queue.unshift({val: neighbor, distance: current.distance + 1});
      }
    }
    return -1;
  };

  // construct graph given set of edges
  const makeGraph = (edges) => {
    const graph = {};
    for (arr of edges) {
      const [a,b] = arr;
      if(!(a in graph)) graph[a] = [];
      if(!(b in graph)) graph[b] = [];
      graph[a].push(b);
      graph[b].push(a);
    }
    return graph;
  }