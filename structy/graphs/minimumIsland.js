const minimumIsland = (grid) => {
    const visited = new Set();
    let minSize = Infinity;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        const size = explore(grid, r, c, visited);
        // check if size is 0 (water node)
        if(size > 0 && minSize > size) minSize = size;
      }
    }
    return minSize;
  };
  
  const explore = (grid, r, c, visited) => {
    const rowInBounds = 0 <= r && r < grid.length;
    const colInBounds = 0 <= c && c < grid[0].length;
    if(!rowInBounds || !colInBounds) return 0;
    if(grid[r][c] === 'W') return 0;
    const position = r + ',' + c;
    if(visited.has(position)) return 0;
    visited.add(position);
    let size = 1;
    // add up size of islands
    size += explore(grid, r + 1, c, visited);
    size += explore(grid, r - 1, c, visited);
    size += explore(grid, r, c + 1, visited);
    size += explore(grid, r, c - 1, visited);
    
    return size;
  }

  // return the minimum size of island given grid graph. 