const bestBridge = (grid) => {
    let mainIsland;
    // find first island and store result to make sure we don't return land from it
    for(let r = 0; r < grid.length; r++) {
      for(let c = 0; c < grid[0].length; c++) {
        const result = findFirstIsland(grid,r,c, new Set());
        if(result.size > 0) {
          mainIsland = result;
          break;
        }
      }
    }
    // store main island coordinates in visited. this won't effect search, because we add values to queue only after they have been checked for not vsiited
    // our logic will check neighbor coordinates
    const visited = new Set(mainIsland);
    const queue = [];
    
    // push all island pieces into queue by converting to num coordinates and storing distance
    for(const pos of visited) {
      const [r, c] = pos.split(',').map(Number);
      queue.push([r, c, 0]);
    }
    console.log(queue);
    
    while(queue.length) {
      const current = queue.shift();
      // destructure, important for incrementing values
      const [r, c, distance] = current;
      if(!checkInBounds(grid, r, c)) continue;
      const position = r + ',' + c;
      // only return current element if not part of main island
      if(grid[r][c] === 'L' && !mainIsland.has(position)) return distance - 1;
      
      visited.add(position);
      // use deltas approach to simplify code
      const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      for (const delta of deltas) {
        const [deltaRow, deltaCol] = delta;
        const neighborRow = r + deltaRow;
        const neighborCol = c + deltaCol;
        const neighborPos =  neighborRow + ',' + neighborCol;
        if(checkInBounds(grid, neighborRow, neighborCol) && !visited.has(neighborPos)) {
          queue.push([neighborRow,neighborCol, distance + 1]);
          visited.add(neighborPos);
        }
      }
  }}
  
  //find the first island using recursive traversal
  const findFirstIsland = (grid, r, c, visited) => {
    const position = r + ',' + c;
    if ( 
      !checkInBounds(grid, r, c) || 
      grid[r][c] === 'W' ||
      visited.has(position)
    ) return visited;
    visited.add(position);
    
    findFirstIsland(grid, r + 1, c, visited);
    findFirstIsland(grid, r - 1, c, visited);
    findFirstIsland(grid, r, c + 1, visited);
    findFirstIsland(grid, r, c - 1, visited);
    
    return visited;
  }
  
  // helper function to check if neighbor is in grid
  const checkInBounds = (grid, r, c) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    return rowInbounds && colInbounds;
  }

// given a grod graph with 2 islands, find the shortest bridge that connects them