const largestComponent = (graph) => {
    const visited = new Set();
    let maxSize = 0;
    for (const node in graph) {
      const sizeOfComponent = explore(graph, node, visited);
      if(sizeOfComponent > maxSize) maxSize = sizeOfComponent;
    }
    return maxSize;
  };
  
  const explore = (graph, node, visited) => {
    if(visited.has(node)) return 0;
    visited.add(node);
    let size = 1; // initialize size
    for (const point of graph[node]) {
      size += explore(graph, point, visited); // increment size for each recursive, non visited call
    }
    return size;
  }

//   const explore = (graph, node, visited) => {    // iterative solution
//     if(visited.has(node)) return 0;
//     let size = 0;
//     const stack = [node];
//     while(stack.length > 0) {
//       const current = stack.pop();
//       for (const neighbor of graph[current]) {
//         if(visited.has(neighbor)) continue;
//         visited.add(neighbor);
//         size++;
//         stack.push(neighbor);
//       }
//     }
//     return size;
//   }

  // recursively return the largest size of a component in a given graph