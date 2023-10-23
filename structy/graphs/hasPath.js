const hasPath = (graph, src, dst) => {
    if (src === dst) return true;
    for (const node of graph[src]) {
      if(hasPath(graph, node, dst)) return true;
    }
    return false;
  }

// recursively search for path to dst node given acyclic directed graph