const longestPath = (graph) => {
    const distance = {};
    for (let node in graph) {
      if(graph[node].length === 0) distance[node] = 0;
    }
    for (let node in graph) {
      exploreNode(graph, node, distance);
    }
    return Math.max(...Object.values(distance));
  };
  
  const exploreNode = (graph, node, distance) => {
    if (node in distance) return distance[node];
    let maxLength = 0;
    for (let neighbor of graph[node]) {
      const pathLength = exploreNode(graph, neighbor, distance);
      if(pathLength > maxLength) maxLength = pathLength;
    }
    distance[node] = 1 + maxLength;
    return distance[node];
  }

  // return longest path in a acyclic nondirected graph