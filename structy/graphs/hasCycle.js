const hasCycle = (graph) => {
    let visited = new Set();
    for(const node in graph) {
      if(checkCycle(graph, node, visited, new Set())) return true;
    }
    return false;
  };
  
  const checkCycle = (graph, node, visited, history) => {
    // if we have successfully added node to visited, we know there is no cycle so return early
    if(visited.has(node)) return false;
    // if our history set has this node, we've visited it during this cycle
    if(history.has(node)) return true;
    history.add(node);
    for(const neighbor of graph[node]) {
      if(checkCycle(graph,neighbor,visited, history)) return true;
    }
    // after exiting the loop (meaning no cycle), recursively add all nodes to our visited set to speed up future iterations
    visited.add(node);
    
    return false;
  }

// check for a cycle in a graph/adjacency list