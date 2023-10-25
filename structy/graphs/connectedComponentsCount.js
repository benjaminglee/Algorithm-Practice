const connectedComponentsCount = (graph) => {
    const visitedList = new Set();
    let count = 0;
    for (const node in graph) {
      if(visitedList.has(node)) continue;
      // for every unvisited starting node, increment count
      count++;
      recursiveSearch(node, visitedList, graph);
    }
    return count;
  };
  
  // recursively search each key of graph
  const recursiveSearch = (node, visitedList, graph) => {
    if(visitedList.has(node)) return;
    visitedList.add(node.toString());
    for (let point of graph[node]) {
      recursiveSearch(point.toString(), visitedList, graph);
    }
  }

  // return the number of separate components in a given graph