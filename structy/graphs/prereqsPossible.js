const prereqsPossible = (numCourses, prereqs) => {
    const graph = buildGraph(prereqs);
    const visited = new Set();
    
    for(const node in graph) {
       if(checkCycle(graph, node, visited, new Set())) return false;
    }
    return true;
  };
  
  // build directed graph
  const buildGraph = (prereqs) => {
    const graph = {};
    for(const prereq of prereqs) {
      const [a,b] = prereq;
      if(!(a in graph)) graph[a] = [];
      if(!(b in graph)) graph[b] = [];
      graph[a].push(b);
    }
    return graph;
  }
  
  // use white grey black algo. here course and prereqs are represented by a directed graph made from an edge list
  const checkCycle = (graph, node, visited, history) => {
    if(visited.has(node)) return false;
    if(history.has(node)) return true;
    history.add(node)
    console.log(node, graph[node])
    for(const neighbor of graph[node]) {
      if(checkCycle(graph, neighbor, visited, history)) return true;
    }
    // recursively bubble up and add all visited nodes to visited
    visited.add(node);
    return false;
  }

  // return a boolean value indicating whether or not all nodes can be visited in a cycle given an edge list