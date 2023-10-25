const islandCount = (grid) => {
    // check visited nodes in a set
    const visited = new Set();
    let count = 0;
    for(let r = 0; r < grid.length; r++) {
      const row = grid[r];
      for (let c = 0; c < grid[0].length; c++ ) {
        // iterate through nodes and recursively search each one (similar to depth first search)
        if(explore(grid, r, c, visited)) count++;
      }
    }
    return count;
  };
  
  const explore = (grid, r, c, visited) => {
    // check to make sure nodes are in bounds
    const rowInBounds = 0 <= r && r < grid.length;
    const colInBounds = 0 <= c && c < grid[0].length;
    if(!rowInBounds || !colInBounds) return false;
    if(grid[r][c] === 'W') return false;
    
    const position = `${r},${c}`; // must store position as string since reference types won't work for us
    if(visited.has(position)) return false;
    visited.add(position);
    
    // this is a core way of searching a 2d array;
    explore(grid, r + 1, c, visited);
    explore(grid, r - 1, c, visited);
    explore(grid, r, c + 1, visited);
    explore(grid, r, c - 1, visited);
    // this will explore all attached pieces of land but will never, by definition, hit another island
    return true;
  }